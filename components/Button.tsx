import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  href,
  external,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rudra-bg focus:ring-rudra-accent transition-colors duration-200";

  const variants = {
    // Primary: Teal background, white text
    primary: "border-transparent text-white bg-rudra-accent hover:bg-rudra-accent-hover",
    // Secondary: White background, charcoal text, subtle border
    secondary: "border-rudra-text/20 text-rudra-text bg-white hover:bg-rudra-bg-secondary",
    // Outline: Transparent, teal border, teal text
    outline: "border-rudra-accent text-rudra-accent bg-transparent hover:bg-rudra-accent hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an internal link, use smooth scroll
    if (href && href.startsWith('#') && !external) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }

    // Execute the original onClick handler if it exists (e.g., closing mobile menu)
    if (onClick) {
      (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)(e);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={handleScroll}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
