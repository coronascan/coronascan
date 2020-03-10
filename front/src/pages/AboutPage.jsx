import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';

function renderAboutUs({ name, img, position, info, link }) {
  return <AboutUs key={name} name={name} img={img} position={position} info={info} link={link} />
}

const MemberList = [
  {
    name: 'Devv',
    img: 'https://i.picsum.photos/id/867/200/300.jpg',
    position: "Front-end Developer, Design",
    info: "지속적인 발전을 추구하는 개발자입니다. 문제 해결을 좋아하고 취미로 디자인을 합니다.",
    link: ""
  },
  {
    name: 'joabyjoa',
    img: 'https://i.picsum.photos/id/866/200/300.jpg',
    position: "Front-end Developer",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    link: ""
  },
  {
    name: 'Nahia',
    img: 'https://i.picsum.photos/id/824/200/300.jpg',
    position: "PM, Back-end Developer",
    info: "열심히 사는 삶을 지향하는 개발자",
    link: ""
  },
  {
    name: 'Sonia / 배성희',
    img: 'https://i.picsum.photos/id/85/200/300.jpg',
    position: "Developer",
    info: "사람들에게 도움이 되는 개발자가 되고 싶습니다. 코로나 바이러스가 하루빨리 해결 되기를 바랍니다!",
    link: "www.github.com/forbid403"
  },
  {
    name: '호퍼',
    img: 'https://i.picsum.photos/id/81/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    link: ""
  },
  {
    name: 'Aim B',
    img: 'https://i.picsum.photos/id/1/200/300.jpg',
    position: "Product Manager",
    info: "세상을 더 나은 곳으로 바꿔가고 싶습니다.",
    link: "Instagram @andyoureturntome"
  }
]

const About = () => {
  return <section>
    <h2>About Us</h2>
    <span className="about-us__text">6인조 여성 개발팀</span>
    <div className="member__container">
      {MemberList.map(renderAboutUs)}
    </div>
  </section>
}

export default About
