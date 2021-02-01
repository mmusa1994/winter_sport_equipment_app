import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectDashboard } from "./dashboardSlice";

import styles from "./Dashboard.module.css";
import EquipmentTable from "../../components/Table/Table";
import Add from "../../components/Forms/Add";
import Edit from "../../components/Forms/Edit";

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
      <EquipmentTable
        equipment={equipment}
        editEquipment={editEquipmentHandler}
        deleteEquipment={() => setEditing(false)}
      />
      {!editing && <Add />}
      {editing && <Edit currentEquipment={currentEquipment} />}
    </div>
  );
};
