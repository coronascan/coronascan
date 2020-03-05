import {
  HomePage,
  ResultPage,
  WorldPage,
  MapPage,
  WarningPage,
  AboutPage,
} from '../pages';

const ROUTES = [
  {
    path: '/',
    name: '입국 가능 국가 조회하기',
    component: HomePage,
  },
  {
    path: '/:contry',
    name: '입국 가능 국가 조회 결과',
    component: ResultPage,
  },
  {
    path: '/world',
    name: '전 세계 확진자',
    component: WorldPage,
  },
  {
    path: '/map',
    name: '제한 조치 시행국 지도로 보기',
    component: MapPage,
  },
  {
    path: '/warning',
    name: '외교부 여행 경고',
    component: WarningPage,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage,
  },
];

export default ROUTES;
