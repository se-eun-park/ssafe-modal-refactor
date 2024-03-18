import React, { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => setModalOpen((prev) => !prev)}>X</button>
      <button onClick={() => navigate('/myspace')}>Next</button>
    </div>
  );
};

export default Modal;
