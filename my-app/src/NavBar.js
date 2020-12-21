import React from 'react';
import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import logo from './cat_with_heart.png';
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
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="transparent" className={classes.bar}>
                <img id="logo" src={logo} alt="logo" width="50px"/>
                <Toolbar variant="dense" className={classes.center}>
                    <CustomButton variant="text" color="primary" disableRipple className={classes.margin}>
                        about/home
                    </CustomButton>
                    <CustomButton variant="text" color="primary" disableRipple className={classes.margin}>
                        blog/thoughts
                    </CustomButton>
                    <CustomButton variant="text" color="primary" disableRipple className={classes.margin}>
                        projects/work
                    </CustomButton>
                </Toolbar>
                <Divider variant="middle" />
            </AppBar>
            <Toolbar />
        </React.Fragment>        
    );
}

