import {
  MapPage,
  HomePage,
  ResultPage,
  WorldPage,
  WarningPage,
  AboutPage,
  MailPage,
  WarningEntryPage
} from '../pages';

const ROUTES = [
  {
    path: '/map',
    name: '제한 조치 시행국 지도로 보기',
    component: MapPage,
    exact: true,
    navigation: true,
  },
  {
    path: '/',
    name: '입국 가능 국가 조회하기',
    component: HomePage,
    exact: true,
    navigation: true,
  },
  {
    path: '/result',
    name: '입국 가능 국가 조회 결과(나라 입력 후)',
    component: ResultPage,
    exact: true,
  },
  {
    path: '/warning',
    name: '외교부 여행 경보',
    component: WarningPage,
    navigation: true,
  },
  {
    path: '/warningentry',
    name: '특별입국 절차',
    component: WarningEntryPage,
    navigation: true,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage,
    navigation: true,
  },
  {
    path: '/mail',
    name: 'Mail Us',
    component: MailPage,
    navigation: true,
  },
];

export default ROUTES;
