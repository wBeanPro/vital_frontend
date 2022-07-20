import { dAppName } from 'config';
import ProjectDetails from 'pages/ProjectDetails/ProjectDetails';
import Projects from 'pages/Projects/Projects';
import withPageTitle from './components/PageTitle';
import LandingPage from './pages/LandingPage';

export const routeNames = {
  home: '/',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  landingpage: '/landingpage',
  projects: '/projects',
  projectdetail: '/projectdetail'
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: LandingPage
  },
  {
    path: routeNames.landingpage,
    title: 'Landing Page',
    component: LandingPage
  },
  {
    path: routeNames.projects,
    title: 'Projects',
    component: Projects
  },
  {
    path: routeNames.projectdetail,
    title: 'Project Detail',
    component: ProjectDetails
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);
  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
