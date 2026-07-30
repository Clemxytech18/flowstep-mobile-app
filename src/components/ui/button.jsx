import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

export const Button = forwardRef(function Button(
  { className = "", variant = "default", size = "default", children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
});
