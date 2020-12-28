import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
  media: {
    height: 200,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
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
        </CardActionArea>
        <CardActions>
          {/* TODO: make this dependent on a prop passed in. either an external link or a RouterLink. */}
          <Button size="small" color="primary" href={props.path} target="_blank">
            {props.link}
          </Button>
          {/* <Button size="small" color="primary">
            Link 2
          </Button> */}
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
