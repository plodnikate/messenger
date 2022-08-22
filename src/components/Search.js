import React from "react";
import search from "../img/search.png";

const SearchBar = (props) => {
    return (
        <div className="container-style search-container">
            <div className="search-glass">
                <img className="search-img" src={search} alt="search"/>
            </div>
            <div className="search-area-wrapper">
                <input className="search-area" type="text" value={props.searchValue} onChange={props.handleInputChange} placeholder="Search or start new chat"/> 
            </div>
            
        </div>
    )

}

export default SearchBar;