import React from "react";
import { v1 as uuid } from 'uuid';
import { Box } from "@mui/material";
import { Map, Marker } from "pigeon-maps";
import { stamenToner } from "pigeon-maps/providers";
import { foodTrucks } from "../../data/foodTrucks";

const MapPage = () => {
  // const foodTruck = {
  //   name: 'Taco Truck Express',
  //   foodType: 'foodType',
  //   reviews: [
  //     {
  //       customerName: 'Bill',
  //       photo: 'someImg.jpg',
  //       description: 'this place was really good',
  //       rating: 4
  //     }
  //   ],
  //   location: [40.7128, -74.0060]
  // }

  // for each foodTruck map to a Marker
  const markers = foodTrucks.map((truck) => {
    return (
      <Marker
        color="black"
        width={50}
        anchor={[truck.location[0], truck.location[1]]}
        onClick={() => console.log(truck.name)}
        key={uuid()}
      />
    );
  });

  // create a small popup/modal for the basic food truck info

  return (
    <Box>
      <Map
        provider={stamenToner}
        dprs={[1, 2]}
        height={700}
        defaultCenter={[40.7128, -74.006]}
        defaultZoom={12}
      >
        {markers}
      </Map>
    </Box>
  );
};

export default MapPage;
