import React from "react";
import Common from "./Common";
import bannerImage from "./images/banner.svg";

export default function About() {
  return (
    <>
      <Common name="Welcome to About Page" imgsrc={bannerImage} visit="/contact" btname="Contact Now"/>
    </>
  );
}
 