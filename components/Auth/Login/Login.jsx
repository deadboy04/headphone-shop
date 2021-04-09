import { Typography, Grid, Button, Link, IconButton } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../SignUp/SignUp.style'
import { Close } from '@material-ui/icons'
import SignUp from '../SignUp'

export default function Login() {
  const classes = useStyles()

  return (
    <>
      <IconButton className={classes.closeButton}>
        <Close />
      </IconButton>
      <Grid item className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h1" className={classes.headingSignUp}>
              Log In
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" className={classes.headingLogIn}>
              New to this site?
              <Link
                href="#"
                color="inherit"
                underline="none"
                className={classes.linkStyle}
              >
                &nbsp;Sign Up
              </Link>
            </Typography>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button variant="contained" className={classes.logButton}>
                Default
              </Button>
            </Typography>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button variant="contained" className={classes.logButton}>
                Default
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.line}>
              <Typography variant="h2" className={classes.headingLine}>
                or
              </Typography>
            </div>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button variant="contained" className={classes.logButtonEmail}>
                Log in with email
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
