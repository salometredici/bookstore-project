import { NavLink } from "react-router-dom";

export default function NavBarMenu() {
    return (
        <ul className="categories">
            <li>
                <NavLink to={"/category/fiction"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    Fiction
                </NavLink>
            </li>
            <li>
                <NavLink to={"/category/non-fiction"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    Non Fiction
                </NavLink>
            </li>
            <li>
                <NavLink to={"/category/children"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    Kids
                </NavLink>
            </li>
            <li>
                <NavLink to={"/category/education"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    Academic
                </NavLink>
            </li>
        </ul>
    );
}
