import {
  // lazy,
  Suspense,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CampersDetailsPage from './pages/CampersDetailsPage/CampersDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import CampersFeatures from './components/CampersFeatures/CampersFeatures.jsx';
import CampersReviews from './components/CampersReviews/CampersReviews.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { Toaster } from 'react-hot-toast';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'var(--white)',
            color: 'var(--text)',
          },
        }}
      />

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
    </>
  );
}
