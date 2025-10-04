import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

// Define props for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // Optional href for navigation buttons
  variant?: "primary" | "secondary" | "outline"; // Button styles
  size?: "sm" | "md" | "lg"; // Button sizes
  children: React.ReactNode; // Content inside the button
}

export default function Button({
  href,
  variant = "primary", // Default variant
  size = "md", // Default size
  children,
  className, // Allow external class overrides
  ...props // Pass remaining button attributes
}: ButtonProps) {
  // Base styles for the button
  // Changed 'flex' to 'inline-flex' to prevent it from taking full width
  // Also added flex-shrink-0 to prevent it from growing unnecessarily
  const baseStyles =
    "font-sans font-semibold rounded-md transition-colors duration-200 ease-in-out inline-flex items-center justify-center flex-shrink-0";

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-brand-gold text-brand-navy hover:bg-opacity-90", // Gold background, Navy text
    secondary: "bg-brand-navy text-neutral-off-white hover:bg-opacity-90", // Navy background, Off-white text
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy", // Outline style
  };

  // Size-specific styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Combine all classes
  const allClasses = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${className || ""}`;

  if (href) {
    // If href is provided, render as a Next.js Link
    return (
      <Link href={href} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a standard button
  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
