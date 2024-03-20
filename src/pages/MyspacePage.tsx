import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@components/Header';

const MyspacePage = () => {
  const location = useLocation();
  const nickName = location.state ? location.state.nickName : '';
  return (
    <div className="h-screen w-full bg-[#FAFAFA]">
      <Header headText={'마이스페이스 💌'} nickName={`${nickName[0]}`} />
      <div className="relative top-[5.6rem] h-[8rem] border-b border-[#E5E5E5] bg-white px-[3.2rem]">
        <button className="mb-[0.78rem] h-[3.6rem] w-[13.2rem] rounded-[0.4rem] bg-[#262626] text-[1.4rem] font-bold text-white opacity-20 hover:opacity-100">
          새 설문 만들기
        </button>
        <div>
          <button className="mr-[1.6rem] h-[3.6rem] w-[8.7rem] border-b-2 border-[#262626] text-[1.4rem] font-bold text-[#262626]">
            보관함
          </button>
          <button className="h-[3.6rem] w-[11.6rem] text-[1.4rem] font-bold text-[#A3A3A3] ">참여한 설문</button>
        </div>
      </div>
    </div>
  );
};

export default MyspacePage;
