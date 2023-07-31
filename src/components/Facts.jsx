import React, { useState } from "react";
import styles from "./Book.module.css";
import UpdateModal from "./UpdateModal";

const Book = (props) => {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    {showModal && (
    <UpdateModal
        facts={props.facts}
        button={props.button}
        navbar={props.navbar}
        getData={props.getData}
        setShowModal={setShowModal}>
    </UpdateModal>
    )}
    <div className={`row ${styles.facts}`}>
      <button className="col-sm-2" onClick={() => props.deleteFacts(props.id)}>
        delete
      </button>
      <button className="col-sm-2" onClick={() => setShowModal(true)}>
        update
        </button>
    </div>
    </>
  );
};

export default Facts;
