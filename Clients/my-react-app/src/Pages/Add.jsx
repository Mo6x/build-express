import React from "react";
import { useState, useNavigate } from "react";



const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const habdleClick = async e => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:4000/books", book);
        navigate("/");
    }catch(err){
        console.log(err);
    };
  };

  return (
    <div className="form">
        <h1>Add New Book</h1>
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
        <input type="number" placeholder="price" onChange={handleChange} name="price" />
        <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
        <button onClick= {handleChange}>Add</button>
    </div>
  );
};

export default Add;