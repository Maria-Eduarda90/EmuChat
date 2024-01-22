import { ButtonProps } from "../@types/Button";

export function Button({ text, className, ...props }: ButtonProps) {
    return (
        <button {...props} className={className}>
            {text}
        </button>
    );
}