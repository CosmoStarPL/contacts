import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteContact } from "../../slices/contactSlice";
import EditModal from "./EditModal";
import { openEditModal } from "../../slices/editModalSlice";

const Contacts = () => {
  // react redux
  const contact = useSelector((state) => state.contact.value);
  const dispatch = useDispatch();

  // react router dom
  const location = useLocation();
  const navigate = useNavigate();

  // handle functions
  const deleteButton = (id) => {
    dispatch(deleteContact(id)); // delete contact
    navigate("/"); // redirect main page
  };

  const editButton = () => {
    dispatch(openEditModal()); // open modal window for edit contact
  };

  return (
    <div>

      <div className="flex mt-4 ml-4 items-center">
        <Link to="/" className="p-2 pl-4 pr-4 bg-zinc-600 rounded-md text-white">
          ‹- Back
        </Link>
      </div>

      <div className="flex flex-col h-full items-center">
        {contact.map(({ id, name, number }) => {
          if (location.pathname == `/${name}`) {
            return (
              <div className="block" key={id}>
                <div className="flex justify-between">
                  <span className="text-2xl mt-1 mr-2">{id}.</span>
                  <span className="text-3xl italic"> {name}</span>
                  <span className="mt-3 ml-5"> {number}</span>
                </div>

                <div className="flex mt-2 justify-between">
                  <button
                    onClick={editButton}
                    className="pt-2 pb-2 pl-4 pr-4 mr-3 font-bold text-gray-900 border-gray-900 border-2 rounded-md"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => deleteButton(id)}
                    className="pt-2 pb-2 pl-4 pr-4 font-semibold bg-black rounded-md text-white"
                  >
                    delete
                  </button>
                </div>

                <EditModal i={id} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Contacts;
