import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";
import { addTech } from "../../redux/actions/techActions";

const AddTechModal = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (!firstName || !lastName) {
      M.toast({ html: "Please enter a first and last name" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };

      dispatch(addTech(newTech));

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Technician Info</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close btn blue waves-effect waves-light'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
