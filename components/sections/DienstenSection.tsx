import ButtonLink from '@components/buttons/ButtonLink';
import React from 'react';
import { Color } from 'styles/styleEnums';

interface DienstenSectionProps {
  diensten: string[];
}

const DienstenSection = ({ ...props }: DienstenSectionProps) => {
  return (
    <div className="py-[80px] font-bold bg-onoo_blue_dark flex flex-col items-center ">
      <div className="text-[32px] font-poppins  text-white">
        {' '}
        Andere Diensten
      </div>

      <div className="flex flex-row flex-wrap mt-[32px]">
        {props.diensten.map((item) => {
          const link = item.trim().replace(/\s+/g, '-').toLowerCase();
          return (
            <ButtonLink
              buttonText={item}
              color={Color.WHITE}
              url={'/diensten/' + link}
            ></ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

export default DienstenSection;
