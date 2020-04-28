import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import ResultContext from '../../contexts/ResultContext';
import './style.css';
import Config from '../../config/config'


const ResultPage = props => {
  let [data, setData] = useState({});
  let [isFetching, setFetch] = useState(false);
  const history = useHistory();
  const { target, changeBg } = useContext(ResultContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Config.server_url}/maps/${target}`);

        if (response.status === 200) {
          const list = await response.json()

          data = {
            _id: list._id,
            continent: '',
            nation_kr: list.nation_kr,
            nation_eng: list.nation_eng,
            state: list.state,
            detail: list.detail,
            tooltip: list.state === '0' ? '입국 금지' : '입국 제한',
          }
          setData(data)
        }
      } catch (error) {
        console.log(error);
        props.history.push('/');
        alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
      } finally {
        // TODO: 입국 허용일 때 배경색 추가
        const { state } = data;
        const bg =
          state === '0' ? '#A43F3D' : state === '1' ? '#E7A3A2' : `#9FD3D0`;
        changeBg(bg);
        setFetch(true)
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    history.goBack();
  }
  return (
    <ul>
      {isFetching ?
      <section className="result-area">
      <div className="result-card">
        <p className="name">{target}</p>
        <h3 className="action">
          {data?.state === '0'
            ? '입국 금지 조치'
            : data?.state === '1'
              ? '입국 제한 조치'
              : `입국 가능`}
        </h3>
        <p className="source">출처 : 외교부</p>
        <p className="body">{data.detail !== undefined ? data.detail : `'${target}'은(는) 입국 가능한 국가입니다.`}</p>
      </div>
      <Button variant="dark" onClick={handleClick}>
        다른 국가 확인하기
      </Button>
    </section>
    :
    <div className="spinner">
      <Spinner className="spinner_center" animation="grow"/>
    </div>}
    </ul>
    
  );
};

export default ResultPage;
