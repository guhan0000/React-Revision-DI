import React from "react";

const SearchChild = React.memo(({ onSearch }) => {
  console.log("child render");

  onSearch();

  return <div>SearchChild</div>;
});

export default SearchChild;
