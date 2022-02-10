import ButtonLink from '@components/buttons/ButtonLink';
import { title } from 'process';
import React from 'react';
import { Color } from 'styles/styleEnums';

interface HeroProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}
const Hero = ({ ...props }: HeroProps) => {
  return (
    <div className="bg-onoo_blue_light h-[547px] flex flex-col items-center w-full justify-center mt">
      <div className="flex flex-col items-center mt-[150px]">
        <h1 className="text-onoo_blue font break-words">{props.title}</h1>
        <h4 className="text-onoo_blue">{props.subTitle}</h4>
      </div>
      <div className="mt-[32px]">{props.children}</div>
    </div>
  );
};

export default Hero;
