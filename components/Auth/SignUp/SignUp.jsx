import {Typography, Container, Grid, Paper, TextField, Button, Link, Box} from '@material-ui/core';
import React from 'react';
import {useStyles} from "./SignUp.style";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";

export default function SignUp() {
    const classes = useStyles();

    return (
            <main>
                <Grid className={classes.mainGrid}>
                    <Grid item className={classes.container}>
                        <Box>
                            <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    justify="space-between"
                            >
                                <Grid item>
                                    <Typography variant="h1" className={classes.headingSignUp}>
                                        Sign up
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.headingLogIn}>
                                        Already a member? <Link href='' color="inherit" underline="none"
                                                                className={classes.linkStyle}>
                                        Log in
                                    </Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        <Button variant="contained">Default</Button>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        <Button variant="contained">Default</Button>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <div className={classes.line}>
                                        <Typography variant="h2" className={classes.headingLine}>
                                            or
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.headingSignEmail}>
                                        <Button variant="contained" className={classNames(classes.logButton)} classes={{root: classes.root}}>
                                            Sign up with email
                                        </Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </main>
    )
}

