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
  const [validate, setValidate] = useState({
    brand: false,
    boots: false,
  });
  const { brand, boots, helmet, skiGoggles } = data;

  const validation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      setValidate({ ...validate, [fieldName]: true });
    } else if (/[^a-zA-Z -]/.test(fieldValue)) {
      setValidate({ ...validate, [fieldName]: true });
    } else {
      setValidate({ ...validate, [fieldName]: false });
    }
  };

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (value !== target.checked) {
      validation([name], value);
    }
    setData({ ...data, [name]: value });
  };

  const updateState = () => {
    setData({ ...data, id: equipment.length + 1 });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate.boots && !validate.boots) {
      if (brand !== "" && boots !== "") {
        dispatch(add(data));
        setData({
          id: equipment.length + 1,
          brand: "",
          boots: "",
          helmet: false,
          skiGoggles: false,
        });
      } else {
        if (brand === "" && boots === "") {
          setValidate({ ...validate, brand: true, boots: true });
        } else if (brand !== "" && boots === "") {
          setValidate({ ...validate, brand: false, boots: true });
        } else {
          setValidate({ ...validate, brand: true, boots: false });
        }
      }
    }
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label className="label-text" htmlFor="brand">
        Brand
      </label>
      <input
        className={validate.brand ? "text-input err" : "text-input"}
        type="text"
        id="brand"
        name="brand"
        value={brand}
        onChange={(e) => onChange(e)}
      />
      <p className="error-text"> {validate.brand && "Invalid input!"}</p>
      <label className="label-text" htmlFor="boots">
        Boots
      </label>
      <input
        className={validate.boots ? "text-input err" : "text-input"}
        type="text"
        id="boots"
        name="boots"
        value={boots}
        onChange={(e) => onChange(e)}
      />
      <p className="error-text">{validate.boots && "Invalid input!"}</p>
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
      <input onClick={updateState} type="submit" />
    </form>
  );
};

export default Add;
