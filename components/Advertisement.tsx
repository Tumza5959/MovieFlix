import React from 'react';

const Advertisement: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-16 mt-4">
      <div className="bg-brand-gray h-24 md:h-32 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-lg md:text-xl font-semibold">พื้นที่สำหรับโฆษณา</span>
      </div>
    </div>
  );
};

export default Advertisement;
