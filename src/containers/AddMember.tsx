import React from "react";
import { InputProps, InputState, User } from "../types/types";
import useFormInputs from "../hooks/useFormInputs";
import Inputs from "../components/Inputs";
import styled from "styled-components";

const MyForm = styled.form`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  border: 1px solid #d2d6de;
  padding: 10px;
  max-width: 100%;
  background-color: white;
`;

const inputForm: Omit<InputProps, "value" | "onChange">[] = [
  {
    id: "input-name",
    name: "name",
    label: "Name : ",
    type: "text",
    required: true,
  },
];

interface AddMemberProps {
  onSubmit: (values: InputState) => void;
}

const AddMember: React.FC<AddMemberProps> = ({ onSubmit }) => {
  const initialInputValue = { name: "" };

  const { inputs, errors, handleOnChange, handleOnSubmit } = useFormInputs(
    initialInputValue,
    inputForm
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit(event);
    if (Object.keys(errors).length === 0) {
      onSubmit(inputs);
    }
  };

  return (
    <div>
      <h3>Add Member</h3>
      <MyForm onSubmit={handleSubmit}>
        {inputForm.map((item) => (
          <Inputs
            key={item.id}
            value={inputs[item.name]}
            onChange={handleOnChange}
            error={(errors[item.name] as string) || ""}
            {...item}
          />
        ))}
        <button type="submit">Add</button>
      </MyForm>
    </div>
  );
};
export default AddMember;
