import React, { useState } from "react";
import { Redirect } from "react-router";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Login } from "../../js/actions";
const LoginUser = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginExistedUser = (e) => {
    e.preventDefault();
    dispatch(Login({ email, password }));
  };
  const { isLoading, isAuth } = useSelector(
    (state) => state
  );
  return (
    <div>
      {isLoading ? (
        <h1>....isLoading</h1>
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={loginExistedUser}
          >
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default LoginUser;
