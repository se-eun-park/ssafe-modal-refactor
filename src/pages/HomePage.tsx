import { useState, createContext } from 'react';
import { Dialog } from '@headlessui/react';
import Header from '@components/Header';
import nextArrowButton from '@assets/png/nextArrowButton.png';

export const NicknameContext = createContext(null);

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Header headText={'폼나는 싸패'} />
      <div className="flex h-screen items-center justify-center">
        <div className="h-[45rem] text-center">
          <p className="mb-[1.6rem] text-[1.6rem] font-bold text-[#4B5563]">데이터 수집을 위한 올인원 툴</p>
          <h1 className="mb-[1.6rem] text-[4.8rem] font-bold text-black">
            폼을 만들고 분석하는
            <br />
            가장 합리적인 방법
          </h1>
          <p className="text-[1.8rem] text-[#1E293B]">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            <br />
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-[9.7rem] h-[6.4rem] w-[32rem] rounded-[3.2rem] bg-[#6ED1F9] text-[2.4rem] font-bold text-white"
          >
            로그인
          </button>
        </div>
      </div>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
        <div className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel className="border-black-500 relative flex h-[23rem] w-[48rem] flex-col rounded-[0.8rem] border-2 border-solid bg-white">
              <Dialog.Title className="ps-[3.2rem] pt-[3.2rem] text-[2rem] font-bold">닉네임을 입력하세요</Dialog.Title>
              <Dialog.Description className="ps-[3.2rem] pt-[0.8rem] text-[1.4rem] text-orange-400">
                ⓘ 닉네임은 최소 네 글자 이상이어야 합니다.
              </Dialog.Description>

              <input
                className="focus:border-1 mx-auto mt-[3.2rem] h-[3.2rem] w-[41.6rem] rounded-md border bg-[#F5F5F5] ps-3 text-[1.4rem] text-[#404040] outline-none focus:border-[#737373]"
                placeholder="닉네임을 입력하세요"
              />
              <img
                onClick={closeModal}
                src={nextArrowButton}
                alt="nextArrowButton"
                className="absolute bottom-10 right-12 w-[1.4rem]"
              />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default HomePage;
