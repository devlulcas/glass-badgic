import { forwardRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={
          "shadow-md p-2 flex-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 active:shadow-sm" +
          " " +
          className
        }
      >
        PLASTIC
      </button>
    );
  }
);
