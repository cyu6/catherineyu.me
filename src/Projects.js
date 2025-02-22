import React from 'react';
import './Random.css';
import NavBar from './NavBar';
import { theme } from './theme';
import { ThemeProvider, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

// import placeholder from "./images/sunset.jpg";
import salesforce from "./images/slack_internship.jpg";
import digitalhubris from "./images/digital_hubris.png";
import choreomaster from "./images/blackpink_output.png";
import greyswan from "./images/step_internship.png";
import avatar from "./images/avatar.png";
import rootconfig from "./images/ep_internship.jpg";
import placeholder from "./images/sunset.jpg";

function Projects() {
  return (
    // <div className={classes.root}>
    <div className="Random" style={{paddingTop: "140px",}}>
      <ThemeProvider theme={theme}>
        <NavBar />
        
        <Typography gutterBottom variant="h4" style={{textAlign: "center", paddingBottom: "20px",}}>
          some cool things I've worked on 
          <br />
          (better on web)
        </Typography>


        {/* TODO: tags / filtering by year and tag */}

        <div>
        
        {/* TODO: dynamic creation of cards, don't hardcode the grid */}

          <Grid container spacing={2}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                name="KoKo Land"
                time="Spring 2022"
                description="Led KoKo Pops, Princeton's only K-pop dance company, as Assistant Artistic Director. Produced a 2.5 hour long showcase with 20+ dance covers and student videos."
                path="https://www.youtube.com/playlist?list=PLJxQ234oAm2Z0g1xmjQae1Y1YzheGT_sR"
                link="Watch the show (YouTube)"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                name="Algorand (Senior Thesis)"
                time="Spring 2022"
                description="Researched a potential cheating mechanism in a proof of stake blockchain (Algorand). Created and ran a simulation that models the strategy and showed that cheating rewards are necessarily bounded, with the overall goal of supporting proof of stake blockchains."
                path="https://doi.org/10.48550/arXiv.2207.07996"
                link="Paper 1 (arxiv)"
                path2="https://doi.org/10.48550/arXiv.2406.15282"
                link2="Paper 2 (arxiv)"
              />
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={salesforce}
                name="Salesforce Day One Web Campaign"
                time="Summer 2021 (Frontend Software Engineering Intern)"
                description="Created landing page and updated web assets for day one of the Salesforce acquisition of Slack which garnered 2,350 views within 3 days of launch. Main project on the Customer Acquisition team."
                tools="XHP/Hacklang, JavaScript, LESS/CSS"
                path="https://slack.engineering/mergers-and-acquisitions-as-a-slack-intern/"
                link="Landing page"
                path2=""
                link2="LinkedIn post"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={digitalhubris}
                name="Digital Hubris"
                time="Spring 2021"
                description="Short animation that explores the concept of transformations in digital media and art through the Greek myth of Icarus. Final project for STC 209B: Transformations in Engineering and the Arts."
                tools="Blender, Unity"
                path="https://vimeo.com/541475491"
                link="Watch the video"
                path2="https://cst.princeton.edu/teaching-learning/stcegrmus-209-transformations-engineering-and-arts"
                link2="More about the course (Spring '21)"
              />
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={choreomaster}
                name="Choreo Master"
                time="Fall 2020"
                description="Choreo Master is a video processing pipeline that provides users with actionable feedback on their choreography by comparing their body movements to a user-provided reference video. Final project for COS429: Computer Vision."
                tools="Python, Jupyter notebook"
                path="https://github.com/michelle-w/choreo-master"
                link="GitHub Repository"
                path2="https://drive.google.com/file/d/116eIZNgyG5-JrbLfggvn4U5zmKJNlJFt/view?usp=sharing"
                link2="Project writeup paper"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={greyswan}
                name="GreySwan"
                time="Summer 2020 (STEP Intern)"
                description="Designed and developed alert management and configuration features for an internal metrics monitoring tool used by the Play Analytics team at Google. Created an open source web application prototype; full stack development with focus on frontend."
                tools="React, JavaScript, Java, Material UI, Jest, Enzyme, Google AppEngine"
                path="https://github.com/googleinterns/step187-2020"
                link="GitHub Repository"
                path2="https://www.figma.com/file/Uj6zHk4pQZ9TBHVWBsnooG/Capstone-UI"
                link2="Figma file"
              />
            </Grid>
            <Grid item xs></Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={avatar}
                name="Avatar: The Last Infinite Runner"
                time="Spring 2020"
                description="Infinite runner game based on the TV show 'Avatar: The Last Airbender'. Play as Aang, the last Avatar, and defend against four obstacles by bending the four elements. Final project for COS 426: Computer Graphics."
                tools="JavaScript, THREE.js graphics library, Blender"
                path="https://github.com/cyu6/avatar-runner"
                link="GitHub Repository"
                path2="https://cyu6.github.io/avatar-runner"
                link2="Play the game"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <ProjectCard 
                img={rootconfig}
                name="Root Config Cleanup"
                time="Summer 2019 (Engineering Practicum Intern)"
                description="Implemented a server that routinely checks root configuration files and deletes expired and unused files to free up storage for the CDPush (Config and Data Push) team within Google Cloud."
                tools="C++, SQL, Go, file systems, distributed systems, Google infrastructures"
                // path=""
                // link="Reflection"
                // instead of Repo, write an article about experience and link it
              />
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Projects;
