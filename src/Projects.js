import React from 'react';
import './Random.css';
import NavBar from './NavBar';
import { theme } from './theme';
import { ThemeProvider, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

import placeholder from './sunset.jpg';

function Projects() {
  return (
    // <div className={classes.root}>
    <div className="Random" style={{paddingTop: "140px",}}>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
      <Typography gutterBottom variant="h3" style={{textAlign: "center", paddingBottom: "20px",}}>
        what I've worked on / am currently working on
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs></Grid>
          <Grid item xs={4}>
            <ProjectCard 
              img={placeholder}
              name="Choreo Master"
              time="Fall 2020"
              description="Choreo Master is a video processing pipeline that provides users with feedback on their choreography based on a provided reference video. Final project for COS429: Computer Vision."
              tools="Python, Jupyter notebook"
              path="https://github.com/michelle-w/choreo-master"
              link="GitHub Repository"
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <ProjectCard 
              img={placeholder}
              name="GreySwan"
              time="Summer 2020"
              description="Web application that does some cool monitoring stuff. Open source internship project on the Play Analytics team. Full stack development with focus on frontend."
              tools="React, JavaScript, Java, Jest, Enzyme, Google AppEngine"
              path="https://github.com/googleinterns/step187-2020"
              link="GitHub Repository"
            />
          </Grid>
          <Grid item xs></Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs></Grid>
          <Grid item xs={4}>
            <ProjectCard 
              img={placeholder}
              name="Avatar: The Last Infinite Runner"
              time="Spring 2020"
              description="Infinite runner game based on the TV show 'Avatar: The Last Airbender'. Play as Aang, the last Avatar, and defend against four obstacles by bending the four elements."
              tools="JavaScript, THREE.js graphics library, Blender"
              path="https://github.com/cyu6/avatar-runner"
              link="GitHub Repository"
              // add another link here for playing the actual game. cyu6.github.io/avatar-runner
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <ProjectCard 
              img={placeholder}
              name="Root Config Cleanup"
              time="Summer 2019"
              description="Created a server that cleans up old root configuration files and does cool stuff for the CDPush team within Google Cloud."
              tools="C++, Go, distributed systems, Google infrastructures"
              // path="https://github.com/googleinterns/step187-2020"
              // link="GitHub Repository"
              // instead of Repo, write an article about experience and link it
            />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
