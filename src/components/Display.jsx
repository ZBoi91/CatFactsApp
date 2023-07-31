import React, { useEffect, useState, useRef } from "react";
import Facts from "./Facts";

const Display = () => {
  const [facts, setfacts] = useState([]);

  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  const getData = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/lesson/facts"); //will wait until fetch is complete. res is in pending state until it is fulfilled or rejected
    const data = await res.json();
    setFacts(data);
  };

  const addFacts = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/lesson/books", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        author: authorRef.current.value,
        year: yearRef.current.value,
      }), //body is payload, has to be a string
    });

    if (res.status === 200) {
      getData();
      titleRef.current.value = "";
      authorRef.current.value = "";
      yearRef.current.value = "";
    } else {
      alert("an error has occured");
    }
  };

  const deleteBook = async (id) => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/lesson/books/" + id,
      {
        method: "DELETE",
        header: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      getData();
    } else {
      alert("an error has occured");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="row">
        <input
          type="text"
          ref={titleRef}
          placeholder="title"
          className="col-md-3"
        ></input>
        <input
          type="text"
          ref={authorRef}
          placeholder="author"
          className="col-md-3"
        ></input>
        <input
          type="text"
          ref={yearRef}
          placeholder="yearPublished"
          className="col-md-3"
        ></input>
        <button className="col-md-3" onClick={addBook}>
          add
        </button>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-md-3">title</div>
        <div className="col-md-3">author</div>
        <div className="col-md-2">yearPublished</div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
      </div>

      {books.map((item) => {
        return (
          <Book
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            yearPublished={item.year_published}
            deleteBook={deleteBook}
            getData={getData}
          ></Book>
        );
      })}
    </div>
  );
};

export default Display;
