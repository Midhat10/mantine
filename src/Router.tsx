import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
  ],
  {
    basename: isVercel ? '/' : '/mantine',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
