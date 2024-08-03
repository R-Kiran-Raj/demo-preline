import React, { ReactNode } from "react";

export declare interface TextProps {
  /** Text Size */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /** Children to render */
  children: ReactNode;
  /** Custom css class name */
  className?: string;
};

const Text = ({
  variant = "p",
  children,
  className,
}: TextProps) => {
  const Component = variant;

  const getTextStyles = () => {
    switch (variant) {
      case "h1":
        return "text-4xl leading-11 font-bold text-black";
      case "h2":
        return "text-xl font-bold";
      case "h3":
        return "text-xl font-bold";
      case "h4":
        return "text-lg font-bold";
      case "h5":
        return "text-base font-bold text-black";
      case "h6":
        return "text-sm font-bold mb-4";
      default:
        return "text-base text-black";
    }
  };

  const TextStyles = getTextStyles();

  return (
    <Component className={`${TextStyles} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
