import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {

    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        addTodo(title,desc);
    }
  return (
    <div className="container my-3">
        <h3 className="text-center">Add Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="inputTitle"
            aria-describedby="emailHelp"
          />
         
        </div>

        <div className="mb-3">
          <label htmlFor="inputDesc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value={desc}
            
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="inputDesc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
