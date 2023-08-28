import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
// const url = "http://localhost:5000/api/v1/auth/login"
const url = "api/v1/auth/login"

const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(url, { name, password })

      localStorage.setItem('user', JSON.stringify(resp.data.user))

      setName("")
      setPassword("")
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg)
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);

  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user])

  return <form className="form-father" onSubmit={handleLogin}>
    {
      error && (
        <small className="alert alert-danger">
          {error}
        </small>
      )
    }
    <div className="form-row" >
      <label htmlFor="" className="form-label"

      >Name</label>
      <input name="name"
        value={name}
        onChange={(e) => setName(e.target.value)} type="text" className="form-input" />
    </div>
    <div className="form-row">
      <label htmlFor="" className="form-label">Password</label>
      <input type="password" className="form-input"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="grid gap-5">
      <button className="btn-nc bg-black">
        Login
      </button>
      <Link to="/register" className="text-sky-400 hover:text-blue-600">
        Do not have an account yet?
      </Link>
    </div>
  </form>
};

export default Login;
