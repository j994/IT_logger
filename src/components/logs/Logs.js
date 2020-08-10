import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../redux/actions/logActions";

const Logs = () => {
  const log = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const { loading, logs } = log;

  useEffect(() => {
    dispatch(getLogs());
    //eslint-disable-next-line
  }, []);

  if (loading || !logs) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
