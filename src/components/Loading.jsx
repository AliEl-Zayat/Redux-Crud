import React from "react";
const Loading = ({ loading, error, children }) => {
  return (
    <>
      {loading ? (
        <p>Loading please wait...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        children
      )}
    </>
  );
};
export default Loading;
