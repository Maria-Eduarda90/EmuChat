import { UserRegisterType } from "@/@types/UserRegister";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useRegister(): {
  error: string;
  isFormSubmitting: boolean;
  handleSubmit: (values: UserRegisterType) => Promise<void>;
} {
  const [error, setError] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const router = useRouter();

  async function handleSubmit(values: UserRegisterType) {
    setIsFormSubmitting(true);

    try {
      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        } as UserRegisterType),
      }).then(async (res) => {
        const result = await res.json();

        if (result.status === 201) {
          alert(result.message);
          router.push("/auth/login");
        } else {
          renderError(result.message);
        }

        setIsFormSubmitting(false);
      });
    } catch (err) {
      setIsFormSubmitting(false);
      renderError("Error ao criar conta, tente mais tarde!");
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
    handleSubmit,
  };
}
