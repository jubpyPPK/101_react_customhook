import React from "react";
import { InputProps, InputState, OptionData, User } from "../types/types";
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
    id: "input-order_name",
    name: "order_name",
    label: "Name : ",
    type: "text",
    required: true,
  },
  {
    id: "input-owner_name",
    name: "owner_name",
    label: "Owner : ",
    type: "select",
    required: true,
  },
  {
    id: "input-amount",
    name: "amount",
    label: "Amount : ",
    type: "text",
    required: true,
  },
];

interface AddOrderProps {
  members: InputState[];
}

const AddOrder = ({ members }: AddOrderProps) => {
  const initialInputValue = {
    order_name: "",
    owner_name: "",
    amount: "",
  };
  const { inputs, errors, handleOnChange, handleOnSubmit } = useFormInputs(
    initialInputValue,
    inputForm
  );

  const optionData = (items: InputState[]): OptionData[] => {
    return items.map((item) => {
      return {
        id: item.name as string,
        value: item.name as string,
        label: item.name as string,
      } as OptionData;
    });
  };

  return (
    <div>
      <h3>Add Orders</h3>
      <MyForm onSubmit={handleOnSubmit}>
        {inputForm.map((item) => (
          <Inputs
            key={item.id}
            value={inputs[item.name]}
            onChange={handleOnChange}
            error={(errors[item.name] as string) || ""}
            optionData={optionData(members) as OptionData[]}
            {...item}
          />
        ))}
        <button type="submit">Add</button>
      </MyForm>
    </div>
  );
};
export default AddOrder;
