import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { Markup } from "interweave";
import Aos from "aos";

import "../Pages/css/project.css";
import "../../../node_modules/aos/dist/aos.css";

import { Facebook, Instagram, LinkedIn, Twitter, ArrowUpward } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    const [articles, setArticles] = useState();
    const [shots, setShots] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getDribbleShots = async () => {
            // const dribbleAccessToken = "35970e185ee35ce074678b7d2b33b9fd72a79b60bcd37b6c82491d6827657326";
            const dribbleAccessToken = `${process.env.REACT_APP_DRIBBBLE_ACCESS_TOKEN}`;
            const dribbblePage = 1;
            const SHOTS_PER_PAGE = 10;
            const dribbleapi = `https://api.dribbble.com/v2/user/shots?access_token=${dribbleAccessToken}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`;

            const dResponse = await fetch(dribbleapi);
            try {
                const dResponseJson = await dResponse.json();
                const dshots = dResponseJson;
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
                // console.log(data); //here you are getting the data
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
                <ArrowUpward style={{ display: visible ? "inline-block" : "none" }} className="arrowicon2" onClick={scrollToTop} />
            </div>
            <Box className="main-project-section">
                {shots
                    ? shots.map((shot) => {
                          return (
                              <Box className="project-section" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                  <Box className="main-card">
                                      <Box className="card-img">
                                          <img src={shot.images.normal} alt="cardimg" className="card-img-inner" />{" "}
                                      </Box>
                                      <Box className="card-title"> {shot.title} </Box>
                                      <Box className="card-subtitle"> {Date(shot.updated_at).toString().slice(0, 15)}</Box>
                                      <Box className="card-footer">
                                          <Typography className="loadshot-text"> Load Shot </Typography>
                                          <FontAwesomeIcon className="shots-icon" icon={faDribbble} onClick={onClickUrl(`${shot.html_url}`)} />
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
                              <Box className="main-blog-card" key={posts.link} data-aos="fade-up" data-aos-duration="3000">
                                  <Box className="card-blog-img">
                                      <img className="blog-img" src={posts.thumbnail} alt="blogimg" />
                                  </Box>
                                  <Box className="card-blog-content">
                                      <Box className="blog-content-main">
                                          <p className="blog-content-title">{posts.title}</p>
                                          <Markup className="blog-content-overview" content={posts.description}></Markup>
                                      </Box>
                                      <Box className="blog-content-fotter">
                                          <Button variant="contained" fontSize="small" className="readmore-btn" href={posts.link} target="_blank">
                                              Read More
                                          </Button>
                                          <p className="blog-fotter-date">{posts.pubDate.slice(0, 10)}</p>
                                      </Box>
                                  </Box>
                              </Box>
                          );
                      })
                    : null}

                <Box className="main-blog-follow-section">
                    <p className="blog-follow-title"> Want to get latest update of my blogs?</p>
                    <p className="blog-follow-subtitle"> Follow me</p>
                </Box>
                <Box className="blog-follow-icons">
                    <Facebook style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    <Twitter style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    <LinkedIn style={{ fontSize: "2vw ", color: "#FE4747" }} />
                    <Instagram style={{ fontSize: "2vw ", color: "#FE4747" }} />
                </Box>
            </Box>
        </>
    );
};

export default Projects;
