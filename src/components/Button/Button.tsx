import React, { ReactNode } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import googleSvg from '../../../public/svg/google.svg';
import microsoftSvg from '../../../public/svg/microsoft.svg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Children to render */
  children?: ReactNode;
  /** Custom css class name */
  className?: string;
  /** Active css class name for active state */
  activeClassName?: string;
  /** Loading state*/
  isLoading?: boolean;
  /** Whether the button is currently in active state */
  isActive?: Function | boolean;
  /**  Button type */
  btnType: "primary" | "secondary" | "disabled" | "googleBtn" | "microsoftBtn";
  /** Icon Size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  /** onClick function */
  onClick?: React.MouseEventHandler;
  isIcon? : boolean;
}

const LOGO_URL: any = {
  'googleBtn': googleSvg,
  'microsoftBtn': microsoftSvg,
};

const VARIANT_MAPS = {
  primary: "bg-secondary text-white h-12 w-full md:w-96 rounded-lg text-base",
  secondary: "bg-gray-500 text-white",
  default: "bg-gray-200 text-black",
  disabled:
    "bg-charcoal-70 text-white h-12 w-full md:w-96 rounded-lg text-base border border-stone-600 cursor-not-allowed",
  googleBtn:
    "flex items-center bg-white text-gray-800 font-bold h-12 w-full md:w-96 rounded-lg text-base justify-center item-center",
  microsoftBtn:
    "flex items-center bg-white text-gray-800 font-bold h-12 w-full md:w-96 rounded-lg text-base justify-center item-center",
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnType,
  activeClassName,
  isLoading,
  isActive,
  isIcon,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={btnType === "disabled" || isLoading}
      className={twMerge(
        activeClassName,
        btnType,
        VARIANT_MAPS[btnType],
        className
      )}
      {...rest}
    >
      {isIcon && (
        <Image src={btnType === 'googleBtn' ? googleSvg : microsoftSvg } alt="Auth" className="w-10 h-10 pr-3" />
      )}

      {isLoading ? null : children}
    </button>
  );
};

export default Button;
