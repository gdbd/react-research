import * as React from "react";

import * as ReactDOM from "react-dom";

export const init = (root: React.ReactElement, container: string) => {
  (window as any).global = (window as any).global || {};
  (window as any).global.init = () => {
    ReactDOM.render(root, document.getElementById(container));
  };
};
