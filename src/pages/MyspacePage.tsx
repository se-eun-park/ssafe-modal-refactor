// import { useState } from 'react';
import Header from '@components/Header';
// import Modal from '@components/Modal';
// import Card from '@components/Card';
import SearchSVG from '@assets/search.svg?react';
import ArrowSVG from '@assets/arrow.svg?react';

const MyspacePage = () => {
  return (
    <div className="h-screen w-full bg-[#FAFAFA]">
      <Header headText={'마이스페이스 💌'} />
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
      <div className="relative top-[9rem] mb-[3.2rem] flex px-[3.2rem]">
        <div className="mr-[1.6rem] flex h-[3.6rem] w-[21.7rem] items-center justify-center rounded-[1.8rem] border border-[#E5E5E5] bg-white">
          <span className="mr-[3.2rem] text-[1.4rem] font-bold text-[#A3A3A3]">프로젝트를 검색하세요</span>
          <SearchSVG />
        </div>
        <div className="flex h-[3.6rem] w-[17.9rem] items-center justify-center rounded-[1.8rem] border border-[#E5E5E5] bg-white">
          <span className="mr-[1.6rem] text-[1.4rem] font-bold text-[#A3A3A3]">최근에 수정된 순서</span>
          <ArrowSVG />
        </div>
      </div>
      <div className="px-[3.2rem]">
        <div className="relative top-[9rem] flex "></div>
      </div>
    </div>
  );
};

export default MyspacePage;
