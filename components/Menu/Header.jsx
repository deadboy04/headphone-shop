import React, { useState } from 'react'
import { useStyles } from './Header.style'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Dialog,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  Drawer,
  IconButton,
} from '@material-ui/core'
import {
  Headset,
  AccountCircle,
  Instagram,
  YouTube,
  Twitter,
  ShoppingBasket,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons'
import { Link, animateScroll as scroll } from 'react-scroll'
import SignUp from '../Auth/SignUp/SignUp'
import Login from '../Auth/Login/Login'
import SignUpWithEmail from '../Auth/SignUp/SignUpWithEmail'
import LoginWithEmail from '../Auth/Login/LoginWithEmail'
import classNames from 'classnames'
import clsx from 'clsx'

export default function Header() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(0)
  const [openBasket, setOpenBasket] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }

  const handleDrawerOpen = () => {
    openBasket(true)
  }

  const handleDrawerClose = () => {
    setOpenBasket(false)
  }

  // const [state, setState] = React.useState({
  //     right: false,
  // })
  //
  // const toggleDrawer = (anchor, open) => (event) => {
  //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //         return;
  //     }
  //
  //     setState({ ...state, [anchor]: open });
  // };

  const basket = (theme) => (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.listStyles,
      }}
    >
      <List>
        <ListItem>
          {' '}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
          Cart
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>Total</ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>View Cart</ListItem>
      </List>
    </Drawer>
    // <div
    //         className={clsx(classes.list, {
    //             [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    //         })}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    // >
    //     <List>
    //         <ListItem>Cart</ListItem>
    //     </List>
    //     <Divider />
    //     <List>
    //         <ListItem>Total</ListItem>
    //     </List>
    //     <Divider />
    //     <List>
    //         <ListItem>View Cart</ListItem>
    //     </List>
    // </div>
  )

  return (
    <AppBar className={classes.header}>
      <Container className={classes.flexHead} fixed>
        <Toolbar className={classes.headerMenu} variant="regular">
          <Typography variant="h5" className={classes.title}>
            <Link
              href="#"
              color="inherit"
              className={classes.menuLink}
              underline="none"
            >
              <Headset className={classes.headIcon} /> Soundbeam
            </Link>
            <Link
              href="#home"
              variant="body2"
              color="inherit"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={classes.menuLinks}
              underline="none"
            >
              Home
            </Link>
            <Link
              href="#content"
              variant="body2"
              color="inherit"
              to="content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={classes.menuLinks}
              underline="none"
            >
              Benefits
            </Link>
            <Link
              href="#reviews"
              variant="body2"
              color="inherit"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={classes.menuLinks}
              underline="none"
            >
              Reviews
            </Link>
          </Typography>
          <Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classes.menuButtons}
              onClick={handleClickOpen}
            >
              <AccountCircle
                className={classNames(classes.linkIcons, classes.logInIcon)}
              />
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classNames(classes.menuButtons, classes.logText)}
              underline="none"
              onClick={handleClickOpen}
            >
              Log in
            </Link>
            <Dialog open={open} fullScreen>
              <Grid className={classes.mainGrid}>
                {form === 1 ? (
                  <SignUp setForm={setForm} />
                ) : form === 2 ? (
                  <Login setForm={setForm} />
                ) : form === 3 ? (
                  <SignUpWithEmail setForm={setForm} />
                ) : (
                  <LoginWithEmail setForm={setForm} />
                )}
              </Grid>
            </Dialog>
            <Button
              className={classNames(classes.menuButtons, classes.orderButton)}
              href="#contained-buttons"
              disableElevation
            >
              Order Now
            </Button>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classes.menuButtons}
            >
              <Instagram className={classes.linkIcons} />
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classes.menuButtons}
            >
              <YouTube className={classes.linkIcons} />
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classes.menuButtons}
            >
              <Twitter className={classes.linkIcons} />
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              className={classes.menuButtons}
              onClick={handleDrawerOpen}
            >
              {basket}
              <ShoppingBasket className={classes.linkIcons} />
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
