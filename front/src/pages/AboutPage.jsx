import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';

function renderAboutUs({ name, img, position, info }) {
  return <AboutUs key={name} name={name} img={img} position={position} info={info} />
}

const MemberList = [
  {
    name: 'Aimb',
    img: 'https://i.picsum.photos/id/867/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  },
  {
    name: 'Devv',
    img: 'https://i.picsum.photos/id/866/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  },
  {
    name: 'Nahia',
    img: 'https://i.picsum.photos/id/824/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  },
  {
    name: '개굴',
    img: 'https://i.picsum.photos/id/85/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  },
  {
    name: '도막',
    img: 'https://i.picsum.photos/id/81/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  },
  {
    name: '호퍼',
    img: 'https://i.picsum.photos/id/1/200/300.jpg',
    position: "position",
    info: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
  }
]

const About = () => {
  return <section>
    <h2>🤔 About Us</h2>
    <span className="about-us__text">6인조 여성 개발팀</span>
    <div className="member__container">
      {MemberList.map(renderAboutUs)}
    </div>
  </section>
}

export default About
