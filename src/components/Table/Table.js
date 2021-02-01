import React from "react";

import { useDispatch } from "react-redux";
import { remove } from "../../features/dashboard/dashboardSlice";

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
        </tr>
      </thead>
      <tbody>
        {equipment.length > 0 ? (
          equipment.map((item) => (
            <tr key={item.id}>
              <td>{item.brand}</td>
              <td>{item.boots}</td>
              <td>{item.helmet ? "Yes" : "No"}</td>
              <td>{item.skiGoggles ? "Yes" : "No"}</td>
              <td>
                <button
                  className="button edit"
                  onClick={() => {
                    editEquipment(item);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button delete"
                  onClick={deleteEquipmentHandler(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Equipment</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
