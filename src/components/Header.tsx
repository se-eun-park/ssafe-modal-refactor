import React from 'react';

const Header = ({ headText, nickName }: { headText: string; nickName: string }) => {
  return (
    <header>
      <div className="fixed z-10 w-full bg-white px-[3.2rem] py-[2.25rem] text-[1.6rem] font-bold text-[#525252]">
        <span>{headText}</span>
        <span>{nickName}</span>
      </div>
    </header>
  );
};

export default Header;
