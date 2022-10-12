import Browse from 'pages/Browse';
import Title from 'pages/Title';
import Error from 'pages/Error';
import SignIn from 'pages/SignIn';
const routes = [
  { name: 'Browse', path: '/browse', element: <Browse /> },
  { name: 'SignIn', path: '/sign-in', element: <SignIn /> },
  { name: 'Title', path: '/title/:id', element: <Title /> },
  { name: 'Error', path: '*', element: <Error /> },
];

export default routes
