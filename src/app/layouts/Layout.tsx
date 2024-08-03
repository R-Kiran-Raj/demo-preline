import React, { ReactNode } from "react";
import PrelineScript from "../../components/PrelineScript";

export interface LayoutProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Onboarding children to render */
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="flex flex-col justify-center items-center p-4 md:p-0 bg-onBoarding h-full">{children}
        <PrelineScript />
        </div>;
}
