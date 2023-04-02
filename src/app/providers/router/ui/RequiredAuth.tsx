import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entitie/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export default function RequireAuth({ children } : { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} />;
    }

    return children;
}
