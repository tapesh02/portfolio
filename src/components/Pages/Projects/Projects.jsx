import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { Markup } from "interweave";
import Aos from "aos";
import { toggleVisible, scrollToTop, renderIcon } from "../../../helpers";
import { projects, icons } from "../../../dataProviders";
import Header from "../../Header/Header";
import ArrowUp from "../../ArrowUp/ArrowUp";

import "../../../css/project.css";
import "../../../../node_modules/aos/dist/aos.css";

import { ExpandMore } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [articles, setArticles] = useState([]);
  const [shots, setShots] = useState([]);
  const [visible, setVisible] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  const handleToggle = () => {
    toggleVisible(300, setVisible);
  };

  const handleScroll = () => {
    scrollToTop(0, "smooth");
  };

  useEffect(() => {
    const getDribbleShots = async () => {
      const dribbleAccessToken = `${process.env.REACT_APP_DRIBBLE_ACCESS_TOKEN}`;
      const dribble = `https://api.dribbble.com/v2/user/shots?access_token=${dribbleAccessToken}&page=1&per_page=10`;

      const response = await fetch(dribble);
      try {
        const responseJson = await response.json();
        setShots(responseJson);
      } catch (error) {
        console.log(error);
      }
    };
    getDribbleShots();
  }, []);

  useEffect(() => {
    const getMediumPosts = async () => {
      const mediumApi = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tapesh.patel";

      const response = await fetch(mediumApi, { headers: { Accept: "application/json" } });

      try {
        const responseJson = await response.json();
        const data = responseJson.items;
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMediumPosts();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleToggle);
    return () => {
      window.removeEventListener("scroll", handleToggle);
    };
  }, []);

  const RenderDribbleShots = () =>
    shots?.map((shot) => {
      const { id, updated_at, images, title, html_url } = shot;
      const { normal } = images;
      return (
        <Box
          className="project-section"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          key={id}>
          <Box className="main-card">
            <Box className="card-img">
              <img src={normal} alt="cardimg" className="card-img-inner" />{" "}
            </Box>
            <Box className="card-title"> {title} </Box>
            <Box className="card-subtitle"> {Date(updated_at).toString().slice(0, 15)}</Box>
            <Box className="card-footer" onClick={onClickUrl(`${html_url}`)}>
              <Typography className="loadshot-text">
                View Shot
                <FontAwesomeIcon className="shots-icon" icon={faDribbble} />
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    });

  const RenderMediumArticles = () =>
    articles?.map((article) => {
      const { link, title, description, pubDate } = article;
      return (
        <Box className="main-blog-card " key={link} data-aos="fade-up" data-aos-duration="3000">
          <Box className="card-blog-content">
            <Box className="blog-content-main">
              <p className="blog-content-title">{title}</p>
              <Markup className="blog-content-overview" content={description}></Markup>
            </Box>
            <Box className="blog-content-footer">
              <Button variant="contained" fontSize="small" className="read-more-btn" href={link} target="_blank">
                Read More
              </Button>
              <p className="blog-footer-date">{pubDate.slice(0, 10)}</p>
            </Box>
          </Box>
        </Box>
      );
    });

  const RenderAccordion = () =>
    projects?.map((project) => {
      const { id, projectName, projectLink, projectDescription } = project;
      return (
        <Accordion key={id}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
            <h3>{projectName} </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {projectDescription}
              <Button href={projectLink} target="_blank" rel="noopener noreferrer" color="inherit">
                Click to view
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <>
      <Box className="main-blog ">
        <Header mainHeaderClass={"main-blog-header"} headerClass={"blog-header"} headerText={"UI/UX"} />
      </Box>
      <ArrowUp visible={visible} handleScroll={handleScroll} className={"arrow-iconBtn2"} />
      <Box className="main-project-section">
        <RenderDribbleShots />
      </Box>

      <Box className="main-blog ">
        <Header mainHeaderClass={"main-blog-header"} headerClass={"blog-header"} headerText={"Blogs"} />
        <div className="cards">
          <RenderMediumArticles />
        </div>

        <Box>
          <Header mainHeaderClass={"main-blog-header"} headerClass={"blog-header"} headerText={"Upcoming Projects"} />
          <Box style={{ marginBottom: "1%", marginTop: "1%" }}>
            <RenderAccordion />
          </Box>
        </Box>
        <Box className="main-blog-follow-section">
          <p className="blog-follow-title"> Want to get latest update of my blogs?</p>
          <p className="blog-follow-subtitle"> Follow me</p>
        </Box>
        <Box className="blog-follow-icons">{renderIcon(icons)}</Box>
      </Box>
    </>
  );
};

export default Projects;
