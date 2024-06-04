import { InputProps } from '../types/types';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';

const Input = styled(Form.Control)`
  border-color: ${(props) => (props.isInvalid ? 'red' : 'none')};
`;

const InputText: React.FC<InputProps & { error: string }> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <Input
      id={id}
      type='text'
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isInvalid={error !== ''}
    />
  );
};

export default InputText;
