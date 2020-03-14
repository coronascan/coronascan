import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ResultContext from '../../contexts/ResultContext';
import './style.css';

const ResultPage = props => {
  console.log('result page');
  const [data, setData] = useState({});

  const { target, changeBg } = useContext(ResultContext);

  useEffect(() => {
    const fetchData = async () => {
      if (target === '중국') {
        setData({
          _id: '',
          continent: '중국',
          nation_kr: '중국',
          nation_eng: 'China',
          state: '1',
          detail: '자세한 내용은 다시 검색해주세요. ex) 중국 후난성',
          tooltip: '입국 제한',
        });
        return;
      }
      try {
        const response = await fetch('http://ec2-54-196-23-111.compute-1.amazonaws.com/map');
        console.log(response);
        if (response.status === 200) {
          const list = await response.json();
          const [data] = list.filter(({ nation_kr }) =>
            nation_kr.includes(target),
          );
          setData(data);
        }
      } catch (error) {
        console.log(error);
        props.history.push('/');
        alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
      } finally {
        // TODO: 입국 허용일 때 배경색 추가
        const bg = data.state ? '#e7a3a2' : '#a43f3d';
        console.log(bg);
        changeBg(bg);
      }
    };
    fetchData();
  }, []);

  const history = useHistory();
  const handleClick = () => history.push('/');
  return (
    <section className="result-area">
      <div className="result-card">
        <p className="name">{data?.nation_kr}</p>
        <h3 className="action">
          {/* // TODO: 입국 허용일 때 문구 추가 */}
          {data?.state ? '입국 제한 조치' : '입국 금지 조치'}
        </h3>
        <p className="source">{data?.date} 기준, 출처 : 외교부</p>
        <p className="body">{data?.detail}</p>
      </div>
      <Button variant="dark" onClick={handleClick}>
        다른 국가 확인하기
      </Button>
    </section>
  );
};

export default ResultPage;
