"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DonateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "default" | "small" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  asLink?: boolean;
}

export function DonateButton({
  href,
  className,
  variant = "default",
  children,
  onClick,
  asLink = false,
  ...props
}: DonateButtonProps) {
  const sizeStyles = {
    small: { "--size": "0.85rem" } as React.CSSProperties,
    default: { "--size": "1rem" } as React.CSSProperties,
    large: { "--size": "1.15rem" } as React.CSSProperties,
  };

  const commonProps = {
    className: cn("btn-donate", className),
    style: sizeStyles[variant],
    onClick,
    ...props,
  };

  if (asLink && href) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return <button {...commonProps}>{children}</button>;
} 