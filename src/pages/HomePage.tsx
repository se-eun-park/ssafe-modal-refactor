import { useState } from 'react';
import Modal from '@components/Modal';
import Header from '@components/Header';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Header headText={'폼나는 사패'} />
      <h1>HomePage</h1>
      <button onClick={showModal}>Test</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default HomePage;
