import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDashboard } from "./dashboardSlice";
import { Link } from "react-router-dom";
import EquipmentTable from "../../components/Table/Table";
import Add from "../../components/Forms/Add";
import Edit from "../../components/Forms/Edit";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const equipment = useSelector(selectDashboard);
  const initialData = {
    id: equipment.length + 1,
    brand: "",
    boots: "",
    helmet: false,
    skiGoggles: false,
  };
  const [currentEquipment, setCurrentEquipment] = useState(initialData);
  const [editing, setEditing] = useState(false);

  const editEquipmentHandler = (item) => {
    setEditing(true);
    setCurrentEquipment({
      id: item.id,
      brand: item.brand,
      boots: item.boots,
      helmet: item.helmet,
      skiGoggles: item.skiGoggles,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.content}>
        <div className={styles.tableBox}>
          <EquipmentTable
            equipment={equipment}
            editEquipment={editEquipmentHandler}
            deleteEquipment={() => setEditing(false)}
          />
        </div>
        <div className={styles.addEditBox}>
          <button
            onClick={() => setEditing(false)}
            className={styles.dashboardButton}
          >
            Add new equipment
          </button>
          {!editing && <Add />}
          {editing && (
            <Edit
              currentEquipment={currentEquipment}
              cancelBtn={() => setEditing(false)}
            />
          )}
        </div>
      </div>
      <div className={styles.contentLink}>
        <Link className={styles.backButton} to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
