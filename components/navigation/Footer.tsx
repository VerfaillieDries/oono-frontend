import OnooLogo from '@components/logos/OnooLogo';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-row h-[152px] mx-auto  items-center justify-between max-w-7xl">
      <div>
        <OnooLogo></OnooLogo>
      </div>
      <div className="font-poppins text-onoo_blue font-normal">
        © 2022 Copyright Onoo Dokters - Website gemaakt door PandaPanda 🐼
      </div>
    </footer>
  );
};

export default Footer;
