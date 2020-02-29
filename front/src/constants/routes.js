import { HomePage, WorldPage, MapPage, WarningPage, AboutPage } from '../pages'

const ROUTES = [
  {
    path: '/',
    name: '방문 가능 국가 조회',
    component: HomePage,
  },
  {
    path: '/world',
    name: '국가별 확진자',
    component: WorldPage,
  },
  {
    path: '/map',
    name: '지도로 보기',
    component: MapPage,
  },
  {
    path: '/warning',
    name: '입국 금지 국가',
    component: WarningPage,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage,
  },
]

export default ROUTES
