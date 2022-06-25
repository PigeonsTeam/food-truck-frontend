import React from "react";
import { Box } from "@mui/material";
import { Map, Marker } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers'

const MapPage = () => {
  return (
    <Box>
      <Map provider={stamenToner} dprs={[1, 2]} height={700} defaultCenter={[40.698403, -73.982328]} defaultZoom={11}>
        <Marker width={50} anchor={[40.7128, -74.0060]} />
      </Map>
    </Box>
  );
};

export default MapPage;
