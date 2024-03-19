import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@components/Header';

const MyspacePage = () => {
  const location = useLocation();
  const nickName = location.state ? location.state.nickName : '';
  return (
    <div>
      <Header headText={`마이스페이스  🧑‍💻${nickName}`} />
      <h1>MyspacePage</h1>
    </div>
  );
};

export default MyspacePage;
