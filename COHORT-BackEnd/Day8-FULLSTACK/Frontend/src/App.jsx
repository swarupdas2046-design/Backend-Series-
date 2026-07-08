import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const App = () => {
  const [ALLdata, setALLdata] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get("https://my-first-fullstack-651d.onrender.com/getNotes");
      console.log(res.data.ALLNotes);
      setALLdata(res.data.ALLNotes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  let HandleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      const res = await axios.post("https://my-first-fullstack-651d.onrender.com/createNotes", {
        title,
        description,
      });
      console.log(res);
      getAllData();
      e.target.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  let HandleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://my-first-fullstack-651d.onrender.com/delete/${id}`);
      console.log(res);
      getAllData();
    } catch (error) {
      console.log(error.message);
    }
  };

  let HandleUpdate = async(id)=>{
    try {
    const description = prompt("enter your description")
    const response = await axios.patch(`https://my-first-fullstack-651d.onrender.com/update/${id}`,{
          description
        })
        console.log(response);
        getAllData()
        
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <main className="min-h-screen w-full bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Create Note
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Publish your idea
            </h1>
          </div>

          <form onSubmit={HandleSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-200">
                Title
                <input
                  defaultValue={"Swarup Das"}
                  className="h-12 rounded-lg border border-white/10 bg-zinc-900 px-4 text-base font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                  type="text"
                  name="title"
                  placeholder="Enter title"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-200">
                Description
                <textarea
                  className="min-h-28 resize-none rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-base font-medium leading-6 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                  name="description"
                  placeholder="Write description"
                  defaultValue={"Very Nice Programmer and Problem Solver"}
                />
              </label>
            </div>

            <button className="w-full rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-zinc-950 transition hover:bg-emerald-400 sm:w-fit">
              Publish
            </button>
          </form>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ALLdata.map((elem, idx) => {
            return (
              <article
                key={idx}
                className="flex min-h-72 flex-col rounded-lg border border-white/10 bg-white p-5 text-zinc-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
                    Note
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-zinc-950">
                  {elem.title}
                </h2>

                <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
                  {elem.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button onClick={()=> HandleUpdate(elem._id)} className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-800 transition hover:border-emerald-400 hover:text-emerald-700">
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      HandleDelete(elem._id);
                    }}
                    className="rounded-lg bg-rose-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-rose-700"
                  >
                    Delete
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
