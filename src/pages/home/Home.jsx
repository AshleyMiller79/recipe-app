import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const [query, setQuery] = useState("");
  const [ögün, setOgun] = useState("Breakfast");

  const [yemekler, setYemekler] = useState([]);
  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const veri = await axios.get(url);
    setYemekler(veri.data.hits);
    //  console.log(veri);
  };
  console.log(yemekler);
  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {yemekler.length > 0 ? (
        <div>
          {/* {yemekler.map((i,index) => ( */}
          <RecipeCard yemekler={yemekler} />
          {/* ))} */}
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
