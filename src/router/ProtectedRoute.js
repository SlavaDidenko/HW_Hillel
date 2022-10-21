import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.sign.user);
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  },[])
};

export default ProtectedRoute;
