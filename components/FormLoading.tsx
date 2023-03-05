import React from "react";

function FormLoading() {
  return (
    <div className="h-screen w-full fixed top-0 left-0 bg-[#000] bg-opacity-60 z-50">
      <div className="loading-animation top-[35%] sm:left-[44%] left-[38%] border-t-[#f26622] border-l-[#f26622] absolute border-solid border-[#646464] border-8 rounded-[50%] w-[8rem] h-[8rem]" />
    </div>
  );
}

export default FormLoading;
