import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../slices/editModalSlice";
import { editContact } from "../../slices/contactSlice";
import { useNavigate } from "react-router-dom";

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

Modal.setAppElement("#root"); //set root

const EditModal = ({ i }) => {
  //states
  const [name, setName] = useState("");
  const [number, setNumber] = useState([]);

  // react redux
  const isOpen = useSelector((state) => state.editModal.isOpen);
  const dispatch = useDispatch();

  // react router dom
  const navigate = useNavigate();

  //handle functions
  const onRequestClose = () => dispatch(closeEditModal()); // close modal

  const submitButton = (i, name, number) => {
    dispatch(editContact([i, name, number])); // edit contact
    onRequestClose() // close modal window
    navigate(`/${name}`) // redirect to edited contact
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={()=>onRequestClose()}
      style={customStyles}
    >
      <div className="text-2xl font-bold">Edit contact</div>
      <div className="text-lg font-medium">There is you can edit your created contact</div>


      <form className="mt-10 mb-10">

        <span className="opacity-70">Type edited name:</span> <br />
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="mt-1 bg-gray-300 outline-none pl-2 rounded-md mb-6 border-1 border-blue-400 border-solid h-7 w-60"
          type="text"
        /> <br />

        <span className="opacity-70">Type edited number:</span> <br />
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          className="mt-1 bg-gray-300 outline-none pl-2 rounded-md after:border-1 border-blue-400 border-solid h-7 w-60"
          type="text"
        />


      </form>


      <button className="bg-zinc-300 text-black pt-2 pb-2 pl-3 pr-3 rounded-lg ml-48" onClick={() => onRequestClose()}>
        Close
      </button>

      <button className="bg-black text-white pt-2 pb-2 pl-3 pr-3 rounded-lg ml-2" onClick={() => submitButton(i, name, number)}>
        Submit
      </button>


    </Modal>
  );
};

export default EditModal;
