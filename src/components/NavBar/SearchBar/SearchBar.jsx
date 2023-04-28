import searchIcon from './assets/searchIcon.svg';

export default function SearchBar() {
    return (
        <form className="search-bar-container form-inline my-2 my-lg-0">
            <input type="search" placeholder="Search by title / author / keyword">
            </input>
            <span>
                <button className="search-btn" type="submit">
                    <img src={searchIcon} alt="search-icon"></img>
                </button>
            </span>
        </form>
    );
}
