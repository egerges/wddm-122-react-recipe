import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

function Category() {
  return (
    <List>
      <NavLink to="/">
        <h4>My Awesome Cuisine</h4>
      </NavLink>

      <NavLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>

      <NavLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  flex-direction: row;
  align-items: center;
  a {
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    min-width: 10rem;
  }
  a:not(:first-child) {
    padding: 30px 20px;
    background-color: #f1f1f1;
    border: 1px solid green;
    color: green;
    border-radius: 10px;
  }
`;

export default Category;
