"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/forms/input-field";
import { FooterLink } from "@/components/forms/footer-link";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (
    data: SignInFormData
  ) => {
    try {
      console.table(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          register={register}
          error={errors.email}
          validation={{
            required: "Email address is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Invalid email address",
          }}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: 8,
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          <span>{isSubmitting ? "Please wait..." : "Log In"}</span>
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
}
