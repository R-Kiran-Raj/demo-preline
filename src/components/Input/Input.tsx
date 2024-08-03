import React, { createContext, useContext, useState, useEffect } from "react";
import { isValidEmail, isValidUrl } from "../../utils/validations";

interface InputContextType {
  value: string;
  error: string;
  setValue: (value: string) => void;
  setError: (error: string) => void;
  onInputError?: (error: string) => void;
}

const InputContext = createContext<InputContextType>({
  value: "",
  error: "",
  setValue: () => {},
  setError: () => {},
});

export const useInputContext = (): InputContextType => useContext(InputContext);

export interface InputProps {
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  className?: string;
  onInputError?: (error: string) => void;
  getValue?: (error: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  required,
  minLength,
  className,
  onInputError,
  getValue,
  placeholder,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleInputError = (error: string) => {
      const newHasError = error !== "";
      if (newHasError !== hasError && onInputError) {
        setHasError(newHasError);
        onInputError(newHasError ? error : "");
      }
    };

    handleInputError(error);
  }, [error, hasError, onInputError]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    const newValue = event.target.value;
    let newError = "";

    if (required && newValue.trim() === "") {
      newError = `${label} is required`;
    } else if (minLength && newValue.length < minLength) {
      newError = `${label} must be at least ${minLength} characters long`;
    } else if (type === "email" && !isValidEmail(newValue)) {
      newError = "Invalid email address";
    } else if (type === "url" && !isValidUrl(newValue)) {
      newError = "Invalid URL";
    } else {
      onInputError && onInputError("");
    }

    setError(newError);
    getValue && getValue(event.target.value);
  };

  const inputClassName = `border h-12 text-black rounded-lg px-3 py-2 w-full ${
    error ? "border-red-500" : value ? "border-primary" : "border-gray-300"
  }`;

  return (
    <InputContext.Provider value={{ value, error, setValue, setError }}>
      <div className={`w-full md:w-96 ${className}`}>
        {label !== "" && (
          <label
            htmlFor={name}
            className="block mb-2 font-semibold text-sm text-gray-500"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={inputClassName}
          placeholder={placeholder}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </InputContext.Provider>
  );
};

export default Input;
