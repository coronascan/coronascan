import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFoundPage.css';

const notFoundPage = props => {
  return (
    <div className="not-found-area">
      <h2>404 Not Found</h2>
      <p>요청을 찾을 수 없습니다</p>
      <Button variant="dark" onClick={() => props.history.push('/')}>
        이전 페이지로 돌아가기
      </Button>
    </div>
  );
};
export default notFoundPage;
