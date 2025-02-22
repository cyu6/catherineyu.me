import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import name from './name-cropped.svg';
import head from './cat_with_heart.png';
import './App.css';
import { theme } from './theme';

import { ThemeProvider, Typography, List, ListItem } from '@material-ui/core';
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
    backgroundColor: '#6ed0e6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      marginTop: '20%',
      marginBottom: '10%',
      padding: '5%'
    }
  },
  paper: {
    // padding: theme.spacing(2),
    margin: '1%',
    boxShadow: 'none',
    background: 'transparent',
    // paddingBottom: '10%',
  },
  name: {
    // padding: theme.spacing(2),
    margin: '1%',
    boxShadow: 'none',
    background: 'transparent',
    width: '20%',
  },
  nameImage: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '0%'
    },
  },
  imgContainer: {
    maxWidth: 128,
    maxHeight: 128,
    [theme.breakpoints.down('md')]: {
      maxWidth: 0,
      maxHeight: 0
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 100,
      maxHeight: 100
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 128,
      maxHeight: 128
    },
  },
  img: {
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
  secondaryContainer: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 80,
      maxHeight: 80,
      paddingBottom: 20,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 0,
      maxHeight: 0
    },
  },
  icon: {
    color: 'white',
    marginRight: '10px',
  }
});


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <Paper className={classes.name}>
          <img className={classes.nameImage} src={name} alt="Catherine Yu" />
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
            </Grid>
            <Grid item className={classes.imgContainer}>
              <Link className={classes.link} component={RouterLink} to="/random">
                <img className={classes.img} alt="cat with heart" src={head} />
              </Link>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item>
                  <div className={classes.secondaryContainer}>
                    <Link className={classes.link} component={RouterLink} to="/random">
                      <img className={classes.img} alt="cat with heart" src={head} />
                    </Link>
                  </div>
                  <Typography gutterBottom variant="h4">
                    Hi! ☺
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My name is Catherine, and I'm currently a software engineer on the Crypto team at Stripe. I was previously on the Billing Subscriptions team for ~2 years. 
                    At Stripe, I have had the opportunity to 
                    <List sx={{ listStyleType: 'disc'}}>
                      <ListItem sx={{ display: 'list-item' }}>♡ improve the Invoicing and Subscriptions frontend and API user experience </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>♡ redesign coupon and promotion code discounting infrastructure to be more robust </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>♡ lead the migration of 200+ API endpoints to a new internal service </ListItem>
                    </List>
                    and recently, contribute to the <a className={classes.link} href="https://remote.com/blog/crypto-payments" target="_blank" rel="noreferrer">re-launch</a> of our stablecoin payouts product!
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    I graduated from Princeton University as a Mathematics major with a minor in Computer Science.<br/>
                    Previously, I was at Slack on the <a className={classes.link} href="https://slack.engineering/mergers-and-acquisitions-as-a-slack-intern/" target="_blank" rel="noreferrer">Customer Acquisition team</a> and at Google on the CDPush and Play Analytics teams.&nbsp;
                    <Link className={classes.link} component={RouterLink} to="/projects">
                      Learn more about what I've worked on.
                    </Link>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My interests and hobbies include learning street style dance and choreography, traveling, consuming Korean media (music, TV shows, etc.), and reading science fiction and memoirs.  
                    {/* I am working on writing more by blogging (aka, trying to put my thoughts into coherent sentences)&nbsp;
                    <Link className={classes.link} component={RouterLink} to="/blog">
                      which you can read here.
                    </Link> */}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    You can contact me by email at <a href="mailto:catyu6000@gmail.com">catyu6000@gmail.com</a> or check out the links below!
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton className={classes.icon} aria-label="email" disableRipple component="a" href="mailto:catyu6000@gmail.com" target="_blank">
                    <EmailIcon />
                  </IconButton>
                  <IconButton className={classes.icon} aria-label="resume" disableRipple component="a" href="https://drive.google.com/file/d/1dr7A17C_NoEbiZBC9lLW9_KYUZwoWou0/view?usp=sharing" target="_blank">
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
                  <IconButton className={classes.icon} aria-label="instagram" disableRipple component="a" href="https://www.instagram.com/ccdancejournal/" target="_blank">
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
