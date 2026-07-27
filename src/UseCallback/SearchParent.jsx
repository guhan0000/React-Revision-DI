import React, { useCallback, useState } from "react";
import SearchChild from "./SearchChild";

const SearchParent = () => {
  const [name, setName] = useState("");
  console.log("parent render");
  const search = useCallback(() => {
    console.log("searching");
  }, []); // function doesn't recreates
  return (
    <div>
      SearchParent
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <SearchChild onSearch={search} />
    </div>
  );
};

export default SearchParent;
