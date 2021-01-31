import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../../../features/dashboard/dashboardSlice";

const Edit = ({ currentEquipment }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(currentEquipment);
  const { brand, boots, helmet, skiGoggles } = currentEquipment;

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
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <label htmlFor="brand">
          Brand:
          <input
            className="input-form"
            type="text"
            id="brand"
            name="brand"
            value={brand}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="boots">
          Boots:
          <input
            className="input-form"
            type="text"
            id="boots"
            name="boots"
            value={boots}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="helmet">
          Helmet:
          <input
            className="input-form"
            id="helmet"
            name="helmet"
            type="checkbox"
            checked={helmet}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="skiGoggles">
          Ski-Googles:
          <input
            className="input-form"
            id="skiGoggles"
            name="skiGoggles"
            type="checkbox"
            checked={skiGoggles}
            onChange={(e) => onChange(e)}
          />
        </label>
      </div>

      <input type="submit" className="submit-btn" />
      <Link className="cancel-btn" to="/">
        Cancel
      </Link>
    </form>
  );
};

export default Edit;
