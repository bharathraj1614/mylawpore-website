import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Base props common to both button and link styles
type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

// Props for when the component is a standard <button>
type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never; // Ensure href is not passed
  };

// Props for when the component is a Next.js <Link> (<a> tag)
type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string; // Must have an href
  };

// The final props type is a union of the two, making it polymorphic
type Props = ButtonProps | AnchorProps;

export default function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  // Base styles for the button
  const baseStyles =
    "font-sans font-semibold rounded-md transition-colors duration-200 ease-in-out inline-flex items-center justify-center flex-shrink-0";

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-brand-gold text-brand-navy hover:bg-opacity-90",
    secondary: "bg-brand-navy text-neutral-off-white hover:bg-opacity-90",
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy",
  };

  // Size-specific styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Combine all classes
  const allClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`;

  // Type guard: If 'href' exists, we know it's an AnchorProps
  if (props.href) {
    return (
      <Link
        href={props.href}
        className={allClasses}
        {...(rest as Omit<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          keyof BaseProps
        >)} // Spread valid anchor props
      >
        {children}
      </Link>
    );
  }

  // Otherwise, we know it's a ButtonProps
  return (
    <button
      className={allClasses}
      {...(rest as Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof BaseProps
      >)} // Spread valid button props
    >
      {children}
    </button>
  );
}
