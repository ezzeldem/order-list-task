import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  background-color: ${(props) =>
    props.isDragging ? "lightGray" : "lightblue"};
  width: 20%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
`;

const Container = ({ isDragging, children }) => {
  return <ContainerBox isDragging={isDragging}>{children}</ContainerBox>;
};

export default Container;
