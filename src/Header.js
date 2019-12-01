import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  list-style:none;
  color: ${props => (props.selected ? "white" : "black")};
  background-color: ${props => (props.selected ? "#f1c40f" : "white")};
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item selected={pathname === "/"}>
                <Link to="/">Hook1</Link>
            </Item>
            <Item selected={pathname === "/hook2"}>
                <Link to="/hook2">Hook2</Link>
            </Item>
            <Item selected={pathname === "/hook3"}>
                <Link to="/hook3">Hook3</Link>
            </Item>
        </List>
    </Header>
));
