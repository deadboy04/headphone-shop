import { Typography, Grid, Button, Link, IconButton } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../SignUp/SignUp.style'
import { Close } from '@material-ui/icons'

export default function Login({ setForm }) {
  const classes = useStyles()
  const handleClickChangeState = () => {
    setForm(0)
  }
  const handleClickChangeStateToLogin = () => {
    setForm(3)
  }

  return (
    <>
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
                onClick={handleClickChangeState}
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
              <Button
                variant="contained"
                className={classes.logButtonEmail}
                onClick={handleClickChangeStateToLogin}
              >
                Log in with email
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
