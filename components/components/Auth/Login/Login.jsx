import {
  Typography,
  Grid,
  Button,
  Link,
  IconButton,
  Dialog,
} from '@material-ui/core'
import React from 'react'
import { useStyles } from '../SignUp/SignUp.style'
import SignUp from '../SignUp/SignUp'
import { Close } from '@material-ui/icons'

import { withStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

export default function Login({ setOpen }) {
  const classes = useStyles()
  const router = useRouter()
  const [open] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    router.push(<SignUp />)
    setOpen(true)
  }

  return (
    <main>
      <Grid className={classes.mainGrid}>
        <IconButton onClick={handleClose} className={classes.closeButton}>
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
                  onClick={handleClickOpen}
                >
                  &nbsp;Sign Up
                </Link>
                <Dialog fullScreen open={open}>
                  <SignUp setOpen={setOpen} />
                </Dialog>
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
      </Grid>
    </main>
  )
}
