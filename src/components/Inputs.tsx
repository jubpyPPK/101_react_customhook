import {InputProps, OptionData} from '../types/types'
import {Form} from 'react-bootstrap';
import styled from 'styled-components';
import React from "react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";


const FormGroup = styled(Form.Group)`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    padding: 5px;
`

const FormLabel = styled(Form.Label)`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

// const Input = styled(Form.Control)`
//     border-color: ${(props) => (props.isInvalid ? 'red' : 'none')};
// `;


const Inputs: React.FC<InputProps & { error: string } & { optionData?: OptionData[] }> = ({
                                                                                              error,
                                                                                              optionData,
                                                                                              ...props
                                                                                          }) => {
    return (<FormGroup>
        <FormLabel>{props.label}</FormLabel>
        {props.type === 'text' ? <InputText {...props} error={error}/> :
            <InputSelect {...props} error={error} optionData={optionData || []}/>}
        {error !== '' ? <p>{error}</p> : <></>}
    </FormGroup>)
}


export default Inputs