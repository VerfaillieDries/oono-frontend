import classNames from 'classnames';
import React from 'react';
import { Color } from 'styles/styleEnums';

type ButtonLinkProps = {
  buttonText: string;
  url: string;
  linkText?: string;
  color: Color;
  children?: React.ReactNode;
};

const ButtonLink = ({
  buttonText,
  linkText,
  url,
  color,
  children,
}: ButtonLinkProps) => {
  return (
    <a
      href={url}
      type="link"
      className={classNames(
        ' flex justify-center py-[12px] px-[24px]  text-[18px] font-poppins  font-bold rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-onoo_yellow hover:bg-onoo_yellow_dark text-black':
            color === Color.YELLOW,
          'bg-onoo_white hover:bg-onoo_blue_light text-onoo_blue_dark ':
            color === Color.WHITE,
          'bg-onoo_blue hover:bg-onoo_blue_dark text-onoo_white':
            color === Color.BLUE,
        }
      )}
    >
      {buttonText}
    </a>
  );
};

export default ButtonLink;
