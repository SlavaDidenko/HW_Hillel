import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = () => {

  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  },[])
};

export default ProtectedRoute;
