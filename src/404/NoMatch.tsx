import React from "react";
import styled from "styled-components";

interface Props {}

const NoMatch = (props: Props) => {
  return <Container>404</Container>;
};

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
`;

export default NoMatch;
