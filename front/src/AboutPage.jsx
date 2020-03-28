import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';

function renderAboutUs({ name, img, position, info, link }) {
  return (
    <AboutUs
      key={name}
      name={name}
      img={img}
      position={position}
      info={info}
      link={link}
    />
  );
}

const MemberList = [
  {
    name: 'Dan',
    img: 'devv',
    position: 'Front-end Developer, Design',
    info:
      '문제 해결을 좋아하고 취미로 디자인을 하는 개발자입니다. 새로운 도전과 지속적인 발전을 추구합니다.',
    link: '',
  },
  {
    name: 'greyay',
    img: 'greyay',
    position: 'Developer',
    info:
      '배우고 성장하며 얻은 지식과 기술을 나눌 수 있는 개발자가 되고 싶습니다.',
    link: '',
  },
  {
    name: 'joabyjoa',
    img: 'joabyjoa',
    position: 'Front-end Developer',
    info: '코로나 바이러스가 어서 잠잠해지기를 바랍니다.',
    link: 'https://github.com/joabyjoa',
  },
  {
    name: 'Nahia',
    img: 'nahia',
    position: 'PM, Back-end Developer',
    info: '열심히 사는 삶을 지향하는 개발자',
    link: '',
  },
  {
    name: 'Sonia / 배성희',
    img: 'sonia',
    position: 'Developer',
    info:
      '사람들에게 도움이 되는 개발자가 되고 싶습니다. 코로나 바이러스가 하루빨리 해결 되기를 바랍니다!',
    link: 'www.github.com/forbid403',
  },
  {
    name: 'Aim B',
    img: 'aimb',
    position: 'Product Manager',
    info: '세상을 더 나은 곳으로 바꿔가고 싶습니다.',
    link: 'Instagram @andyoureturntome',
  },
];

const About = () => {
  return (
    <section>
      <h2>🤔 About Us</h2>
      <span className="about-us__text">6인조 여성 개발팀</span>
      <div className="member__container">{MemberList.map(renderAboutUs)}</div>
    </section>
  );
};

export default About;
