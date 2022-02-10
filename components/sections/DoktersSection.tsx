import DoctorOverviewCard from '@components/cards/DoctorOverViewCard';
import React from 'react';

interface DokterSectionProps {
  children: React.ReactNode;
}

const DokterSection = ({ children }: DokterSectionProps) => {
  return <div className="grid-cols-3">{children}</div>;
};

export default DokterSection;
