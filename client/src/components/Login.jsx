import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	 const [user, setUser] = React.useState({username: "", password: ""})
	
	 const changeHandler = e => {
		//  console.log(e.target.value)
		 setUser({...user, [e.target.name]: e.target.value})
	 }

	 const submitHandler = e => {
		 e.preventDefault()
		 axiosWithAuth()
		 .post("/login", user)
		 .then(res => {
			 localStorage.setItem('token', res.data.payload)
			 props.history.push('/bubble-page')
		 })
		 .catch(err => console.log(err))
	 }
	
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
					<input 
						type="text"
						name="username"
						value={user.username}
						onChange={changeHandler}
					/>
					<input 
					type="password"
					name="password"
					value={user.password}
					onChange={changeHandler}
				/>
				<button>Login</button>
			</form>
    </>
  );
};

export default Login;
