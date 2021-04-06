import {
    Typography,
    Grid,
    Button,
    Link,
    IconButton,
    Dialog,
} from '@material-ui/core';
import React from 'react';
import {useStyles} from './SignUp.style';
import classNames from 'classnames';
import {Close} from '@material-ui/icons';
import Login from '../Login/Login'

// export default function SignUp({setOpen}) {
//     const classes = useStyles();
//     const [open, setOpenLogin] = React.useState(false);
//
//     const handleClickOpenLogin = () => {
//         setOpenLogin(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
export default function SignUp({setOpen}) {
    const classes = useStyles();

    const [open, setOpenLogin] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenLogin = () => {
        setOpenLogin(true);
    };


    return (
            <main>
                <Grid className={classes.mainGrid}>
                    <IconButton onClick={handleClose} className={classes.closeButton}>
                        <Close/>
                    </IconButton>
                    <Grid item className={classes.container}>
                        <Grid
                                container
                                direction='column'
                                alignItems='center'
                        >
                            <Grid item>
                                <Typography variant='h1' className={classes.headingSignUp}>
                                    Sign up
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h2' className={classes.headingLogIn}>
                                    Already a member?
                                    <Link href='#' color='inherit' underline='none'
                                          className={classes.linkStyle} onClick={handleClickOpenLogin}>
                                        &nbsp;Log in
                                    </Link>
                                    <Dialog fullScreen open={open}>
                                        <Login setOpen={setOpenLogin}/>
                                    </Dialog>
                                </Typography>
                            </Grid>
                            <Grid item className={classes.heading}>
                                <Typography variant='h2'>
                                    <Button variant='contained' className={classes.logButton}>Default</Button>
                                </Typography>
                            </Grid>
                            <Grid item className={classes.heading}>
                                <Typography variant='h2'>
                                    <Button variant='contained' className={classes.logButton}>Default</Button>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <div className={classes.line}>
                                    <Typography variant='h2' className={classes.headingLine}>
                                        or
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item className={classes.heading}>
                                <Typography variant='h2'>
                                    <Button variant='contained' className={classes.logButtonEmail}>
                                        Sign up with email
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
    )
}

