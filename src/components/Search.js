import React from "react";

const SearchBar = (props) => {
    const shouldDisplayButton = props.searchValue.length > 0;
    return (
        <div>
            <input type="text" value={props.searchValue} onChange={props.handleInputChange} /> {shouldDisplayButton && <button onClick={props.handleClearClick}>clear</button>}
            
        </div>
    )

}

export default SearchBar;