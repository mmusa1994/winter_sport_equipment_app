import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../containers/Dashboard/dashboardSlice";

import "./styles.css";

const Edit = ({ currentEquipment, cancelBtn }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(currentEquipment);
  const [validate, setValidate] = useState({
    brand: false,
    boots: false,
  });

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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate.boots && !validate.boots) {
      if (data.brand !== "" && data.boots !== "") {
        dispatch(update(data));
      } else {
        if (data.brand === "" && data.boots === "") {
          setValidate({ ...validate, brand: true, boots: true });
        } else if (data.brand !== "" && data.boots === "") {
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
        Brand:
      </label>
      <input
        className={validate.brand ? "text-input err" : "text-input"}
        type="text"
        id="brand"
        name="brand"
        value={data.brand}
        onChange={(e) => onChange(e)}
      />
      <p className="error-text"> {validate.brand && "Invalid input!"}</p>
      <label className="label-text" htmlFor="boots">
        Boots:
      </label>
      <input
        className={validate.boots ? "text-input err" : "text-input"}
        type="text"
        id="boots"
        name="boots"
        value={data.boots}
        onChange={(e) => onChange(e)}
      />
      <p className="error-text"> {validate.boots && "Invalid input!"}</p>
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
