import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Registre } from "../../js/actions";
import { Redirect } from "react-router";
// import UserReducer from "../../js/reducer/UserReducer";
const RegistreComp = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registreNewUser = (e) => {
    e.preventDefault();
    dispatch(
      Registre({
        firstName,
        lastName,
        email,
        password,
      })
    );
  };
  const {isLoading,token}= useSelector(state => state)
  return (
    <div>
     {isLoading?<h1>...Loading</h1>:token?<Redirect to="/login"/> : <Form>
        <Form.Group >
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="FirstName"
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="LastName"
            onChange={(e)=>setLastName(e.target.value)}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button
          variant="primary"
          
          onClick={registreNewUser}
        >
          Submit
        </Button>
      </Form>}
    </div>
  );
};

export default RegistreComp;
