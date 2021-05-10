import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: #fff;
  background: #285a37;
`;

export const NavTitle = styled.h1`
  font-size: 26px;
  height: 40px;
  margin: 5px 10px 5px 10px;
  text-shadow: 2px 2px 5px #222222;
`;

export const NavLinks = styled.div`
  width: 100%;
  white-space: nowrap;
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const LinkItem = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  color: #fff;
  font-size: large;
  text-decoration: none;
  padding: 1rem;
  display: block;

  &:hover {
    background-color: #222222;
  }
`;

export const NavUsername = styled(NavLink)`
  color: #fff;
  font-size: 22px;
  margin: 0px 10px 5px 0px;
  padding: 0.2rem;
  text-decoration: none;
  display: block;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #222222;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavButton = styled(NavLink)`
  color: #fff;
  background-color: #303030;
  font-size: large;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 5px;
  display: block;
  border-radius: 5px;
  border: 1px solid #222222;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #505050;
    transition: all 0.2s ease-in-out;
  }
`;
