import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import { ButtonBoard, CheckBoxBoard, TooltipBoard } from "../../boards";

export default function ComponentList() {
  return (
    <Container>
      <ListContainer>
        <LinkButton to="/button">Button</LinkButton>
        <LinkButton to="/check-box">Check-Box</LinkButton>
        <LinkButton to="/tooltip">Tooltip</LinkButton>
      </ListContainer>
      <ContentContainer>
        <Route exact path="/button" component={ButtonBoard} />
        <Route path="/check-box" component={CheckBoxBoard} />
        <Route path="/tooltip" component={TooltipBoard} />
      </ContentContainer>
      <MainButtonContainer>
        <MainButton to="/">
          <Img src="/img/home.png" />
        </MainButton>
      </MainButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const LinkButton = styled(Link)`
  margin: 0 30px;
  text-decoration: none;
  font-size: 20px;
  color: #000;
`;

const ListContainer = styled.div`
  padding: 70px 20px 10px 40px;
  background-color: #ecb390;
`;

const ContentContainer = styled.div`
  margin: 30px 60px;
`;

// const MainButton = styled.div`
//   display: flex;
//   align-items: flex-end;
// `;
const MainButtonContainer = styled.div`
  display: flex;
  position: absolute;
  padding: 10px;
  top: 570px;
  left: 1300px;
  border-radius: 50%;
  background-color: transparent;
  &:hover {
    /* background-color: #a8d3da; */
    background-color: #cd8d7b;
    box-shadow: 3px 3px 5px #6e5773;
  }
`;

const MainButton = styled(Link)`
  text-decoration: none;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;
