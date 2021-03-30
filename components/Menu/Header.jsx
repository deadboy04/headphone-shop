import React from 'react';
import {AppBar, Container, Toolbar, Typography, Button} from '@material-ui/core';
import {Link, animateScroll as scroll} from "react-scroll";
import {Headset, YouTube, Instagram, Twitter, ShoppingBasket, AccountCircle} from "@material-ui/icons";
import classNames from 'classnames';
import {useStyles} from './Header.style'


export default function Header() {
    const classes = useStyles();

    return (
            <AppBar className={classes.header}>
                <Container className={classes.flexHead} fixed>
                    <Toolbar className={classes.headerMenu} variant="regular">
                        <Typography variant="h5" className={classes.title}>
                            <Link href="#" color="inherit" className={classes.menuLink}
                                  underline="none">
                                <Headset className={classes.headIcon}/> Soundbeam
                            </Link>
                            <Link href="#home" variant="body2" color="inherit" to="home" spy={true} smooth={true}
                                  offset={-70} duration={800} className={classes.menuLinks} underline="none">
                                Home
                            </Link>
                            <Link href="#content" variant="body2" color="inherit" to="content" spy={true} smooth={true}
                                  offset={-70} duration={800} className={classes.menuLinks} underline="none">
                                Benefits
                            </Link>
                            <Link href="#reviews" variant="body2" color="inherit" to="reviews" spy={true} smooth={true}
                                  offset={-70} duration={800} className={classes.menuLinks} underline="none">
                                Reviews
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}>
                                <AccountCircle className={classNames(classes.linkIcons, classes.logInIcon)}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit"
                                  className={classNames(classes.menuButtons, classes.logText)} underline="none">
                                Log in
                            </Link>
                            <Button className={classNames(classes.menuButtons, classes.orderButton)}
                                    href="#contained-buttons" disableElevation>
                                Order Now
                            </Button>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}>
                                <Instagram className={classes.linkIcons}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}>
                                <YouTube className={classes.linkIcons}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}>
                                <Twitter className={classes.linkIcons}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}>
                                <ShoppingBasket className={classes.linkIcons}/>
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}