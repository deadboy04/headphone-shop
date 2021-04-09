import { Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../SignUp/SignUp.style'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

export default function AuthLayout() {
  const classes = useStyles()
  const [children] = React.useState(SignUp)

  return (
    <main>
      <Grid className={classes.mainGrid}> {children} </Grid>
    </main>
  )
}
