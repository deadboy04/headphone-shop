import React from 'react';
import {useStyles} from './Header.style'
import {AppBar, Container, Toolbar, Typography, Button, useMediaQuery, Dialog, Drawer} from '@material-ui/core';
import {Headset, YouTube, Instagram, Twitter, ShoppingBasket, AccountCircle} from "@material-ui/icons";
import {Link, animateScroll as scroll} from "react-scroll";
import SignUp from "../Auth/SignUp/SignUp";
import classNames from 'classnames';
import SideBasket from "../SideBasket/SideBasket";

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }
    //
    //     setState({...state, [anchor]: open});
    // };
    //

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
                            <Link href="#" variant="body2" color="inherit" className={classes.menuButtons}
                                  onClick={handleClickOpen}>
                                <AccountCircle className={classNames(classes.linkIcons, classes.logInIcon)}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit"
                                  className={classNames(classes.menuButtons, classes.logText)} underline="none"
                                  onClick={handleClickOpen}>
                                Log in
                            </Link>
                            <Dialog open={open} fullScreen>
                                <SignUp/>
                            </Dialog>
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