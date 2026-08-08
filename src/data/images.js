// ============================================================
// Andarena Cafe — single source of truth for every image on the
// site. Swap real photography by editing the URLs below only;
// no component should ever hardcode an image path.
//
// Until real photography is supplied, placehold.co placeholders
// are used, tinted to match the brand palette so the layout reads
// correctly (wood-brown for food/drink, brick-red for exterior,
// forest-green tinted for plant/ambiance shots).
// ============================================================
import logo from "../assets/logo.png";
import heroExterior from "../assets/pic2.jpeg";
import heroInterior from "../assets/pic4.jpeg";
import drinkCinnamonLatte from "../assets/pic3.jpeg";
import drinkHotChocolate from "../assets/pic6.jpeg";
import drinkColdBrew from "../assets/pic7.jpeg";
import foodCroissant from "../assets/pic1.jpeg";
import instagramGrid1 from "../assets/pic5.jpeg";

const PALETTE = {
  mustard: "E6B23E",
  brick: "A8562F",
  wood: "5C3A22",
  forest: "35503C",
  charcoal: "1C1A17",
  cream: "FBF3E3",
};

export const images = {
  // images from src/assets/images/ are imported and exported here for use in components

  logo: logo,

  heroExterior: heroExterior,
  heroInterior: heroInterior,

  drinkCinnamonLatte: drinkCinnamonLatte,
  drinkHotChocolate: drinkHotChocolate,
  drinkColdBrew: drinkColdBrew,
  foodCroissant: foodCroissant,

  ambianceWindowSeating: heroExterior,
  ambiancePlantCorner: heroInterior,
  ambianceCoffeeOnTable: drinkHotChocolate,

  instagramGrid1: instagramGrid1,
  instagramGrid2: drinkColdBrew,
  instagramGrid3: drinkCinnamonLatte,
  instagramGrid4: foodCroissant,
};
