import React from "react";
import { TextInput, Button } from "evergreen-ui";

export const Input = ({ children }) => (
  <div className="inputContainer">{children}</div>
);

export const InputField = props => (
  <TextInput
    className="inputField"
    onKeyPress={props.onKeyPress}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    type={props.type}
    required={props.required}
    min={props.min}
  />
);

export const InputButton = props => (
  <Button
    style={{ verticalAlign: "baseline" }}
    justifyContent={"center"}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.label}
  </Button>
);
