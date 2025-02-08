"use client";

import { CardWrapper } from "./card-wrapper";

interface LoginFormProps {
  children: React.ReactNode;
}

export const LoginForm = ({ children }: LoginFormProps) => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      {" "}
      Login Form
      {children}
    </CardWrapper>
  );
};
