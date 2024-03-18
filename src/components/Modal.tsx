import React, { SetStateAction,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {

  const navigate = useNavigate();
  const [nickName,setNickName]=useState(""); 
  const [nickNameError,setNickNameError]=useState("false");
  const handleNextBtn=()=>{
    setModalOpen((prev)=>!prev);
    navigate('/myspace')
  }
  const checkNickName=()=>{
    
  }
  return (
    <div className="relative w-[48rem] h-[23rem] rounded-md border-solid border-2 border-black-500 flex flex-col">
      <h1 className='text-[2rem] ps-[3.2rem] pt-[3.2rem] font-bold'>닉네임을 입력하세요</h1>
      <button className='text-[2rem] absolute top-0 right-3 font-bold' onClick={()=>setModalOpen((prev)=>!prev)}>X</button>
      <h3 className='ps-[3.2rem] text-[1.4rem] text-orange-600'>ⓘ 닉네임은 최소 네 글자 이상이어야 합니다.</h3>
      <input className='w-[41.6rem] h-[3.2rem] rounded-md mt-[3.2rem] mx-auto bg-[#F5F5F5]' placeholder='닉네임을 입력하세요'></input>
      <button className='absolute bottom-2 right-3 w-[4rem] h-[3rem] mt-[3.2rem] text-[1.4rem] font-bold border-solid border-2 border-black-600/100' onClick={handleNextBtn}>확인</button>
        
    </div>
  );
};
//const 

export default LoginModal;