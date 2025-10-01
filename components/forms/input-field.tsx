import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const InputField: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  register,
  disabled,
  error,
  type,
  validation,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} className="form-label mb-2">
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn("form-input", {
          "opacity-50 cursor-not-allowed": disabled,
        })}
        {...register(name, validation)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};
