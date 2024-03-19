import React from 'react';

const SurveyTag = ({ tagText, idx }: { tagText: string; idx: number }) => {
  const colorList = ['bg-[#F04D1D]', 'bg-[#FF7364]', 'bg-[#A75EFF]', 'bg-[#1EBDFE]', 'bg-[#0DCF85]'];

  return (
    <div
      className={`w-[10rem] h-[3.2rem] ${colorList[idx]} grid place-items-center text-white rounded-md text-[1.2rem] font-bold mx-[0.8rem]`}
    >
      {tagText}
    </div>
  );
};

export default SurveyTag;
