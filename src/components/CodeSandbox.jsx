"use strict";

import React from "react";

export const CodeSandbox = ({
  url = "new",
  params = {},
  height = "400px",
  title = ""
}) => {
  const defaultParams = {
    codemirror: 1,
    fontsize: 12,
    editorsize: 65,
    view: "split"
  };

  const searchParams = new URLSearchParams({
    ...defaultParams,
    ...params
  })
    .toString()
    .replace(/%2C/g, ",");

  return (
    <iframe
      src={`https://codesandbox.io/embed/${url}?${searchParams}`}
      style={{
        width: "100%",
        height,
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
        display: "block",
        margin: "18px auto 30px auto"
      }}
      title={title}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );
};
