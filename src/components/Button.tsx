import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  as?: typeof Link;
  to?: string;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    isLoading,
    as: Component = 'button',
    to,
    fullWidth,
    ...props
  }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500',
      'active:transform active:scale-95',
      fullWidth && 'w-full',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    );
    
    const variants = {
      primary: 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800',
      secondary: 'bg-white text-orange-600 hover:bg-orange-50 active:bg-orange-100',
      outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 active:bg-orange-100'
    };

    const sizes = {
      sm: 'px-2.5 py-1.5 text-sm',
      md: 'px-3.5 py-2 text-base',
      lg: 'px-5 py-2.5 text-base'
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (Component === Link && to) {
      return (
        <Component
          to={to}
          className={classes}
          {...(props as any)}
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⚪</span>
              <span>Loading...</span>
            </>
          ) : (
            children
          )}
        </Component>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin">⚪</span>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);