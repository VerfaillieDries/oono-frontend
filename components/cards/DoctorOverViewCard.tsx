import React from 'react';
import Image from 'next/image';
import Button from '@components/buttons/Button';
import ButtonLink from '@components/buttons/ButtonLink';
import { Color } from 'styles/styleEnums';

type DoctorOverviewCardProps = {
  photo: string;
  name: string;
  link: string;
};

const DoctorOverviewCard = ({ photo, link, name }: DoctorOverviewCardProps) => {
  const newlink = link.trim().replace(/\s+/g, '-').toLowerCase();
  return (
    <div className="w-[490px]  flex flex-row py-[32px] px-[32px] rounded-[10px] bg-onoo_grey items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
      <div className="relative h-[120px] w-[124px] mr-[32px]">
        <Image
          layout="fill"
          className="rounded-full z-0"
          alt={name}
          objectFit="cover"
          src={'https://picsum.photos/200/300'}
        ></Image>
      </div>
      <div className=" flex flex-col">
        <h1 className="font-poppins text-[18px]">Dokter</h1>
        <h1 className="mb-[8px] font-poppins text-[24px] ">{name}</h1>
        <ButtonLink
          url={newlink}
          linkText="Meer inf"
          buttonText="Meer info"
          color={Color.YELLOW}
        />
      </div>
    </div>
  );
};

export default DoctorOverviewCard;
