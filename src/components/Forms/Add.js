import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  selectDashboard,
} from "../../containers/Dashboard/dashboardSlice";

import "./styles.css";

const Add = () => {
  const equipment = useSelector(selectDashboard);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: equipment.length + 1,
    brand: "",
    boots: "",
    helmet: false,
    skiGoggles: false,
  });
  const { brand, boots, helmet, skiGoggles } = data;
  console.log(equipment);
  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({ ...data, id: equipment.length + 1, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
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
      <label className="checkbox" htmlFor="helmet">
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
      <label className="checkbox" htmlFor="skiGoggles">
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
      <input type="submit" />
    </form>
  );
};

export default Add;
