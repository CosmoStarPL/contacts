import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact, idChange } from "../slices/contactSlice";
import Modal from "react-modal";
import { closeModal } from "../slices/createContactModalSlice";

// style for center modal window
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateContact = () => {
  // states
  const [name, setName] = useState("");
  const [number, setNumber] = useState([]);

  // react redux
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.createContactModal.isOpened);

  // handle hunctions
  const onRequestClose = () => dispatch(closeModal()); // close modal

  const handleSubmit = () => {
    dispatch(createContact([name, number])); // send contact information
    dispatch(idChange()); // id++
    onRequestClose(); // close modal window
  };
  
  return (
    <Modal isOpen={isOpened} onRequestClose={() => onRequestClose()} style={customStyles}>
      <div className="text-2xl font-bold">Create contact</div>
      <div className="text-lg font-medium">There is you can create new contact</div>


      <form className="mt-10 mb-10">

        <div>
          <span className="opacity-70">Type name:</span> <br />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            className="mt-1 bg-gray-300 outline-none pl-2 rounded-md mb-6 border-1 border-blue-400 border-solid h-7 w-60"
            type="text"
          />
        </div>

        <div>
          <span className="opacity-70">Type number:</span> <br />
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            placeholder="Number"
            className="mt-1 bg-gray-300 outline-none pl-2 rounded-md after:border-1 border-blue-400 border-solid h-7 w-60"
            type="number"
          />
        </div>

      </form>


      <button className="bg-zinc-300 text-black pt-2 pb-2 pl-3 pr-3 rounded-lg ml-48" onClick={() => onRequestClose()}>
        Close
      </button>

      <button className="bg-black text-white pt-2 pb-2 pl-3 pr-3 rounded-lg ml-2" onClick={handleSubmit}>
        Submit
      </button>

    </Modal>
  );
};

export default CreateContact;
