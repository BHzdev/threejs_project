import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  IsLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
