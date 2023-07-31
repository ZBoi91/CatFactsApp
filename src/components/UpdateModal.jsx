import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const OverLay = (props) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    titleRef.current.value = props.title;
    authorRef.current.value = props.author;
    yearRef.current.value = props.yearPublished;
  }, [])};

  const getBook = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/lesson/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
      }),
    });
  };

  const updateBook = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/lesson/books/" + props.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          author: authorRef.current.value,
          year: yearRef.current.value,
        }),
      }
    );

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Title</div>
          <input type="text" className="col-md-3" ref={titleRef}></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Author</div>
          <input type="text" className="col-md-3" ref={authorRef}></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="col-md-3">Year Published</div>
            <input type="text" className="col-md-3" ref={yearRef}></input>
            <div className="col-md-3"></div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <button className="col-md-3">update</button>
              <button className="col-md-3">cancel</button>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          title={props.title}
          author={props.author}
          yearPublished={props.yearPublished}
          setShowModal={props.setShowModal}
          getData={props.getData}
        ></OverLay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
