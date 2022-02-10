import React from 'react';

type ButtonProps = {
  buttonText: String;
  url?: String;
  linkText?: String;
  children?: React.ReactNode;
};

const Button = ({ buttonText, linkText, url, children }: ButtonProps) => {
  return (
    <button className="flex justify-center py-[12px]  px-[24px]  border-transparent text-[18px] font-poppins  font-medium rounded-[8px] text-onoo_black bg-onoo_yellow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {children}
      {buttonText}
    </button>
  );
};

export default Button;
