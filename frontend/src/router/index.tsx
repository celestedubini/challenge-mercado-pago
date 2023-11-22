import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import DetailPage from '../pages/detail/DetailPage';
import ErrorPage from '../pages/error/ErrorPage';
import ListPage from '../pages/list/ListPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: '/',
        loader: () => redirect('/list'),
      },
      { path: '/list', element: <ListPage /> },
      {
        path: '/detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
