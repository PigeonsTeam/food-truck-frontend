import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Map, Marker } from "pigeon-maps";
import { stamenToner } from "pigeon-maps/providers";
import { foodTrucks, Trucks } from "../../data/foodTrucks";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  borderRadius: 3,
};

const SquareButton = ({ title, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="small"
      variant="contained"
      sx={{
        borderRadius: "6px",
        backgroundColor: "#d9d8d8",
        fontWeight: "600",
        color: "black",
        fontSize: "16px",
        width: "98px",
      }}
    >
      {title}
    </Button>
  );
};

const MapPage = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleModal = (truck) => {
    setModalData(truck);
    handleOpen();
  };

  console.log(modalData)

  const markers = Trucks?.map((truck) => {
    return (
      <Marker
        color="#B21905"
        width={50}
        anchor={[truck.location[0], truck.location[1]]}
        onClick={() => handleModal(truck)}
        key={uuid()}
      />
    );
  });

  // create a small popup/modal for the basic food truck info

  return (
    <>
      <NavBar noSearchBar={false} />
      <Box>
        <Map
          provider={stamenToner}
          dprs={[1, 2]}
          height={770}
          defaultCenter={[40.7128, -74.006]}
          defaultZoom={12}
        >
          {markers}
        </Map>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle} p={0} mb={0}>
            <Card
              sx={{
                width: 357,
                height: 285,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Stack
                spacing={2}
                pl={2}
                justifyContent="center"
                alignItems="center"
              >
                <CardMedia
                  component="img"
                  image={modalData?.image}
                  sx={{ width: 70, height: 70 }}
                />
                <CardMedia
                  component="img"
                  image="sushiPic.jpeg"
                  sx={{ width: 70, height: 70 }}
                />
                <CardMedia
                  component="img"
                  image="sushiPic.jpeg"
                  sx={{ width: 70, height: 70 }}
                />
              </Stack>
              <Box ml={1} pt={3} px={1}>
                <CardContent sx={{ padding: 0 }}>
                  <Typography mb={1} fontSize={18} sx={{ fontWeight: 700 }}>
                    {modalData?.name}
                  </Typography>
                  <Typography fontSize={16} variant="p">
                    {modalData?.shortDescription}
                  </Typography>
                  <br />
                  <Box mt={2}>
                    <Typography fontSize={16} variant="p">
                      Hours: <br /> 12:00pm- 12:00am
                    </Typography>
                  </Box>
                  <Box mt={3}>
                    <Stack direction={"row"} spacing={3}>
                      <SquareButton title={"Menu"} />
                      <SquareButton title={"Profile"} onClick={() => navigate('/profile')} />
                    </Stack>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default MapPage;
