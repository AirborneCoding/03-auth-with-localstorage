import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const url = "http://localhost:5000/api/v1/auth/register";
const url = "api/v1/auth/register";

const Register = () => {

 const [name, setName] = useState("");
 const [userName, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [error, setError] = useState("");
 const [isRegisterOk, setIsRegisterOk] = useState(false);

 const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
   setError("Passwords do not match!");
   setTimeout(() => {
    setError("");
   }, 5000);
   return;
  }

  try {
   const resp = await axios.post(url, { name, password });
   setUserName(resp.data?.user?.name)
   setIsRegisterOk(true);

   setName("");
   setPassword("");
   setConfirmPassword("");
  } catch (error) {
   setError(error.response.data.msg);
   setTimeout(() => {
    setError("");
   }, 5000);
  }
 };

 const navigate = useNavigate();

 useEffect(() => {
  if (isRegisterOk) {
   const modal = document.getElementById("my_modal_1");
   modal.showModal();
  }
 }, [isRegisterOk]);

 return (
  <>
   <form className="form-father mt-24" onSubmit={handleRegister}>
    {error && <small className="alert alert-danger">{error}</small>}
    <div className="form-row">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input
      type="text"
      className="form-input"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
    </div>
    <div className="form-row">
     <label htmlFor="password" className="form-label">
      Password
     </label>
     <input
      type="password"
      className="form-input"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
    </div>
    <div className="form-row">
     <label htmlFor="confirmPassword" className="form-label">
      Confirm Password
     </label>
     <input
      type="password"
      className="form-input"
      id="confirmPassword"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     />
    </div>
    <div className="grid gap-5">
     <button className="btn-nc bg-black">
      Register
     </button>
     <Link to="/login" className="text-sky-400 hover:text-blue-600">
      Already have an account?
     </Link>
    </div>
   </form>

   <dialog id="my_modal_1" className="modal">
    <form method="dialog" className="modal-box bg-black text-white">
     <h3 className="font-bold text-lg">Register Success</h3>
     <p className="py-4">Welcome, <span className="text-red-500 font-bold">{userName}</span> Please proceed to login.</p>
     <div className="modal-action">
      <Link to="/" className="btn-nc bg-emerald-500">
       Go to Login
      </Link>
     </div>
    </form>
   </dialog>
  </>
 );
};

export default Register;
