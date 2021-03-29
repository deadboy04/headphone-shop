import {Typography, Container, Grid, Paper, TextField, Button, Link} from '@material-ui/core';
import React from 'react';
// import {useRouter} from 'next/router';
// import {useMutation} from '@apollo/client';
import {makeStyles} from "@material-ui/core/styles";
// import clsx from 'clsx';
// import {useFormik} from 'formik';
// import {Formik} from 'formik';
// import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        height: '1770',
    },
    formPaper: {},
    headingSignUp: {
        fontSize: 48,
        font: 'var(--ttlFnt,var(--font_2))',
        lineHeight: 48,
    },
    headingLogIn: {}
}))

export default function SignUp() {

    return (
            <main>
                <Grid className={classes.mainGrid}>
                    <Grid item className={classes.container}>
                        <Paper className={classes.formPaper} elevation={1} square>
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
                                        Already a member? <Link href=''>Log in</Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        Google
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        Google
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        or
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" className={classes.heading}>
                                        Sign up with email
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
    )
}

