import React from "react";
import { Container, Table } from "react-bootstrap";

import { useQuery } from "react-query";
import { API } from "../../config/api";

const IncomingTransaction = () => {
  // Fetching data from database
  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    console.log(response);
    return response.data.data;
  });

  return (
    <>
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-3">Incoming Transaction</h2>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Type of Rent</th>
                <th>Bukti Transfer</th>
                <th className="text-center">Status Payment</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {transaction?.map((value, index) => {
                let statusPayment;
                const success = value.status;
                const pending = value.status;
                if (success === "success") {
                  statusPayment = (
                    <td className="text-success text-center">{value.status}</td>
                  );
                } else if (pending === "Pending") {
                  statusPayment = (
                    <td className="text-warning text-center">{value.status}</td>
                  );
                } else {
                  statusPayment = (
                    <td className="text-danger text-center">{value.status}</td>
                  );
                }

                return (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.house.name}</td>
                    <td>{value.house.rent}</td>
                    <td>{statusPayment}</td>
                    {statusPayment}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default IncomingTransaction;
