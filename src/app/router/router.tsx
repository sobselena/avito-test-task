import { createBrowserRouter, Navigate } from 'react-router';
import { Paths } from '../../constants';
import { ErrorPage } from '../../pages/error';
import { AdEditPage } from '../../pages/ad-edit';
import { AdInfoPage } from '../../pages/ad-info';

import { NotFoundPage } from '../../pages/not-found';
import { AdsPage } from '../../pages/ads-list';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <Navigate to={Paths.ADS_LIST} replace />,
  },
  {
    path: Paths.ADS_LIST,
    element: <AdsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.AD_INFO,
    element: <AdInfoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.AD_EDIT,
    element: <AdEditPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to={Paths.NOT_FOUND} replace />,
  },
]);
