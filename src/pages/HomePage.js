import * as React from "react";
import ButtonAppBar from "../component/AppBarMenu";
import BottomAppBar from "../component/BottomAppBar";
import PhotoSlider from "../component/PhotoSlider";
import Reservation from "../component/Reservation";

export default function HomePage() {
  return (
    <div>
      <ButtonAppBar />

      <PhotoSlider stye={{ backgroundColor: "white" }} />
      <Reservation />
      <BottomAppBar />
    </div>
  );
}
