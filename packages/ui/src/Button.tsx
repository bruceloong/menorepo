import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: variant === 'primary' ? '#0070f3' : 'white',
        color: variant === 'primary' ? 'white' : '#0070f3',
        border: '1px solid #0070f3',
        borderRadius: '4px',
        padding: '8px 16px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
