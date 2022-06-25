import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import {
  Box,
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
import { foodTrucks } from "../../data/foodTrucks";
import NavBar from "../../components/NavBar/NavBar";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 2,
};

const MapPage = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModal = (truck) => {
    setModalData(truck);
    handleOpen();
  };

  const markers = foodTrucks.map((truck) => {
    return (
      <Marker
        color="black"
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
      <NavBar />
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
          <Box sx={{ modalStyle }} p={2} mb={1}>
            <Card
              sx={{
                width: 330,
                height: 330,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box py={2} pl={2}>
                <CardMedia
                  component="img"
                  image="sushiPic.jpeg"
                  sx={{ width: 90, height: 90 }}
                />
                <CardMedia
                  component="img"
                  image="sushiPic.jpeg"
                  sx={{ width: 90, height: 90 }}
                />
                <CardMedia
                  component="img"
                  image="sushiPic.jpeg"
                  sx={{ width: 90, height: 90 }}
                />
              </Box>
              <Box pt={2} px={1}>
                <CardContent sx={{ padding: 0 }}>
                  <Typography fontSize={16} sx={{ fontWeight: 700 }}>
                    Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography fontSize={14} variant="p">
                    Lorem ipsum dol or sit amet, conse ctetur adipiscing
                  </Typography>
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
