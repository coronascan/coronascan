import { HomePage, WorldPage, MapPage, WarningPage, AboutPage } from '../pages';

const ROUTES = [
  {
    path: '/',
    name: '입국 가능 국가 조회',
    component: HomePage,
  },
  {
    path: '/world',
    name: '전세계 확진자',
    component: WorldPage,
  },
  {
    path: '/map',
    name: '제한 조치 시행국 지도로 보기',
    component: MapPage,
  },
  {
    path: '/warning',
    name: '외교부 권고 사항',
    component: WarningPage,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage,
  },
];

export default ROUTES;
