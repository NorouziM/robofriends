import React from "react";

const SearchBox = ({ onChangeSearch }) => {
  return <input type="search" onChange={onChangeSearch} />;
};

export default SearchBox;
