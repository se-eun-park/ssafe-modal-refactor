import React from 'react';

const SurveyTag = ({ tagText }: { tagText: string; }) => {
    return (
        <div className='w-[10rem] h-[3.2rem] bg-[#D4D4D4] grid place-items-center text-white rounded-md text-[1.2rem] font-bold mx-[0.8rem]'>
          {tagText}
        </div>
    );
  };
  
  export default SurveyTag;
  