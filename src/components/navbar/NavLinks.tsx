import { Link, useLocation } from "react-router-dom"

type NavLinksProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    route: any
}

export const NavLinks = ({ route }: NavLinksProps) => {
    const location = useLocation();
    const isCurrent = location.pathname === route.path;

    return (
        <Link to={route.path} className={`flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 ${isCurrent ?? "font-semibold"}`} key={location.key}>
            {route.id}
        </Link>
    )
} 
