import { UserLoginType } from "@/@types/UserLogin";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogin(): {
  error: string;
  isFormSubmitting: boolean;
  handleSubmitLogin: (values: UserLoginType) => Promise<void>;
} {
  const [error, setError] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const router = useRouter();

  async function handleSubmitLogin(values: UserLoginType) {
    setIsFormSubmitting(true);

    try {
      signIn("Credentials", { ...values, redirect: false }).then(
        ({ error }: any) => {
          if (!error) {
            router.push("/");
          } else {
            renderError(error.replace("Error: ", ""));
          }
          setIsFormSubmitting(false);
        }
      ) as Promise<SignInResponse | undefined>;
    } catch (err) {
      setIsFormSubmitting(false);
      renderError("Error ao logar, tente mais tarde!");
    }
  }

  function renderError(msg: string) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  return {
    error,
    isFormSubmitting,
    handleSubmitLogin,
  };
}
