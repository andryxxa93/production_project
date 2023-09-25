import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entitie/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';
import { UserRole } from 'entitie/User/model/consts/consts';

interface RequireAuthProps {
    roles?: UserRole[];
    children: JSX.Element;
}

export default function RequireAuth({ children, roles } : RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) return true;

        return roles?.some((role) => {
            const hasRole = userRoles?.includes(role);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} />;
    }

    return children;
}
