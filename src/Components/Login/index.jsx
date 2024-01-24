import { useState } from "react";
import Icons from "../../Icons";
import Images from "../../Images";

// css
import {
  CardImg,
  CreateAccount,
  Error,
  Feature,
  FeatureDescription,
  FeatureTitle,
  Input,
  Label,
  LoginContainer,
  LoginContent,
  LoginLeft,
  LoginRight,
  Logo,
  NewAccount,
  RememberCheckbox,
  RememberMe,
  SignInBtn,
  SupportContainer,
  SupportImg,
  Title,
} from "./insdex.styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001"
      },
      body: JSON.stringify({ email: userName, password }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      if(data.code === "loggedIn"){
        navigate("/")
        setError("")
      }
      if(data.code === "alreadyLoggedIn"){
        setError("User Already LoggedIn");
      }
      if(data.code === "incorrectPassword"){
        setError("Incorrect Password");
      }
      if(data.code === "userNotFound"){
        setError("USer Not Found");
      }
    } else {
      // Handle authentication error
      setError("Internal Error");
    }
  };
  
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
          {error && <Error>{error}</Error>}
          <RememberMe>
            <RememberCheckbox type="checkbox" />
            Remember Me
          </RememberMe>
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
          <FeatureDescription>
            Analyzing previous trends ensures that businesses always make the
            right decision. And as the scale of the decision and it’s impact
            magnifies...
          </FeatureDescription>
        </Feature>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
