import { PhoneIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import React from 'react';
import { Color } from 'styles/styleEnums';

type ButtonPhoneProps = {
  phoneNumber: string;
  color: Color;
  buttonText: string;
};

const ButtonPhone = ({ phoneNumber, color, buttonText }: ButtonPhoneProps) => {
  return (
    <a
      href={'tel:' + phoneNumber}
      type="link"
      className={classNames(
        ' flex items-center justify-around py-[8px] px-[24px]   border-transparent text-[16px] font-poppins  font-medium rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
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
      <div className="h-[16px] w-[16px] mr-2">
        <PhoneIcon></PhoneIcon>
      </div>
      <div>{buttonText}</div>
    </a>
  );
};

export default ButtonPhone;
