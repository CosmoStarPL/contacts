import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CreateContact from "../components/CreateContact";
import { openModal } from "../slices/createContactModalSlice";

const Root = () => {
  // states
  const [search, setSearch] = useState("");

  // react redux
  const names = useSelector((state) => state.contact.value);
  const isOpened = useSelector((state) => state.createContactModal.isOpened);
  const dispatch = useDispatch();

  // react router dom
  const location = useLocation();

  return (
    <div className="flex content-between w-full">
      <div className="w-80 border-r-gray-200 border-r-2 p-2 h-screen">

        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="container h-px bg-gray-500 mt-4 mb-2"></div>
        <input
          className="container outline-none border-grey-700 border-2 mb-4 rounded-lg h-8 pl-1"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />


        <div className="overflow-y-auto h-half">
          {names.length > 0 ? (
            names.map(({ id, name }) => {
              if (search !== "") {
                if (name.includes(search)) {
                  return (
                    <NavLink
                      to={name}
                      className={({ isActive }) =>
                        isActive
                          ? "flex pl-2 rounded-md items-center mb-2 bg-gray-400 container h-10 text-xl"
                          : "flex pl-2 rounded-md items-center mb-2 bg-gray-200 container h-10 text-xl"
                      }
                      key={id}
                    >
                      {name}
                    </NavLink>
                  );
                }
              } else {
                return (
                  <NavLink
                    to={name}
                    className={({ isActive }) =>
                      isActive
                        ? "flex pl-2 rounded-md items-center mb-2 bg-gray-400 container h-10 text-xl"
                        : "flex pl-2 rounded-md items-center mb-2 bg-gray-200 container h-10 text-xl"
                    }
                    key={id}
                  >
                    {name}
                  </NavLink>
                );
              }
              return null;
            })
          ) : (
            <h1>No result</h1>
          )}

        </div>

        <button
          onClick={() => dispatch(openModal())}
          className="box-border text-xl font-semibold mt-1 rounded-lg bg-gray-300 text-gray-900 container p-2"
        >
          Add Contact
        </button>
        {isOpened ? <CreateContact /> : null}
        
      </div>
      <div className="container">
        {location.pathname == "/" ? (
          <div className="flex items-center text-3xl relative top-0 left-0 justify-center h-full">
            Welcome
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Root;
