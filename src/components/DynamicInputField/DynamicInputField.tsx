import { useState } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";

export declare type DynamicInputFieldProps = {
  onInputChange: (index: number, value: string) => void;
  onRemoveField: (index: number) => void;
  type: string;
};

const DynamicInputField: React.FC<DynamicInputFieldProps> = ({
  onInputChange,
  onRemoveField,
  type,
}) => {
  const [inputFields, setInputFields] = useState<string[]>([""]);
  const [isVisibileAddButton, setVisibileAddButton] = useState<boolean>(true);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setInputFields(newInputFields);
    onInputChange(index, event.target.value);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, ""]);
  };

  const handleRemoveField = (index: number) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
    onRemoveField(index);
  };

  return (
    <>
      {inputFields.map((value, index) => (
        <div key={index} className="flex items-center pb-4 w-96 relative">
          <input
            type="text"
            value={value}
            onChange={(event) => handleInputChange(index, event)}
            className="border h-12 rounded-lg px-3 py-2 text-black w-full border-gray-300"
          />
          {index > 0 && (
            <button
              onClick={() => handleRemoveField(index)}
              className="absolute right-2 text-black"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                  fill="#D9D7CF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.23431 6.23431C6.54673 5.9219 7.05327 5.9219 7.36569 6.23431L10 8.86863L12.6343 6.23431C12.9467 5.9219 13.4533 5.9219 13.7657 6.23431C14.0781 6.54673 14.0781 7.05327 13.7657 7.36569L11.1314 10L13.7657 12.6343C14.0781 12.9467 14.0781 13.4533 13.7657 13.7657C13.4533 14.0781 12.9467 14.0781 12.6343 13.7657L10 11.1314L7.36569 13.7657C7.05327 14.0781 6.54673 14.0781 6.23431 13.7657C5.9219 13.4533 5.9219 12.9467 6.23431 12.6343L8.86863 10L6.23431 7.36569C5.9219 7.05327 5.9219 6.54673 6.23431 6.23431Z"
                  fill="#616369"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
      {isVisibileAddButton && (
        <>
          <button
            onClick={handleAddField}
            className="mb-4 flex text-black items-center bg-transparent border border-dashed h-12 rounded-lg px-3 py-2 w-full border-gray-300 font-light text-base"
          >
            <svg
              className="mr-3"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                fill="#D9D7CF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.67456 10C4.67456 9.55822 5.03273 9.20004 5.47456 9.20004H9.20004V5.47456C9.20004 5.03273 9.55822 4.67456 10 4.67456C10.4419 4.67456 10.8 5.03273 10.8 5.47456V9.20004H14.5255C14.9674 9.20004 15.3255 9.55822 15.3255 10C15.3255 10.4419 14.9674 10.8 14.5255 10.8H10.8V14.5255C10.8 14.9674 10.4419 15.3255 10 15.3255C9.55822 15.3255 9.20004 14.9674 9.20004 14.5255V10.8L5.47456 10.8C5.03273 10.8 4.67456 10.4419 4.67456 10Z"
                fill="#616369"
              />
            </svg>
            Add another
          </button>

          {type !== "email" ? (
            <Button
              btnType="primary"
              className="w-64"
              onClick={() => setVisibileAddButton(false)}
            >
              That’s it, Let’s proceed
            </Button>
          ) : (
            <div className="flex flex-row items-center mt-6">
              <Button btnType="primary" className="md:w-60 mr-8"  onClick={() => setVisibileAddButton(false)}>
              Send Invite
              </Button>

              <Text className="flex text-gray-700 font-medium border-dashed border-b border-gray-400 items-center w-28">
                I’ll do this later
              </Text>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DynamicInputField;
