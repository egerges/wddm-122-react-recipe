import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

function Recipe() {
  let { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  // Run function when component is loaded
  useEffect(() => {
    getRecipe();
  }, []);

  // Render
  const getRecipe = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();

      setRecipe(data);
      localStorage.setItem("id", id);
  };

  if(localStorage.getItem("id") !== id) {
    getRecipe();
  }

  return <div>
    <h3>Recipe: {recipe.title}</h3>
    <Wrapper>
        <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div dangerouslySetInnerHTML={{__html: recipe.summary}} />
            <div dangerouslySetInnerHTML={{__html: recipe.instructions}} />
        </Card>
    </Wrapper>
  </div>;
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;

  p {
    z-index: 10;
    width: 100%;
    text-align: center;
    font-weight: bold;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ol {
    margin-top: 10px;
    list-style: auto;
    list-style-position: inside;
  }

  img {
    border-radius: 1rem;
    height: 20vh;
    width: 50vw;
    object-fit: cover;
  }
`;

export default Recipe;
