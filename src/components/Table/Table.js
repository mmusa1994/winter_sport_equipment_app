import React from "react";

import { useDispatch } from "react-redux";
import { remove } from "../../containers/Dashboard/dashboardSlice";

import "./styles.css";

const Table = ({ equipment, editEquipment, deleteEquipment }) => {
  const deleteEquipmentHandler = (item) => () => {
    deleteEquipment();
    dispatch(remove(item));
  };

  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Boots</th>
          <th>Helmet</th>
          <th>Ski-Goggles</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {equipment.length > 0 ? (
          equipment.map((item, i) => (
            <tr key={item.id}>
              <td>{item.brand}</td>
              <td>{item.boots}</td>
              <td>{item.helmet ? "✔︎" : "-"}</td>
              <td>{item.skiGoggles ? "✔︎" : "-"}</td>
              <td>
                <button
                  className="table-button edit"
                  onClick={() => {
                    editEquipment(item);
                  }}
                >
                  Edit
                </button>
                <button
                  className="table-button delete"
                  onClick={deleteEquipmentHandler(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No Equipment</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={5}>Copyright MM®</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
