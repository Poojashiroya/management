import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../Providers/UserContext";
import Icons from "../../Icons";
import Images from "../../Images";

// css
import {
  CardImg,
  CreateAccount,
  Error,
  Feature,
  // FeatureDescription,
  FeatureTitle,
  ForgetPassword,
  Input,
  Label,
  LoginContainer,
  LoginContent,
  LoginLeft,
  LoginRight,
  Logo,
  NewAccount,
  // RememberCheckbox,
  // RememberMe,
  SignInBtn,
  SupportContainer,
  SupportImg,
  Title,
} from "./index.styles";

const Login = () => {
  const {user, login, loginError} = useUser();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
   await login(userName, password);
  };
  
  useEffect(() => {
    const email = localStorage.getItem("id");
    if(user && email && user.email === email){
      navigate("/")
    }
  },[]);

  return (
    <LoginContainer>
      <LoginLeft>
        <Logo src={Images.Logo} alt="logo" />
        <LoginContent>
          <Title>Sign Up</Title>
          <NewAccount>
            Don’t have an account? <CreateAccount to={"/signup"}>Create Now</CreateAccount>
          </NewAccount>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="abc@gmail.com" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="@#*%"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          {loginError && <Error>{loginError}</Error>}
           <ForgetPassword to="/forget">ForgetPassword</ForgetPassword>
          <SignInBtn onClick={handleLogin}>Sign in</SignInBtn>
        </LoginContent>
      </LoginLeft>
      <LoginRight>
        <SupportContainer>
          <SupportImg src={Icons.Support} alt="support" />
          Support
        </SupportContainer>
        <CardImg src={Images.Card} alt="card" />
        <Feature>
          <FeatureTitle>Introducing new features</FeatureTitle>
          {/* <FeatureDescription>
            Analyzing previous trends ensures that businesses always make the
            right decision. And as the scale of the decision and it’s impact
            magnifies...
          </FeatureDescription> */}
        </Feature>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
