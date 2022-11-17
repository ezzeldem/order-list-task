import React from "react";
import styled from "styled-components";
const ItemBox = styled.div`
  background-color: ${(props) =>
    props.isDragging ? "lightGray" : "lightblue"};
  div {
    border-radius: inherit;
    margin-bottom: 12px;
    padding: 40px;
    margin-inline: auto;
    background-color: #fff;
  }
`;

const Item = (props) => {
  return (
    <ItemBox isDragging={props.isDragging} {...props}>
      {props.children}
    </ItemBox>
  );
};

export default Item;
