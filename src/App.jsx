import {
  // lazy,
  Suspense,
  useEffect,
  // useEffect
} from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './components/Layout/Layout.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CampersDetailsPage from './pages/CampersDetailsPage/CampersDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import CampersFeatures from './components/CampersFeatures/CampersFeatures.jsx';
import CampersReviews from './components/CampersReviews/CampersReviews.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { useDispatch } from 'react-redux';
import { fetchCampers } from './redux/campers/operations.js';

// import RestrictedRuote from './RestrictedRuote';
// import PrivateRoute from './PrivateRoute';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
// const RegistrationPage = lazy(() =>
// import('../pages/RegistrationPage/RegistrationPage')
// );
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   // dispatch(refreshUser());
  // }, [dispatch]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CampersDetailsPage />}>
            <Route path="features" element={<CampersFeatures />} />
            <Route path="reviews" element={<CampersReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
