import {
  DOMAttributes,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
export default function Button({
  children,
  className,
  ...attrs
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`hover:bg-black hover:text-white ${className}`}
      {...attrs}
    >
      {children}
    </button>
  );
}
