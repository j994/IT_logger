import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLog, clearCurrent } from "../../redux/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const current = useSelector((state) => state.log.current);
  const techs = useSelector((state) => state.tech.techs);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };

      dispatch(updateLog(current.id, newLog));
      dispatch(clearCurrent());

      M.toast({ html: `Log updated by ${tech}` });

      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              {techs
                ? techs.map((tek) => (
                    <option
                      key={tek.id}
                      value={`${tek.firstName} ${tek.lastName}`}
                    >{`${tek.firstName} ${tek.lastName}`}</option>
                  ))
                : null}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;
