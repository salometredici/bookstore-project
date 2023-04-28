import brand from './assets/logo.svg'

export default function Brand() {
    return (
        <a href="/" className="brand">
            <img src={brand} alt="Samwell's Library logo" />
        </a>
    );
}