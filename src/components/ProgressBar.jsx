"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="red"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBar;
