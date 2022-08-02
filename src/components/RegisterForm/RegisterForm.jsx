import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [fullName, setFullName] = useState( '' );
  const [username, setUsername] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [considerations, setConsiderations] = useState( '' );
  const [access, setAccess] = useState();

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        name: fullName,
        username: username,
        password: password,
        considerations: considerations,
        access: access
      },
    });
    alert( 'Registraition completed');
    history.push('/teacherhome')

  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="full-name">
          Full name:
          <input
            type="text"
            name="full-name"
            value={fullName}
            required
            onChange={(event) => setFullName(event.target.value)}
            require='true'/>
        </label>
      </div>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
            require='true'/>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            require='true'/>
        </label>
      </div>
      <div>
        <label htmlFor="considerations" >
          Considerations:
          <input
            type="considerations"
            className="considerations-box"
            name="considerations"
            value={considerations}
            required
            onChange={(event) => setConsiderations(event.target.value)}>
          </input>
        </label>
      </div>
      <div>
          <p>Access Level:</p>
          <label htmlFor="access">Student</label>
          <input
            type="radio"
            name="access"
            value='2'
            required
            onChange={(event) => setAccess(event.target.value)}
            />
          <label htmlFor="access">Teacher</label>
          <input
            type="radio"
            name="access"
            value='1'
            required
            onChange={(event) => setAccess(event.target.value)}
          />
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
