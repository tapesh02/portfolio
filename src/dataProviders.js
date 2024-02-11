import { CardTravel, LibraryMusic, Movie, People, SportsSoccer } from "@material-ui/icons";
import { getImage } from "./imageHelper";

export const menu = [
    {
        name: "Home",
        link: "/",
    },
    { link: "/aboutme", name: "About Me" },
    { link: "/projects", name: "Projects" },
];

export const detailsData = [
    { texHeader: "Birthday: ", text: "19 June 1993" },
    { texHeader: "Phone: ", text: "+353 0899876363" },
    { texHeader: "Location: ", text: "Newbridge, Ireland" },
    { texHeader: "Age: ", text: "28" },
    { texHeader: "Email: ", text: "pateltapesh505@gmail.com" },
    { texHeader: "Degree: ", text: "Masters In Software Engineering" },
];

export const technologies = [
    {
        id: 1,
        image: getImage("powerappsIcon"),
        skills: "MS Power Platform",
    },
    {
        id: 2,
        image: getImage("azureDevopsIcon"),
        skills: "AzureDevops/GitLab",
    },
    {
        id: 3,
        image: getImage("firebaseIcon"),
        skills: "Firebase/Vercel",
    },
    {
        id: 4,
        image: getImage("reactjsIcon"),
        skills: "React Js",
    },
    {
        id: 5,
        image: getImage("nodejsIcon"),
        skills: "Node Js",
    },
    {
        id: 6,
        image: getImage("figmaIcon"),
        skills: "Figma",
    },
    {
        id: 7,
        image: getImage("adobexdIcon"),
        skills: "Adobe XD",
    },
    {
        id: 8,
        image: getImage("saasIcon"),
        skills: "CSS/SASS/SCSS",
    },
    {
        id: 9,
        image: getImage("gitIcon"),
        skills: "Git Version/Source Control",
    },
    {
        id: 10,
        image: getImage("mongodbIcon"),
        skills: "No SQL (MongoDb)",
    },
    {
        id: 11,
        image: getImage("expressjsIcon"),
        skills: "Express Js",
    },
    {
        id: 12,
        image: getImage("muiIcon"),
        skills: "Material UI/Bootstrap CSS",
    },
];

export const resumeDetails = [
    {
        id: 1,
        title: "MASTER OF SCIENCE IN INFORMATION SYSTEMS WITH COMPUTING",
        year: "2017-2019",
        location: "Dublin Business School, Ireland",
    },
    {
        id: 2,
        title: "BACHELOR OF ELECTRICAL ENGINEERING",
        year: "2011-2006",
        location: "North Maharashtra University, Jalgoan, India",
    },
    {
        id: 3,
        title: "BOYS TOWN PUBLIC SCHOOL",
        year: "2009-2010",
        location: "Pune University Nashik, India",
    },
    {
        id: 4,
        title: "APPLICATION DEVELOPER",
        year: "2020-2023",
        location: "Kare, Newbridge, Ireland",
    },
    {
        id: 5,
        title: "JUNIOR DEVELOPER",
        year: "2019-2020",
        location: "Unipupil Limited, Dublin, Ireland",
    },
    {
        id: 6,
        title: "JUNIOR DEVELOPER",
        year: "2017-2019",
        location: "Global Prospect Media Solutions, Vadodara, India",
    },
];

export const icons = [
    {
        id: 1,
        icon: getImage("twitter"),
        link: "https://twitter.com/tapesh2",
    },
    {
        id: 2,
        icon: getImage("linkedIn"),
        link: "https://www.linkedin.com/in/tapesh-patel-276a65a4/",
    },
    {
        id: 3,
        icon: getImage("dribble"),
        link: "https://dribbble.com/Tapesh_Patel",
    },
    {
        id: 4,
        icon: getImage("instagram"),
        link: "https://www.instagram.com/tapesh__patel/",
    },
];

export const hobbies = [
    {
        id: 1,
        hobbyName: "Travel",
        icon: <CardTravel />,
    },
    {
        id: 2,
        hobbyName: "Movie",
        icon: <Movie />,
    },
    {
        id: 3,
        hobbyName: "Playing",
        icon: <SportsSoccer />,
    },
    {
        id: 4,
        hobbyName: "Music",
        icon: <LibraryMusic />,
    },
    {
        id: 5,
        hobbyName: "Socializing",
        icon: <People />,
    },
];

export const projects = [
    {
        id: 1,
        projectName: "Cinematic Guidebook",
        projectDescription:
            "A movie web app where a user can search and watch for any of his favorite movie trailer or tv show trailer. New feature coming soon : Where user can watch movies, add to watchlist and share with friends and family.",
        projectLink: "https://cinematic-guidebook.vercel.app/",
    },
    {
        id: 2,
        projectName: "SendCryp",
        projectDescription:
            " A crypto web app where a user can send any cryptocurrencies around the world on ethereum blockchain. New feature coming soon Where user can keep track of price change, add to watchlist and receive email notification on funds received.",
        projectLink: "https://sendcryp-afebd.web.app/home",
    },
];
