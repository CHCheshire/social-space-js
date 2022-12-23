import React, {useState} from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState ({
    username: '',
    password1: '',
    pasword2: ''
  })
  const { username, password1, password2 } = signUpData;

  const handleChange = (event) => {
    setSignUpData ({
      ...signUpData, 
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Email address</Form.Label>
        <Form.Control className={styles.Input} 
        type="email" 
        placeholder="Enter email" 
        name="username" 
        value={username}
        onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control className={styles.Input} 
        type="password" 
        placeholder="Password" 
        name="password1" 
        value={password1}
        onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Please confirm your Password</Form.Label>
        <Form.Control className={styles.Input} 
        type="password" 
        placeholder="Confirm Password" 
        name="password2" 
        value={password2}
        onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className={`${btnStyles.btn} ${btnStyles.Wide} ${btnStyles.Button}`}>
        Sign up!
      </Button>
        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage} ${styles.FillerImage}`}
          src={
            "https://pbs.twimg.com/media/EYo_bXNUMAAsvhu.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;