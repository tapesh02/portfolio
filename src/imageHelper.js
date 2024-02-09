import powerappsIcon from "./images/icons/powerappsicon.png";
import powerautoIcon from "./images/icons/powerautoicon.png";
import sharepointIcon from "./images/icons/sharepointicon.png";
import reactjsIcon from "./images/icons/reactjsicon.png";
import nodejsIcon from "./images/icons/nodejsicon.png";
import photoshopIcon from "./images/icons/photoshopicon.png";
import adobexdIcon from "./images/icons/adobexdicon.png";
import saasIcon from "./images/icons/saasicon.png";
import gitIcon from "./images/icons/giticon.png";
import mongodbIcon from "./images/icons/mongodbicon.png";
import expressjsIcon from "./images/icons/expressjsicon.png";
import muiIcon from "./images/icons/muiicon.png";
import profileImg from "./images/myimg.jpeg";

export const getImage = (image) => {
    switch (image) {
        case "powerappsIcon":
            return powerappsIcon;
        case "powerautoIcon":
            return powerautoIcon;
        case "sharepointIcon":
            return sharepointIcon;
        case "reactjsIcon":
            return reactjsIcon;
        case "nodejsIcon":
            return nodejsIcon;
        case "photoshopIcon":
            return photoshopIcon;
        case "adobexdIcon":
            return adobexdIcon;
        case "saasIcon":
            return saasIcon;
        case "gitIcon":
            return gitIcon;
        case "mongodbIcon":
            return mongodbIcon;
        case "expressjsIcon":
            return expressjsIcon;
        case "muiIcon":
            return muiIcon;
        case "profileImg":
            return profileImg;
        default:
            return null;
    }
};
