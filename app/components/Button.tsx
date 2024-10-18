"use client"
import React from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'custom';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  customColor?: string;
}

export default function Button({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  customColor
}: ButtonProps) {
  const baseStyles = "font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
    custom: customColor || "bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500"
  };

  const sizeStyles: Record<ButtonSize, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
