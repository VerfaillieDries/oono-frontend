import React from 'react';
import Image from 'next/image';

const DokterHero = () => {
  return (
    <div className="mt-[271px] flex flex-col items-center w-full justify-center mt">
      <div className="w-[490px]  flex flex-row py-[32px] px-[32px] rounded-[10px] items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
        <div className="relative h-[120px] w-[124px] mr-[32px]">
          <Image
            layout="fill"
            className="rounded-full"
            alt={'test'}
            objectFit="cover"
            src={'https://picsum.photos/200/300'}
          ></Image>
        </div>
        <div className=" flex flex-col">
          <h1 className="font-poppins text-[26px]">Dokter</h1>
          <h1 className="mb-[8px] font-poppins text-[32px] ">Naam</h1>
        </div>
      </div>
    </div>
  );
};

export default DokterHero;
