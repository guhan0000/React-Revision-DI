import React from "react";

export default React.memo(function Child() {
  console.log("child render");
  return (
    <>
      <h3>Child</h3>
    </>
  );
});
