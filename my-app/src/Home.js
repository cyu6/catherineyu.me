import React, { useState, useEffect, useRef } from 'react';
import name from './name-cropped.svg';
import head from './cat_with_heart.png';
import './App.css';
import { theme } from './theme';
import { ThemeProvider, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
              <img className={classes.img} alt="cat with heart" src={head} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography gutterBottom variant="h4">
                    Hi! &#128522;
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My name is Catherine, and I'm a junior at Princeton University studying Math and Computer Science. Broadly speaking, my goal in life is to "make the world a better place".
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    I will be interning at Slack in Summer 2021, and I previously interned at Google on the CDPush and Play Analytics teams.
                    You can learn about what I've worked on hereeeee. (insert link to page)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    My interests include consuming Korean music and TV shows, reading science fiction and memoirs, and learning choreography. 
                    I am working on writing more by blogging (aka, trying to put my thoughts into coherent sentences), which you can read hereeee.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Feel free to reach out or check out the links below!
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Icons go here
                  </Typography>
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
