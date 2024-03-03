// src/actions/authActions.js
export const login = (username, password) => {
    return (dispatch) => {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        dispatch({ type: 'LOGIN_USER', payload: data.user });
      });
    }
  }
  