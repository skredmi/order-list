import { useState } from "react";
import { Table } from "../../shared/Table/Table";
import { OrderTableHeader } from "./OrderTableHeader/OrderTableHeader";
import { OrderTableBody } from "./OrderTableBody/OrderTableBody";
import { OrderTableFooter } from "./OrderTableFooter/OrderTableFooter";

export const OrderTable = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <Table>
      <OrderTableHeader />
      <OrderTableBody state={[isOpenForm, setIsOpenForm]} />
      <OrderTableFooter isOpenForm={isOpenForm} />
    </Table>
  );
};
