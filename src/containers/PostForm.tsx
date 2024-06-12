import React from "react";

import styled from "styled-components";
import { InputProps, InputState2, OptionData } from "../types/types";
import useFormInputs from "../hooks/useFormInputs";
import Inputs from "../components/Inputs";
import Parents from "../components/Parents";

const MyForm = styled.form`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  border: 1px solid #d2d6de;
  padding: 10px;
  max-width: 100%;
  background-color: white;
`;

const options: InputState2<OptionData[]> = {
  gender: [
    {
      id: "male",
      label: "Male",
      value: "male",
    },
    {
      id: "female",
      label: "Female",
      value: "female",
    },
  ],
};

const inputForm: Omit<InputProps, "value" | "onChange">[] = [
  {
    id: "input-nickname",
    name: "nickname",
    label: "Nickname : ",
    type: "text",
    required: true,
  },
  {
    id: "input-surname",
    name: "surname",
    label: "Surname : ",
    type: "text",
    required: true,
  },
  {
    id: "input-password",
    name: "password",
    label: "Password : ",
    type: "text",
  },
  {
    id: "input-confirm_password",
    name: "confirm_password",
    label: "Confirm Password : ",
    type: "text",
  },
  {
    id: "input-gender",
    name: "gender",
    label: "Gender : ",
    type: "select",
  },
];

const myInputForm: Omit<InputProps, "value" | "onChange">[] = [
  {
    id: "input-action",
    name: "action",
    label: "Action : ",
    type: "text",
    required: true,
  },
];

const PostForm = () => {
  const { inputs, errors, resetForm, handleOnChange, handleOnSubmit } =
    useFormInputs(
      {
        nickname: "",
        surname: "",
        password: "",
        confirm_password: "",
      },
      inputForm
    );

  const {
    inputs: myInputs,
    errors: myErrors,
    resetForm: myResetForm,
    handleOnChange: myHandleOnChange,
    handleOnSubmit: myHandleOnSubmit,
  } = useFormInputs(
    {
      action: "",
    },
    myInputForm
  );

  return (
    <div>
      <h1>PostForm</h1>
      <MyForm onSubmit={handleOnSubmit}>
        {inputForm.map((item) => (
          <Inputs
            key={item.id}
            value={inputs[item.name]}
            onChange={handleOnChange}
            error={(errors[item.name] as string) || ""}
            optionData={(options[item.name] as OptionData[]) || undefined}
            {...item}
          />
        ))}
        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </MyForm>
      <p>{Object.keys(inputs).map((key) => inputs[key])}</p>
      <p>{Object.keys(myInputs).map((key) => myInputs[key])}</p>
      <Parents>
        <MyForm onSubmit={myHandleOnSubmit}>
          {myInputForm.map((item) => (
            <Inputs
              key={item.id}
              value={myInputs[item.name]}
              onChange={myHandleOnChange}
              error={(myErrors[item.name] as string) || ""}
              optionData={(options[item.name] as OptionData[]) || undefined}
              {...item}
            />
          ))}
          <button type="submit">Submit</button>
          <button onClick={myResetForm}>Reset</button>
        </MyForm>
      </Parents>
    </div>
  );
};

export default PostForm;
