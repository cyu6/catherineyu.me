import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// use when each project has its own link
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginBottom: '50px',
  },
  mainCard: {
    pointerEvents: null,
  },
  media: {
    height: 250,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        {/* <CardActionArea className={classes.mainCard}> */}
          <CardMedia
            component="img"
            className={classes.media}
            image={props.img}
            title="placeholder"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              {props.time}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              {props.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.tools}
            </Typography>
          </CardContent>
        {/* </CardActionArea> */}
        <CardActions>
          {/* TODO: make this dependent on a prop passed in. either an external link or a RouterLink. */}
          {/* TODO: follow up on ^. pass in an array of Url/Link/etc. objects and use for each to turn them into buttons */}
          <Button size="small" color="primary" href={props.path} target="_blank">
            {props.link}
          </Button>
          {/* temporary fix for second link */}
          {props.path2 ? 
            <Button size="small" color="primary" href={props.path2} target="_blank">
              {props.link2}
            </Button> : null}
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
