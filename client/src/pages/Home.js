import React, { useContext } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Form,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import rupiahFormat from "rupiah-format";
import { RoomsContext } from "../context/roomsContext";

const Home = () => {
  const { handleOnSubmit, handleChange, house } = useContext(RoomsContext);

  let { data: houses } = useQuery("housesCache", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });

  return (
    <Row className="m-0">
      <Col md={5} lg={4} className="py-3">
        <Form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <div
              className="mb-2"
              style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
            >
              Type of Rent
            </div>
            <Form.Group className="d-flex flex-column gap-3">
              <ToggleButtonGroup
                type="radio"
                name="type_rent"
                className="d-flex gap-3"
              >
                <ToggleButton
                  variant="outline-primary"
                  name="type_rent"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="Day"
                  value="Day"
                  onChange={handleChange}
                >
                  Day
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="type_rent"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="Month"
                  value="Month"
                  onChange={handleChange}
                >
                  Month
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="type_rent"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="Year"
                  value="Year"
                  onChange={handleChange}
                >
                  Year
                </ToggleButton>
              </ToggleButtonGroup>
            </Form.Group>
          </div>
          <div className="mb-4">
            <div
              className="mb-2"
              style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
            >
              Property Room
            </div>
            <div className="mb-2">
              <div
                style={{
                  color: "#929292",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Bedroom
              </div>
              <ToggleButtonGroup
                type="radio"
                name="bedroom"
                className="d-flex gap-3"
              >
                <ToggleButton
                  variant="outline-primary"
                  name="bedroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bedroom-1"
                  value="1"
                  onChange={handleChange}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bedroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bedroom-2"
                  value="2"
                  onChange={handleChange}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bedroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bedroom-3"
                  value="3"
                  onChange={handleChange}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bedroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bedroom-4"
                  value="4"
                  onChange={handleChange}
                >
                  4
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bedroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bedroom-5"
                  value="5"
                  onChange={handleChange}
                >
                  5+
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="mb-2">
              <div
                style={{
                  color: "#929292",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Bathroom
              </div>
              <ToggleButtonGroup
                type="radio"
                name="bathroom"
                className="d-flex gap-3"
              >
                <ToggleButton
                  variant="outline-primary"
                  name="bathroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bathroom-1"
                  value={1}
                  onChange={handleChange}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bathroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bathroom-2"
                  value={2}
                  onChange={handleChange}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bathroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bathroom-3"
                  value={3}
                  onChange={handleChange}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bathroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bathroom-4"
                  value={4}
                  onChange={handleChange}
                >
                  4
                </ToggleButton>
                <ToggleButton
                  variant="outline-primary"
                  name="bathroom"
                  className="fw-semibold text-dark bd rounded-2 bg w-100"
                  id="bathroom-5"
                  value={5}
                  onChange={handleChange}
                >
                  5+
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="mb-2"
              style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
            >
              Amenities
            </div>
            <InputGroup className="d-flex justify-content-between">
              <Form.Label
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#929292",
                }}
              >
                Furnished
              </Form.Label>
              <Form.Check
                aria-label="option 1"
                name="Furnished"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="d-flex justify-content-between">
              <Form.Label
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#929292",
                }}
              >
                Pet Allowed
              </Form.Label>
              <Form.Check
                aria-label="option 1"
                name="Pet Allowed"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="d-flex justify-content-between">
              <Form.Label
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#929292",
                }}
              >
                Shared Accomodation
              </Form.Label>
              <Form.Check
                aria-label="option 1"
                name="Shared Accomodation"
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div className="mb-5">
            <div
              className="mb-2"
              style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
            >
              Budget
            </div>
            <Form.Group className="d-flex justify-content-between align-items-center mb-3">
              <Form.Label
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#000000",
                }}
              >
                Less than IDR.
              </Form.Label>
              <Form.Control
                type="text"
                name="price"
                onChange={handleChange}
                className="w-50"
                placeholder="8.000.000"
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              style={{
                width: "140px",
                height: "50px",
              }}
            >
              APPLY
            </Button>
          </div>
        </Form>
      </Col>
      <Col md={7} lg={8} className="bg-light p-4 ms-auto">
        {house !== undefined ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {house?.map((item, index) => (
              <Col key={index}>
                <Link
                  to={`/detail-property/` + item.id}
                  className="text-decoration-none text-dark"
                  style={{ cursor: "pointer" }}
                >
                  <Card className="h-100 p-2 bg-light">
                    <Card.Img
                      variant="top rounded"
                      src={item.image}
                      className="position-relative"
                    />
                    <div className="position-absolute d-flex gap-2 align-item-center p-1">
                      {item.amenities?.map((amenity, idx) => (
                        <div key={idx}>
                          <Card.Text
                            className="rounded bg-white py-1 px-2"
                            style={{ fontSize: "9px" }}
                          >
                            {amenity}
                          </Card.Text>
                        </div>
                      ))}
                    </div>
                    <Card.Body className="px-0">
                      <Card.Title className="fw-bold">
                        {rupiahFormat.convert(item.price)} / {item.rent}
                      </Card.Title>
                      <Card.Text className="fw-bold mb-0">
                        {item.bedroom} Beds, {item.bathroom} Bath, {item.sqf}{" "}
                        sqft
                      </Card.Text>
                      <Card.Text style={{ color: "#A8A8A8" }}>
                        {item.city.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {houses?.map((item, index) => (
              <Col key={index}>
                <Link
                  to={`/detail-property/` + item.id}
                  className="text-decoration-none text-dark"
                  style={{ cursor: "pointer" }}
                >
                  <Card className="h-100 p-2 bg-light">
                    <Card.Img
                      variant="top rounded"
                      src={item.image}
                      className="position-relative"
                    />
                    <div className="position-absolute d-flex gap-2 align-item-center p-1">
                      {item.amenities?.map((amenity, idx) => (
                        <div key={idx}>
                          <Card.Text
                            className="rounded bg-white py-1 px-2"
                            style={{ fontSize: "9px" }}
                          >
                            {amenity}
                          </Card.Text>
                        </div>
                      ))}
                    </div>
                    <Card.Body className="px-0">
                      <Card.Title className="fw-bold">
                        {rupiahFormat.convert(item.price)} / {item.rent}
                      </Card.Title>
                      <Card.Text className="fw-bold mb-0">
                        {item.bedroom} Beds, {item.bathroom} Bath, {item.sqf}{" "}
                        sqft
                      </Card.Text>
                      <Card.Text style={{ color: "#A8A8A8" }}>
                        {item.city.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default Home;
