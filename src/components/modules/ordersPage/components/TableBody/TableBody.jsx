import { useEffect, useState } from "react";
import styles from "./TableBody.module.css";
import { mock } from "../../mock/mock";
import { TableRow } from "../TableRow/TableRow";

export const TableBody = () => {
  const [showOrders, setShowOrders] = useState([]);

  useEffect(() => {
    setShowOrders(mock.slice(0, 20));
  }, []);

  return (
    <div className={styles.container}>
      {showOrders.map((item) => (
        <TableRow key={item.id} item={item} />
      ))}
    </div>
  );
};
