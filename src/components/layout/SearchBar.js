import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchLogs } from "../../redux/actions/logActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const text = useRef("");

  const onChange = (e) => {
    dispatch(searchLogs(text.current.value));
  };

  return (
    <nav style={{ marginBottom: "30px" }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              ref={text}
              onChange={onChange}
            />
            <label htmlFor='search' className='label-icon'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
