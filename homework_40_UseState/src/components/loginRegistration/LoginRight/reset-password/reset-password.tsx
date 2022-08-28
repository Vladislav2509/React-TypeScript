import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  MainWrapper,
  Form,
  Wrapper,
  Label,
  Input,
  SubmitButton,
  SubmitInput,
} from "./styled";
import { resetPassword } from "../../../hooks/auth.service";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    resetPassword(email);
    navigate("/reset_password_success");
  };
  return (
    <Container>
      <MainWrapper>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>
          <SubmitButton>
            <SubmitInput type="submit" />
          </SubmitButton>
        </Form>
      </MainWrapper>
    </Container>
  );
};
