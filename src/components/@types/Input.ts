import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputType = "text" | "email" | "password";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label?: string;
  type: InputType;
  required: boolean;
};
