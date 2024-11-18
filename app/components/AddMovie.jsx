"use client";
import { useState } from "react";
import React from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddMovie =() =>{
    const router = useRouter()
    const[showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({title:"", list_of_actors: "", release_year: "" })


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
        .movie("api/movies", input)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
        .finally(()=>{
            setInput({});
            setShowModal(false);
            router.refresh()
        });
    };

    const handleChange =(e) =>{
        const {name, value} = e.target
        setInput((prevState)=>({...prevState,[name]:value}))
    };

    return (
        <div>
            <button 
             className="bg-blue-600 text-white p-3 cursor-pointer"
             onClick={() => setShowModal(true)}>
                Add a New Movie Information
            </button>

            <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="font-bold"> Add or Update Movie`s </h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-3 my-3"
            value={input.title}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="List of Actors"
            name="list_of_actors"
            className="w-full p-3 my-3"
            value={input.list_of_actors}
            onChange={handleChange}
          />

            <input
            type="text"
            placeholder=" Release Year"
            name="release_year"
            className="w-full p-3 my-3"
            value={input.release_year}
            onChange={handleChange}
          />

          <button type="submit" className="bg-red-600 text-white px-5 py-2">
            Submit
          </button>
        </form>

            </Modal>
        </div>
    );
};

export default AddMovie;


