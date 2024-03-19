import { useState } from 'react';
import Modal from '@components/Modal';
import Header from '@components/Header';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('login');

  const showModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div>
      <Header headText={'폼나는 사패'} />
      <h1>HomePage</h1>
      <button onClick={()=>showModal(modalType)}>Test</button>
      {modalOpen && <Modal modalType={modalType} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default HomePage;
