import { useSelector } from 'react-redux';
import { UserRole,selectUserRole } from '../Redux/userSlice';

export const ProtectedWrapper = ({ children,role }: { children: React.ReactNode, role:UserRole }) => {

    const userRole=useSelector(selectUserRole)
    if (role===userRole) {
    return children
    }
    return null;
}