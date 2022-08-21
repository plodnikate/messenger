import React from "react";
import search from "../img/search.png";

const SearchBar = (props) => {
    const shouldDisplayButton = props.searchValue.length > 0;
    return (
        <div className="container-style search-container">
            <div className="search-glass">
                <img className="search-img" src={search}/>
            </div>
            <div>
                <input className="search-area" type="text" value={props.searchValue} onChange={props.handleInputChange} placeholder="Search or start new chat"/> {shouldDisplayButton && <button onClick={props.handleClearClick}>clear</button>}
            </div>
            
        </div>
    )

}

export default SearchBar;