import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ResultContext from '../../contexts/ResultContext';
import './style.css';
import Config from '../../config/config'


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
        const response = await fetch(Config.server_url + '/map');
        console.log(response);
        if (response.status === 200) {
          const list = await response.json();
          let [data] = list.filter(({ nation_kr }) =>
            nation_kr.includes(target),
          );
          if (!data.length) {
            data = {
              _id: '',
              continent: '',
              nation_kr: target,
              nation_eng: target,
              state: '2',
              detail: '입국 가능한 국가입니다.',
              tooltip: '입국 가능',
            };
          }
          setData(data);
        } else {
          props.history.push('/');
          alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
        }
      } catch (error) {
        console.log(error);
        props.history.push('/');
        alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
      } finally {
        // TODO: 입국 허용일 때 배경색 추가
        const { state } = data;
        const bg =
          state == '0' ? '#A43F3D' : state == '1' ? '#E7A3A2' : `#9FD3D0`;
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
          {data?.state == '0'
            ? '입국 금지 조치'
            : data?.state == '1'
            ? '입국 제한 조치'
            : `입국 가능`}
        </h3>
        <p className="source">출처 : 외교부</p>
        <p className="body">{data?.detail}</p>
      </div>
      <Button variant="dark" onClick={handleClick}>
        다른 국가 확인하기
      </Button>
    </section>
  );
};

export default ResultPage;
