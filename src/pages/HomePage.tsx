import { useState } from 'react';
import Modal from '@components/Modal';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={showModal}>Test</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default HomePage;
