import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
const App = () => {
 const [ALLdata, setALLdata] = useState([
  {
    title: "Full Stack Development",
    description:
      "Build modern web apps with a clean frontend, strong backend, and smooth user experience from start to finish.",
  },
  {
    title: "Frontend Development",
    description:
      "Build modern UI web apps with a clean frontend.",
  },
  {
    title: "Backend Development",
    description:
      "Build modern web apps with strong backend, and smooth user experience from start to finish.",
  }
 ])

 const getAllData = async()=>{
  try {
    const res = await axios.get("http://localhost:3000/getNotes")
      console.log(res.data.ALLNotes);
      setALLdata(res.data.ALLNotes)
  } catch (error) {
    console.log(error);
    
  }

 }

 useEffect(() => {
  getAllData()
 }, [])
 


  return (
    <div className="flex min-h-full w-full  gap-2.5 bg-zinc-950 px-5 py-10 text-white">
      {ALLdata.map((elem,idx)=>{
        return <div key={idx} className="w-full h-fit max-w-sm rounded-lg border border-white/10 bg-white p-6 text-zinc-950 shadow-2xl shadow-emerald-950/40">
        <p className="mb-4 inline-flex rounded-md bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          Day {elem.day}
        </p>

        <h1 className="text-3xl font-bold leading-tight">{elem.title}</h1>

        <p className="mt-4 text-base leading-7 text-zinc-600">
          {elem.description}
        </p>

        <button className="mt-6 rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Explore Course
        </button>
      </div>
      })}
    </div>
  );
};

export default App;
