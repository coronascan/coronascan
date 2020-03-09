import {
  HomePage,
  ResultPage,
  ResultMapPage,
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
    exact: true,
  },
  {
    path: '/result/:country',
    name: '입국 가능 국가 조회 결과(나라 입력 후)',
    component: ResultPage,
    exact: true,
  },
  {
    path: '/map/:country',
    name: '입국 가능 국가 조회 결과(국가 선택 후)',
    component: ResultMapPage,
    exact: true,
  },
  {
    path: '/map',
    name: '제한 조치 시행국 지도로 보기',
    component: MapPage,
    exact: true,
  },
  {
    path: '/warning',
    name: '외교부 여행 경보',
    component: WarningPage,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage,
  },
];

export default ROUTES;