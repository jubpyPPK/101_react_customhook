import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import React from 'react';
import { InputProps, OptionData } from '../types/types';

const Select = styled(Form.Select)`
  border-color: ${(props) => (props.isInvalid ? 'red' : 'none')};
`;

function OptionList(props: { values: OptionData[] }) {
  return null;
}

const InputSelect: React.FC<
  InputProps & { error: string } & { optionData: OptionData[] }
> = ({ name, placeholder, value, onChange, error, optionData }) => {
  return (
    <Select name={name} placeholder={placeholder} value={value} error={error}>
      {optionData.map((option) => (
        <option id={option.id} key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default InputSelect;
