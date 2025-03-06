import React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div
      style={{
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px 0',
      }}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
