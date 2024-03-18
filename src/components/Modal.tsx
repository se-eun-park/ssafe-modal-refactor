import React, { SetStateAction } from 'react';

const Modal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return <button onClick={() => setModalOpen((prev) => !prev)}>버튼</button>;
};

export default Modal;
