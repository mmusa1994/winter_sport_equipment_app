import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../containers/Dashboard/dashboardSlice";

import "./styles.css";

const Edit = ({ currentEquipment, cancelBtn }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(currentEquipment);

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(update(data));
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label className="label-text" htmlFor="brand">
        Brand:
      </label>
      <input
        className="input-form"
        type="text"
        id="brand"
        name="brand"
        value={data.brand}
        onChange={(e) => onChange(e)}
      />
      <label className="label-text" htmlFor="boots">
        Boots:
      </label>
      <input
        className="input-form"
        type="text"
        id="boots"
        name="boots"
        value={data.boots}
        onChange={(e) => onChange(e)}
      />
      <label className="checkbox" htmlFor="helmet">
        Helmet
        <input
          className="input-form"
          id="helmet"
          name="helmet"
          type="checkbox"
          checked={data.helmet}
          onChange={(e) => onChange(e)}
        />
      </label>
      <label className="checkbox" htmlFor="skiGoggles">
        Ski-Goggles
        <input
          className="input-form"
          id="skiGoggles"
          name="skiGoggles"
          type="checkbox"
          checked={data.skiGoggles}
          onChange={(e) => onChange(e)}
        />
      </label>
      <div>
        <input type="submit" />
        <button className="cancel-btn" onClick={cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Edit;
