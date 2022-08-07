import React from "react";
import Common from "./Common";
import bannerImage from "./images/banner.svg";


export default function Home() {
  return (
    <>
      <Common name="Grow your business with" imgsrc={bannerImage} visit="/services" btname="Get Started"/>
    </>
  );
}
