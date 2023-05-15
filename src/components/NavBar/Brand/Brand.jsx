import { NavLink } from 'react-router-dom';
import brand from './assets/logo.svg'

export default function Brand() {
    return (
        <NavLink to="/" className="brand">
            <img src={brand} alt="Samwell's Library logo" />
        </NavLink>
    );
}