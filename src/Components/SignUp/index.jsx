import { useState } from "react";
import Images from "../../Images";
import {
  AlreadyExist,
  CreateAccount,
  Detail,
  DetailsContainer,
  Error,
  Img,
  Input,
  LoginLink,
  LoginLinkContainer,
  Logo,
  SignUpContainer,
  SignUpLeft,
  SignUpRight,
  Submit,
} from "./index.styles";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (event, property) => {
    const value = event.target.value;

    if(property === "firstName"){
        setUser({...user, firstName: value});
    }
    if(property === "lastName"){
        setUser({...user, lastName: value});
    }
    if(property === "email"){
        setUser({...user, email: value});
    }
    if(property === "password"){
        setUser({...user, password: value});
    }
    if(property === "phoneNumber"){
        setUser({...user, phoneNumber: value});
    }
  };

  const createUser = async() => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    const validEmail = emailRegex.test(user.email);
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validPassword = passwordRegex.test(user.password);

    if(validEmail && validPassword && user.firstName && user.lastName && user.phoneNumber && user.phoneNumber.length === 10){
        const response = await fetch("http://localhost:3001/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3001/api/auth/register"
              },
              body: JSON.stringify(user),
              credentials: 'include',
        });

        if(response.ok){
            const data = await response.json();
            if(data.code === "registered"){
                navigate("/login");
                setError("");
            }
            if(data.code === "existuser"){
                setError("User Already Exist");
            }
        } else {
            setError("Internal Error")
            console.log("error")
        }
    }
  };

  return (
    <SignUpContainer>
      <SignUpLeft>
        <Logo to="/">
          <img src={Images.SignUp} alt="signup-logo" />
        </Logo>
        <Img src={Images.SignUpImg} alt="img" />
      </SignUpLeft>
      <SignUpRight>
        <CreateAccount>Create Account</CreateAccount>
        <DetailsContainer>
          <Detail>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => handleChange(e, "firstName")}
            />
          </Detail>
          <Detail>
            <Input type="text" id="lastName" placeholder="Last Name" value={user.lastName} onChange={(e) => handleChange(e, "lastName")} />
          </Detail>
          <Detail>
            <Input type="email" id="email" placeholder="Email" value={user.email} onChange={(e) => handleChange(e, "email")} />
          </Detail>
          <Detail>
            <Input type="password" placeholder="Password" value={user.password} onChange={(e) => handleChange(e, "password")} />
          </Detail>
          <Detail>
            <Input type="text" id="phoneNo" placeholder="Phone Number" value={user.phoneNumber} onChange={(e) => handleChange(e, "phoneNumber")}/>
          </Detail>
        </DetailsContainer>
        {error && <Error>{error}</Error>}
        <Submit onClick={createUser}>Create Account</Submit>
        <LoginLinkContainer>
          <AlreadyExist>Already have an account ?</AlreadyExist>
          <LoginLink to="/login">Login</LoginLink>
        </LoginLinkContainer>
      </SignUpRight>
    </SignUpContainer>
  );
};

export default SignUp;
