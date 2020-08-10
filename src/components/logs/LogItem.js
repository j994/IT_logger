import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

import { useDispatch } from "react-redux";
import { deleteLog, setCurrent } from "../../redux/actions/logActions";

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(setCurrent(log.id));
  };

  const removeLog = () => {
    dispatch(deleteLog(log.id));
    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={onEdit}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{" "}
          <span className='black-text'>{log.tech}</span> on{" "}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={removeLog}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
