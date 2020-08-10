import React from "react";
import PropTypes from "prop-types";
import { deleteTech } from "../../redux/actions/techActions";
import { useDispatch } from "react-redux";

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();
  const onDelete = (e) => {
    dispatch(deleteTech(tech.id));
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};
TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
