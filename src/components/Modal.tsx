import React, { SetStateAction, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({
  modalType,
  setModalOpen,
}: {
  modalType: string;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      {modalType === 'login' && <LoginModal setModalOpen={setModalOpen} />}
      {modalType === 'survey' && <SurveyModal setModalOpen={setModalOpen} />}
    </div>
  );
};

const LoginModal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState(false);
  useEffect(() => {
    checkNickName();
  }, [nickName]);
  const handleNextBtn = () => {
    if (nickNameError) {
      setModalOpen((prev) => !prev);
      navigate('/myspace', { state: { nickName: nickName } });
    } else {
      alert('닉네임이 이상해요');
    }
  };
  const checkNickName = () => {
    if (nickName.length < 4) {
      setNickNameError(false);
    } else {
      setNickNameError(true);
    }
  };

  return (

    <div className="border-black-500 relative flex h-[23rem] w-[48rem] flex-col rounded-md border-2 border-solid bg-white">
      <h1 className="ps-[3.2rem] pt-[3.2rem] text-[2rem] font-bold">닉네임을 입력하세요</h1>
      <button className="absolute right-3 top-0 text-[2rem] font-bold" onClick={() => setModalOpen((prev) => !prev)}>
        X
      </button>
      <h3 className={`ps-[3.2rem] text-[1.4rem] text-orange-600 ${nickNameError ? 'invisible' : ''}`}>
        ⓘ 닉네임은 최소 네 글자 이상이어야 합니다.
      </h3>
      <input
        className="mx-auto mt-[3.2rem] h-[3.2rem] w-[41.6rem] rounded-md bg-[#F5F5F5]"
        placeholder="닉네임을 입력하세요"
        onChange={(e) => setNickName(e.target.value)}
      ></input>
      <button
        className="border-black-600/100 absolute bottom-2 right-3 mt-[3.2rem] h-[3rem] w-[4rem] border-2 border-solid text-[1.4rem] font-bold"
        onClick={handleNextBtn}
      >
        확인
      </button>

    </div>
  );
};

const SurveyModal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="relative w-[67.2rem] h-[52.5rem] rounded-md border-solid border-2 border-black-500 flex flex-col">
      <button className='text-[2.5rem] absolute top-10 right-12 font-bold' onClick={() => setModalOpen((prev) => !prev)}>X</button>
      <h1 className='text-[2rem] ps-[4.5rem] pt-[3.2rem] font-bold'>새로운 설문지를 작성합니다.</h1>
      <h3 className='ps-[4.5rem] text-[1.4rem] text-gray-600' >새로운 설문지를 만들기 위한 설정입니다.</h3>
      <div className='w-[60.8rem] h-[33.6rem] flex flex-col rounded-md mx-auto mt-[2.4rem] bg-[#FAFAFA] border-solid border-2 border-black-500'>
        <label htmlFor="surveyTitle" className='ms-[1.6rem] mt-[1.6rem] text-[1.4rem]' >설문지 이름을 입력하세요</label>
        <input id="surveyTitle" className='w-[57.6rem] h-[3.2rem] rounded-md mt-[0.8rem] mx-auto bg-[#F5F5F5] border-solid border-2 border-black-500' placeholder='제목을 입력하세요' ></input>
        <label htmlFor="surveyContent" className='ms-[1.6rem] mt-[3.2rem] text-[1.4rem]'>설문지 설명을 입력하세요</label>
        <textarea id='surveyContent' className='w-[57.6rem] h-[9.6rem] rounded-md mt-[0.8rem] mx-auto bg-[#F5F5F5] border-solid border-2 border-black-500' placeholder='내용을 입력하세요' ></textarea>
        <div className='w-[57.6rem] h-[3.2rem] flex flex-row mx-auto mt-[3.2rem]'>
          <div className='w-[10rem] h-[3.2rem] bg-[#D4D4D4] grid place-items-center text-white rounded-md text-[1.2rem] font-bold'>#태그입력</div>
        </div>
      </div>
      <button className='absolute bottom-10 right-12 w-[4rem] h-[3rem] mt-[3.2rem] rounded-md text-[1.4rem] font-bold border-solid border-2 border-black-600/100' >확인</button>

    </div>
  );
};     


export default Modal;
