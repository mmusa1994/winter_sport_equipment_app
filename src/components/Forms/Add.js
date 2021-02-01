import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, selectDashboard } from "../../features/dashboard/dashboardSlice";

import "./styles.css";

const Add = () => {
  const equipment = useSelector(selectDashboard);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    brand: "",
    boots: "",
    helmet: false,
    skiGoggles: false,
  });
  const { brand, boots, helmet, skiGoggles } = data;

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({ id: equipment.length + 1, ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div>Add Equipment</div>
      <label className="label-text" htmlFor="brand">
        Brand
      </label>
      <input
        className="text-input"
        type="text"
        id="brand"
        name="brand"
        value={brand}
        onChange={(e) => onChange(e)}
      />
      <label className="label-text" htmlFor="boots">
        Boots
      </label>
      <input
        className="text-input"
        type="text"
        id="boots"
        name="boots"
        value={boots}
        onChange={(e) => onChange(e)}
      />
      <label className="label-text" htmlFor="helmet">
        Helmet
        <input
          className="checkbox"
          id="helmet"
          name="helmet"
          type="checkbox"
          checked={helmet}
          onChange={(e) => onChange(e)}
        />
      </label>
      <label className="label-text" htmlFor="skiGoggles">
        Ski-Goggles
        <input
          className="checkbox"
          id="skiGoggles"
          name="skiGoggles"
          type="checkbox"
          checked={skiGoggles}
          onChange={(e) => onChange(e)}
        />
      </label>
      <input type="submit" className="submit-btn" />
    </form>
  );
};

export default Add;
