import React from "react";
import "../../App.css";

import convertRupiah from "rupiah-format";
import Moment from "react-moment";
import {
  Badge,
  Card,
  Container,
  Image,
  ListGroup,
  Table,
} from "react-bootstrap";

import { useQuery } from "react-query";
import { API } from "../../config/api";

// import convertRupiah from "rupiah-format";

// import { useParams } from "react-router-dom";

import IconNavbar from "../../assets/icons/IconNavbar.png";
import Invoice from "../../assets/invoice.png";
// import Moment from "react-moment";

function HistoryIncome() {
  // Fetching data user from database
  const { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    return response.data.data;
  });

  console.log("ini transaction", transaction);

  return (
    <div className="bg-light py-5">
      <Container className="gap-4 d-flex flex-column">
        {transaction?.map((item, index) => (
          <Card key={index}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <Image src={IconNavbar} />
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div style={{ fontSize: "36px", fontWeight: "800" }}>
                      INVOICE
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#878787",
                        fontWeight: "400",
                      }}
                    >
                      <Moment format="dddd" className="fw-bold">
                        {item.house.updated_at}
                      </Moment>
                      ,{" "}
                      <Moment format="D MMM YYYY">
                        {item.house.updated_at}
                      </Moment>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-3">
                    <div style={{ fontSize: "24px", fontWeight: "800" }}>
                      {item.house.name}
                    </div>
                    <div style={{ fontSize: "14px", width: "282px" }}>
                      {item.house.address}
                    </div>
                    <div className="ms-3">
                      <Badge bg="success" className="rounded-0">
                        {item.house.status}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <ul className="timeline mt-3">
                      <li className="timeline-item-top mb-5">
                        <h5 className="fw-bold">Check-in</h5>
                        <div style={{ fontSize: "14px", color: "#959595" }}>
                          <Moment format="DD MMM YYYY">
                            {item.house.checkin}
                          </Moment>
                        </div>
                      </li>
                      <li className="timeline-item-bottom">
                        <h5 className="fw-bold">Check-out</h5>
                        <div style={{ fontSize: "14px", color: "#959595" }}>
                          <Moment format="DD MMM YYYY">
                            {item.house.checkout}
                          </Moment>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "700" }}>
                        Amenites
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#959595",
                        }}
                      >
                        {item.house.amenities[0]}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#959595",
                        }}
                      >
                        {item.house.amenities[1]}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#959595",
                        }}
                      >
                        {item.house.amenities[2]}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "700" }}>
                        Type of Rent
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#959595",
                        }}
                      >
                        {item.house.rent}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image src={Invoice} />
                  </div>
                </div>
              </ListGroup.Item>
              <Table responsive>
                <thead>
                  <tr>
                    <th
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                    >
                      No
                    </th>
                    <th
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                    >
                      Full Name
                    </th>
                    <th
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                    >
                      Gender
                    </th>
                    <th
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                      colSpan={3}
                    >
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#B1B1B1",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#B1B1B1",
                      }}
                    >
                      {item?.user?.fullname}
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#B1B1B1",
                      }}
                    >
                      {item.user?.gender}
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        color: "#B1B1B1",
                      }}
                    >
                      {item.user.phone}
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                      className="text-end"
                    >
                      Long time rent:
                    </td>
                    <td
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                      }}
                      colSpan={2}
                    >
                      <Moment
                        duration={item.house.checkin}
                        date={item.house.checkout}
                      />
                    </td>
                  </tr>
                  <tr style={{ borderBottomStyle: "none" }}>
                    <td colSpan={4} style={{ borderBottomStyle: "none" }}></td>
                    <td
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                        borderBottomStyle: "none",
                      }}
                      className="text-end"
                    >
                      Total:
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#3CF71E",
                        borderBottomStyle: "none",
                      }}
                    >
                      {convertRupiah.convert(item.house.price)}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ListGroup>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default HistoryIncome;
