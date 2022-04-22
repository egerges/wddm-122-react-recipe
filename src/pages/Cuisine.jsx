import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

function Cuisine(props) {
  let { type } = useParams();

  const [recipes, setRecipes] = useState([]);

  // Run function when component is loaded
  useEffect(() => {
    getRecipes();
  }, []);

  // Render
  const getRecipes = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=30&cuisine=${type}`
      );
      const data = await api.json();

      setRecipes(data.results);
      console.log(data.results);
      localStorage.setItem("type", type);
  };

  if(localStorage.getItem("type") !== type) {
    getRecipes();
  }

  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  return <div>
    <h3>{capitalize(type)} Cuisine</h3>
    <Wrapper>
        {recipes.map((recipe) => {
          return (
            <NavLink to={`/recipe/${recipe.id}`}>
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </NavLink>
          );
        })}
    </Wrapper>
  </div>;
}

const Wrapper = styled.div`
  margin: 4rem 0;
  display: grid;
  gap: 5rem;
  grid-template-columns: auto auto auto;
`;

const Card = styled.div`
  height: 25rem;
  width: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: bold;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Cuisine;
