import powerappsIcon from "./assets/icons/powerappsicon.png";
import devopsIcon from "./assets/icons/devopsIcon.png";
import deployIcon from "./assets/icons/deployIcon.png";
import reactjsIcon from "./assets/icons/reactjsicon.png";
import nodejsIcon from "./assets/icons/nodejsicon.png";
import uiIcon from "./assets/icons/uiIcon.png";
import apiIcon from "./assets/icons/apiIcon.png";
import saasIcon from "./assets/icons/saasicon.png";
import gitIcon from "./assets/icons/giticon.png";
import mongodbIcon from "./assets/icons/mongodbicon.png";
import expressjsIcon from "./assets/icons/expressjsicon.png";
import muiIcon from "./assets/icons/muiicon.png";
import dribble from "./assets/icons/dribble.png";
import instagram from "./assets/icons/instagram.png";
import linkedIn from "./assets/icons/linkedin.png";
import twitter from "./assets/icons/twitter.png";
import behance from "./assets/icons/behance.svg";
import profileImg from "./assets/images/myimg.jpeg";
import profileImg2 from "./assets/images/profileimg.jpg";
import btps from "./assets/images/btps.png";
import dbs from "./assets/images/dbs.jpg";
import gpms from "./assets/images/gpms.jpg";
import nmu from "./assets/images/nmu.jpg";
import unipupil from "./assets/images/unipupil.jpg";
import unum from "./assets/images/unum.png";
import kare from "./assets/images/kare.jpg";

const images = {
  powerappsIcon,
  devopsIcon,
  deployIcon,
  reactjsIcon,
  nodejsIcon,
  uiIcon,
  apiIcon,
  saasIcon,
  gitIcon,
  mongodbIcon,
  expressjsIcon,
  muiIcon,
  profileImg,
  dribble,
  instagram,
  linkedIn,
  twitter,
  behance,
  profileImg2,
  btps,
  dbs,
  gpms,
  nmu,
  unipupil,
  unum,
  kare,
};

export const getImage = (_images) => {
  return images[_images];
};
