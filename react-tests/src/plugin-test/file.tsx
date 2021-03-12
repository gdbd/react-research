import * as React from "react";
import { default as styled } from "styled-components";
import { init } from "../init";

const Styled1 = styled.div`
  color: green;
`;

export const Component1 = () => {
  return (
    <div>
      <span>content1</span>
      <Styled1 />
    </div>
  );
};

init(<Component1 />, "container1");
