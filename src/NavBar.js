import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import name from './name-cropped.svg';
import './App.css';

const CustomButton = withStyles({
    root: {
    //   boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
    //   padding: '6px 12px',
    //   border: '1px solid',
    //   lineHeight: 1.5,
    //   backgroundColor: '#0063cc',
    //   borderColor: '#0063cc',
      '&:hover': {
        backgroundColor: '#ffffff',
        // borderColor: '#0062cc',
        boxShadow: 'none',
        textDecoration: 'underline',
      },
    //   '&:active': {
    //     boxShadow: 'none',
    //     backgroundColor: '#0062cc',
    //     borderColor: '#005cbf',
    //   },
    //   '&:focus': {
    //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    //   },
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        boxShadow: 'none',
    },
    offset: theme.mixins.toolbar,
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="absolute" color="transparent" className={classes.bar}>
                <img id="logo" src={name} alt="logo" width="150px"/>
                <Toolbar variant="dense" className={classes.center}>
                    <CustomButton variant="text" color="primary" disableRipple className={classes.margin} component={RouterLink} to="/">
                        about/home
                    </CustomButton>
                    <CustomButton variant="text" color="primary" disableRipple className={classes.margin} component={RouterLink} to="/projects">
                        projects/work
                    </CustomButton>
                    {/* <CustomButton variant="text" color="primary" disableRipple className={classes.margin} component={RouterLink} to="/blog">
                        blog/thoughts
                    </CustomButton> */}
                </Toolbar>
                <Divider variant="middle" />
            </AppBar>
            {/* <div className={classes.offset} /> */}
        </React.Fragment>        
    );
}

