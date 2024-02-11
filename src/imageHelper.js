import powerappsIcon from "./images/icons/powerappsicon.png";
import azureDevopsIcon from "./images/icons/azureDevops.png";
import firebaseIcon from "./images/icons/firebase.png";
import reactjsIcon from "./images/icons/reactjsicon.png";
import nodejsIcon from "./images/icons/nodejsicon.png";
import figmaIcon from "./images/icons/figma.png";
import adobexdIcon from "./images/icons/adobexdicon.png";
import saasIcon from "./images/icons/saasicon.png";
import gitIcon from "./images/icons/giticon.png";
import mongodbIcon from "./images/icons/mongodbicon.png";
import expressjsIcon from "./images/icons/expressjsicon.png";
import muiIcon from "./images/icons/muiicon.png";
import profileImg from "./images/myimg.jpeg";
import profileImg2 from "./images/profileimg.jpg";
import dribble from "./images/icons/dribble.png";
import instagram from "./images/icons/instagram.png";
import linkedIn from "./images/icons/linkedin.png";
import twitter from "./images/icons/twitter.png";
import behance from "./images/icons/behance.svg";

const images = {
    powerappsIcon,
    azureDevopsIcon,
    firebaseIcon,
    reactjsIcon,
    nodejsIcon,
    figmaIcon,
    adobexdIcon,
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
};

export const getImage = (_images) => {
    return images[_images];
};
