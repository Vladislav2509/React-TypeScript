import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../hooks/auth.service";

import {
  Container,
  MainWrapper,
  RegistrationNavigation,
  LoginTitleButton,
  RegistrationTitleButton,
  Form,
  Label,
  Input,
  SubmitButton,
  
  Wrapper,
  ForgotPasswordWrapper,
} from "./styled";

export function Registration(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await register(email, password, confirmPassword);

    navigate("/RegistrationConfirmation");
  };
  return (
    <Container>
      <MainWrapper>
        <RegistrationNavigation>
          <LoginTitleButton
            onClick={() => {
              navigate("/login");
              setOpen(!open);
            }}
          >
            Login
          </LoginTitleButton>
          <RegistrationTitleButton
            onClick={() => {
              navigate("/registration");
              setOpen(!open);
            }}
          >
            Registration
          </RegistrationTitleButton>
        </RegistrationNavigation>

        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <Label htmlFor="username">Username</Label>
            <Input
              placeholder="Your Name"
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your Email"
              type="email"
              // error={errors.email ? errors.email.join('. ') : undefined}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Your Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Wrapper>
          <SubmitButton>
          

            <input className="submitInput" type="submit"  />
            
          </SubmitButton>
          
           
          <ForgotPasswordWrapper></ForgotPasswordWrapper>
        </Form>
      </MainWrapper>
    </Container>
  );
}