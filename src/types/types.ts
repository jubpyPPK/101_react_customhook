import React from "react";
import exp from "node:constants";
import { FormControlProps } from "react-bootstrap";

export type PostProps = { title: string; body: string };
export type OptionInfo = { id: string; value: string; label: string };
// export type InputProps = {
//     id : string
//     name : string,
//     label : string,
//     type : 'text' | 'select',
//     options? : OptionInfo[],
//     required? : boolean,
//     hint? : string,
//     placeholder? : string,
//     maxLength? : number
//     value? : any,
// }

export interface Validation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface InputProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "select";
  value?: string | string[] | number;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputState {
  [key: string]: string | number | string[];
}

export interface InputState2<T> {
  [key: string]: T;
}

export interface OptionData {
  id: string;
  value: string | number | string[];
  label: string;
}

export interface User {
  name: string;
}
