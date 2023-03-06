import React, { useState } from "react";
import { Button, Card, Container, Image, Form } from "react-bootstrap";
import jwt from "jwt-decode";
import ModalChangePassword from "../components/modals/ModalChangePassword";
import IconProfile from "../assets/icons/IconProfile.png";
import IconEnvelope from "../assets/icons/IconEnvelope.png";
import IconLock from "../assets/icons/IconLock.png";
import IconHome from "../assets/icons/IconHome.png";
import IconGender from "../assets/icons/IconGender.png";
import IconPhone from "../assets/icons/IconPhone.png";
import IconLocation from "../assets/icons/IconLocation.png";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useMutation } from "react-query";
import Swal from "sweetalert2";

const styles = {
  Cursor: {
    cursor: "pointer",
  },
};

function Profile() {
  const [modalShow, setModalShow] = React.useState(false);

  const getToken = localStorage.getItem("token");

  const hasilDecode = jwt(getToken);

  const { data: user, refetch } = useQuery("userCache", async () => {
    const response = await API.get("/user/" + hasilDecode.id);
    return response.data.data;
  });

  const [photo, setPhoto] = useState({
    image: "",
  });

  const handleChangePhoto = (e) => {
    const { name, type } = e.target;
    setPhoto({
      ...photo,
      [name]: type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log("data url", url);
    }
  };

  const handleUpdate = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      if (photo.image) {
        formData.set("image", photo?.image[0], photo?.image[0]?.name);
      }

      const response = await API.patch("/user/" + hasilDecode.id, formData);

      photo.image.value = "";
      refetch();

      Swal.fire(
        {
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Success",
          text: "You have successfully change photo profile",
          showConfirmButton: false,
          timer: 1500,
        },
        response
      );
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "Failed change photo profile",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

  return (
    <div className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="w-75">
          <Card.Body className="d-flex justify-content-between p-4">
            <div className="d-flex flex-column gap-4">
              <h4>Personal Info</h4>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconProfile} />
                </div>
                <div>
                  <Card.Title>{user?.fullname}</Card.Title>
                  <Card.Text className="text-secondary">Full name</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconEnvelope} />
                </div>
                <div>
                  <Card.Title>{user?.email}</Card.Title>
                  <Card.Text className="text-secondary">Email</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconLock} />
                </div>
                <div>
                  <Card.Title style={styles.Cursor}>
                    <Card.Link
                      className="text-primary text-decoration-none"
                      onClick={() => setModalShow(true)}
                    >
                      Change Password
                    </Card.Link>
                    <ModalChangePassword
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Card.Title>
                  <Card.Text className="text-secondary">Password</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconHome} />
                </div>
                <div>
                  <Card.Title>{user?.role.name}</Card.Title>
                  <Card.Text className="text-secondary">Status</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconGender} />
                </div>
                <div>
                  <Card.Title>{user?.gender}</Card.Title>
                  <Card.Text className="text-secondary">Gender</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconPhone} />
                </div>
                <div>
                  <Card.Title>{user?.phone}</Card.Title>
                  <Card.Text className="text-secondary">Mobile phone</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconLocation} />
                </div>
                <div>
                  <Card.Title>{user?.address}</Card.Title>
                  <Card.Text className="text-secondary">Address</Card.Text>
                </div>
              </div>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{
                    maxWidth: "18rem",
                    minHeight: "18rem",
                    objectFit: "cover",
                  }}
                  src={user?.image}
                />
              </Card>
              <Form
                onSubmit={(e) => handleUpdate.mutate(e)}
                className="mt-2 w-100"
                style={{
                  maxWidth: "18rem",
                  objectFit: "cover",
                }}
              >
                <Form.Group className="mb-5">
                  <Form.Control
                    type="file"
                    id="upload"
                    name="image"
                    onChange={handleChangePhoto}
                    required
                  />
                  <Button
                    className="btn btn-primary mt-2 w-100"
                    type="submit"
                    style={{
                      maxWidth: "18rem",
                      objectFit: "cover",
                    }}
                  >
                    Change Photo Profile
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;
