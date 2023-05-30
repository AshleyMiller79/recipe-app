import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const backendeYolla = (e) => {
    e.preventDefault();
    //!fake bakend yaptığım için ilk etapta elimle name ve pass belirledim
    localStorage.setItem("kullanici", name);
    localStorage.setItem("kullanicipass", pass);

    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={backendeYolla}>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
