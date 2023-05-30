import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  //! useLocation= useNavigate in kardeşidir, navigate in state ine yüklenen veriyi navigate in yönlendirdiği sayfada karşılar
  // navigate("/details", { state: { i } });

  const a = location.state.i;
  console.log(a.recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1> {a.recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>
            {a.recipe.totalNutrients.CA.label} :
            {Math.round(a.recipe.totalNutrients.CA.quantity)}
            {a.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.CHOCDF.label} :
            {Math.round(a.recipe.totalNutrients.CHOCDF.quantity)}
            {a.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(a.recipe.totalNutrients.CHOLE.quantity)}
            {a.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(a.recipe.totalNutrients.ENERC_KCAL.quantity)}
            {a.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{a.recipe.totalWeight}</p>
          <p>Calories: {Math.round(a.recipe.calories)}</p>
          {a.recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={a.recipe.image} alt={a.recipe.label} />
        </ImgContainer>

        <IngredContainer>
          {a.recipe.ingredientLines.map((item, indeks) => (
            <div key={indeks}>
              <p>
                {indeks + 1} * {item}
                {/* ingredientLines içinde bir sürü obje var tek tek yazdır, başına no ekle 1*{malzeme} gibi */}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
