import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from "redux-form"
import './App.css';
import { signIn } from "./redux/actions"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Notepad App.
        </p>
        <LoginForm />
      </header>
    </div>
  );
}


let LoginForm = () => {
  return (
  <form className="form">
    <div className="box-body">
      <Field
        component="input"
        name="email"
        placeholder="E-mail"
        type="text"
      />
      <br />
      <Field
        component="input"
        name="password"
        placeholder="Password"
        type="password"
      />
      <br />
      <button type="button" className="btn" onClick={() => signIn()}>Sign in</button>
    </div>
  </form>
  )
};

LoginForm = reduxForm({
  form: "noteForm"
})(LoginForm)

export default App;
