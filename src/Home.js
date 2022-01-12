import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import name from './name-cropped.svg';
import head from './cat_with_heart.png';
import './App.css';
import { theme } from './theme';

import { ThemeProvider, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import ArticleIcon from '@mui/icons-material/Article';

import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    boxShadow: 'none',
    background: 'transparent',
    paddingBottom: '10%',
  },
  name: {
    padding: theme.spacing(2),
    margin: 'auto',
    boxShadow: 'none',
    background: 'transparent',
  },
  img: {
    width: 128,
    height: 128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  icon: {
    color: 'white',
    marginRight: '10px',
  }
});


export default function Home() {
  const classes = useStyles();

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: '#e498c9',
        midtoneColor: '#a599b5',
        lowlightColor: '#016c84',
        baseColor: '#efc69b',
        speed: 1.20
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef} className={classes.root}>
      <ThemeProvider theme={theme} >
        <Paper className={classes.name}>
          <img src={name} alt="name" width="400px"/>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
            </Grid>
            <Grid item>
              <Link className={classes.link} component={RouterLink} to="/random">
                <img className={classes.img} alt="cat with heart" src={head} />
              </Link>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item>
                  <Typography gutterBottom variant="h4">
                    Hi! &#128522;
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My name is Catherine, and I'm a senior at Princeton University studying Math and Computer Science. 
                    I am generally interested in algorithmic game theory, frontend web development, and blockchain + web3.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    I'm excited to be starting at Stripe in Fall 2022 as a new grad software engineer! 
                    I previously <a className={classes.link} href="https://slack.engineering/mergers-and-acquisitions-as-a-slack-intern/" target="_blank" rel="noreferrer">interned at Slack</a> on the Customer Acquisition team and at Google on the CDPush and Play Analytics teams.&nbsp;
                    <Link className={classes.link} component={RouterLink} to="/projects">
                      Click here to learn about what I've worked on.
                    </Link>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My interests include consuming Korean media (music, TV shows, etc.), reading science fiction and memoirs, learning choreography, and traveling.  
                    I am working on writing more by blogging (aka, trying to put my thoughts into coherent sentences)&nbsp;
                    <Link className={classes.link} component={RouterLink} to="/blog">
                      which you can read here.
                    </Link>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    You can contact me by email at <a href="mailto:catyu6000@gmail.com">catyu6000@gmail.com</a> or check out the links below!
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton className={classes.icon} aria-label="email" disableRipple component="a" href="mailto:catyu6000@gmail.com" target="_blank">
                    <EmailIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="resume" disableRipple component="a" href="https://drive.google.com/file/d/1-pKxRohkDvn1V3igtXox21SAk_xfUxa3/view?usp=sharing" target="_blank">
                    <ArticleIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="linkedin" disableRipple component="a" href="https://www.linkedin.com/in/catyu/" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="github" disableRipple component="a" href="https://github.com/cyu6" target="_blank">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="spotify" disableRipple component="a" href="https://open.spotify.com/playlist/3HFs0XE0EJaSJV7qSniPkX?si=NdbuwTq1SzuYG8iv-xlLSw" target="_blank">
                    <MusicNoteRoundedIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="instagram" disableRipple component="a" href="https://www.instagram.com/ccc_dancejournal/" target="_blank">
                    <InstagramIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
    
  );
}
