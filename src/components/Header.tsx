import React from 'react';

const Header = ({ headText }: { headText: string }) => {
  return (
    <header>
      <div className=" bg-white px-[3.2rem] py-[2.25rem] font-inter text-[1.6rem] font-bold text-[#525252]">
        {headText}
      </div>
    </header>
  );
};

export default Header;
