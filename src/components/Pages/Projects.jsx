import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { Markup } from "interweave";
import Aos from "aos";

import "../Pages/css/project.css";
import "../../../node_modules/aos/dist/aos.css";

import { Instagram, LinkedIn, Twitter, ArrowUpward, ExpandMore } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    const [articles, setArticles] = useState();
    const [shots, setShots] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getDribbleShots = async () => {
            const dribbleAccessToken = `${process.env.REACT_APP_DRIBBLE_ACCESS_TOKEN}`;
            const dribbblePage = 1;
            const SHOTS_PER_PAGE = 10;
            const dribbleapi = `https://api.dribbble.com/v2/user/shots?access_token=${dribbleAccessToken}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`;

            const dResponse = await fetch(dribbleapi);
            try {
                const dResponseJson = await dResponse.json();
                const dshots = dResponseJson;
                console.log(dResponseJson);
                setShots(dshots);
                console.log(dshots);
            } catch (error) {
                console.log(error);
            }
        };
        getDribbleShots();
    }, []);

    useEffect(() => {
        const getmediumapi = async () => {
            const mediumapi = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tapesh.patel";

            const response = await fetch(mediumapi, { headers: { Accept: "application/json" } });

            try {
                const responseJson = await response.json();
                const data = responseJson.items;
                setArticles(data);
            } catch (error) {
                console.log(error);
            }
        };
        getmediumapi();
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickUrl = (url) => {
        return () => openInNewTab(url);
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <Box className="main-blog">
                <Box className="main-blog-header">
                    <p className="blog-header"> UI/UX </p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
            </Box>
            <div className="arrowiconBtn2">
                <ArrowUpward
                    style={{ display: visible ? "inline-block" : "none" }}
                    className="arrowicon2"
                    onClick={scrollToTop}
                />
            </div>
            <Box className="main-project-section">
                {shots
                    ? shots?.map((shot) => {
                          return (
                              <Box
                                  className="project-section"
                                  data-aos="fade-right"
                                  data-aos-offset="300"
                                  data-aos-easing="ease-in-sine"
                                  key={shots.id}>
                                  <Box className="main-card">
                                      <Box className="card-img">
                                          <img src={shot.images.normal} alt="cardimg" className="card-img-inner" />{" "}
                                      </Box>
                                      <Box className="card-title"> {shot.title} </Box>
                                      <Box className="card-subtitle">
                                          {" "}
                                          {Date(shot.updated_at).toString().slice(0, 15)}
                                      </Box>
                                      <Box className="card-footer">
                                          <Typography className="loadshot-text"> Load Shot </Typography>
                                          <FontAwesomeIcon
                                              className="shots-icon"
                                              icon={faDribbble}
                                              onClick={onClickUrl(`${shot.html_url}`)}
                                          />
                                      </Box>
                                  </Box>
                              </Box>
                          );
                      })
                    : null}
            </Box>

            <Box className="main-blog">
                <Box className="main-blog-header">
                    <p className="blog-header"> Blogs</p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
                {articles
                    ? articles.map((posts) => {
                          return (
                              <Box
                                  className="main-blog-card"
                                  key={posts.link}
                                  data-aos="fade-up"
                                  data-aos-duration="3000">
                                  <Box className="card-blog-img">
                                      <img className="blog-img" src={posts.thumbnail} alt="blogimg" />
                                  </Box>
                                  <Box className="card-blog-content">
                                      <Box className="blog-content-main">
                                          <p className="blog-content-title">{posts.title}</p>
                                          <Markup
                                              className="blog-content-overview"
                                              content={posts.description}></Markup>
                                      </Box>
                                      <Box className="blog-content-fotter">
                                          <Button
                                              variant="contained"
                                              fontSize="small"
                                              className="readmore-btn"
                                              href={posts.link}
                                              target="_blank">
                                              Read More
                                          </Button>
                                          <p className="blog-fotter-date">{posts.pubDate.slice(0, 10)}</p>
                                      </Box>
                                  </Box>
                              </Box>
                          );
                      })
                    : null}

                <Box>
                    <Box className="main-blog-header">
                        <p className="blog-header"> Upcoming Projects </p>
                        <span>
                            {" "}
                            <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                        </span>
                    </Box>
                    <Box style={{ marginBottom: "1%", marginTop: "1%" }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <h3>MovieHunt </h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    A movie web app where a user can search and watch for any of his favourite movie
                                    trailer or tv show trailer.{" "}
                                    <span style={{ fontWeight: "bolder" }}>New feature comming soon : </span>Where user
                                    can watch movies, add to watchlist and share with friends and family.
                                    <Button
                                        href="https://timepasswebapp.herokuapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit">
                                        Click to view
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <h3>SendCryp </h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    A crypto web app where a user can send any cryptocurrencies around the world on
                                    ethereum blockhain.{" "}
                                    <span style={{ fontWeight: "bolder" }}>New feature comming soon : </span> Where user
                                    can keep track of price change, add to watchlist and receive email notification on
                                    funds received.
                                    <Button
                                        href="https://sendcryp-afebd.web.app/home"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit">
                                        Click to view
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <Box className="main-blog-follow-section">
                    <p className="blog-follow-title"> Want to get latest update of my blogs?</p>
                    <p className="blog-follow-subtitle"> Follow me</p>
                </Box>
                <Box className="blog-follow-icons">
                    <a href="https://twitter.com/tapesh2" target="_blank" rel="noopener noreferrer">
                        <Twitter style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tapesh-patel-276a65a4/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedIn style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    </a>
                    <a href="https://www.instagram.com/tapesh__patel/" target="_blank" rel="noopener noreferrer">
                        <Instagram style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    </a>
                </Box>
            </Box>
        </>
    );
};

export default Projects;
