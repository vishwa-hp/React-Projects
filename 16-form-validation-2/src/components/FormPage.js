import React, { useState } from "react";
import "./FormPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder="Enter email"
              value={formData.email}
              name="email"
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormPage;
