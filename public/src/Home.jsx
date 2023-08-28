import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 const storedUser = localStorage.getItem('user');
 const user = JSON.parse(storedUser);
 // const msg = localStorage.getItem('msg');

 const logout = () => {
  localStorage.removeItem('user');
 }

 return <section className="text-center">
  <h3 className="text-white text-2xl">
   Hello <span className="text-red-300">{user?.name}</span> ,Thanks For Your Testing , And Have A Nice Day
  </h3>
  <div className="mt-10 flex items-center justify-center space-x-5">
   <h5 className="text-xl text-white font-bold">Log out to test again</h5>
   <Link to="/" className="btn-nc bg-red-500" onClick={logout}>
    Logout
   </Link>
  </div>


 </section>

};

export default Home;
