import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { useSelector, useDispatch } from "react-redux";
import { getTechs } from "../../redux/actions/techActions";

const TechListModal = () => {
  const dispatch = useDispatch();
  const tech = useSelector((state) => state.tech);
  const { techs, loading } = tech;

  useEffect(() => {
    dispatch(getTechs());
    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
