import React from 'react';
import { HiOutlineCube, HiOutlineTag, HiOutlineTruck } from 'react-icons/hi';

const InfoSection: React.FC = () => {
  return (
    <div className="hidden sm:block bg-white py-4 px-6 shadow-md z-10 mb-0">
      <div className="flex flex-col sm:flex-row justify-around items-center text-gray-700">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <HiOutlineCube className="text-3xl" />
          <span className="mt-2 font-title font-semibold text-center">Wide Assortment.</span>
          <span className='font-body text-center'>Loads of Items.</span>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <HiOutlineTag className="text-3xl" />
          <span className="mt-2 font-semibold font-title text-center">Save Time, Stress & Money.</span>
          <span className='font-body text-center'>Order Online Today.</span>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <HiOutlineTruck className="text-3xl" />
          <span className="mt-2 font-semibold font-title text-center">Delivery To All Hostels on Campus.</span>
          <span className='font-body text-center'>Hostel delivery.</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;