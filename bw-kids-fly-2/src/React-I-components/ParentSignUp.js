import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Forms = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    status && setUser(status);
  }, [status]);

  return (
    <div className="container">
      <FormContainer>
        <div className="signup">
          <div className="userinfo">
            <h3> Welcome to KidsFly {user.name} ! </h3>
          </div>
          <Form>
            <label> First Name: </label>
            <Field type="text" name="name" placeholder="Enter First Name" />
            {touched.name && errors.name && <p className="errors">{errors.name}</p>}
            <label> Last Name: </label>
            <Field type="text" name="lastname" placeholder="Enter Last Name" />
            {touched.name && errors.lastname && <p className="errors">{errors.lastname}</p>}

            <label> Email: </label>
            <Field type="email" name="email" placeholder="Enter Email" />
            {touched.email && errors.email && <p className="errors">{errors.email}</p>}
            <label> Password: </label>
            <Field type="password" name="password" placeholder="Enter Password" />
            {touched.password && errors.password && <p className="errors">{errors.password}</p>}
            <label>Address: </label>
            <Field type="text" name="address" placeholder="Enter Address" />
            {touched.address && errors.address && <p className="errors">{errors.address}</p>}
            <label>Home Airport: </label>
            <Field type="text" name="airport" placeholder="Enter Home Airport" />
            {touched.airport && errors.airport && <p className="errors">{errors.airport}</p>}
            <button type="submit" disabled={values.isSubmitting}>
              {values.isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    name: '',
    email: '',
    password: '',
    TermsOfService: false,
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is Required!'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is Required!'),

    email: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .email('Invalid email')
      .required('Email is Required!'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Password is Required'),
    address: Yup.string()
      .min(2, 'Invalid Address!')
      .max(40, 'Invalid Address!')
      .required('Address is Required!'),
    airport: Yup.string()
      .min(2, 'Invalid Aiport!')
      .max(40, 'Invalid Airport!')
      .required('Airport is Required!'),
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    axios
      .post('https://kids-fly-2.herokuapp.com/api/auth/register-parent', values)
      .then(response => {
        console.log('value', values);
        resetForm();
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));
  },
})(Forms);

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .errors {
    margin-bottom: 5rem;
    width: 100%;
    text-align: center;
    color: red;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  .incorrect-login {
    margin-top: 3rem;
    color: #872a26;
    font-size: 1.4rem;
  }

  .login-message {
    h2 {
      font-size: 3rem;
      color: #5f7361;
    }
    p {
      margin-top: 1rem;
      font-size: 1.6rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      color: #444444;
      @media (max-width: 451px) {
        font-size: 1.4rem;
      }
      @media (max-width: 403px) {
        font-size: 1.2rem;
      }
    }
  }
  form {
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${'' /* width: 60%; */}
    margin-bottom: 5%;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  input {
    margin: 0.5rem 0;
    width: 20rem;
    height: 3.5rem;
    background: #bfbfbf;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    &:focus {
      ßoutline: none;
      border: 1px solid #ababab;
    }
  }
  button {
    width: 20rem;
    height: 3.5rem;
    margin: 1rem 0 0;
    background: #d1ffd6;
    border: none;
    border-radius: 0.3rem;
    transition: all 100ms;
    box-shadow: 0px 2px 5px -5px;
    letter-spacing: 0.1rem;
    &:hover {
      transition: background 100ms;
      cursor: pointer;
      background: #afdeb4;
    }
  }
`;
