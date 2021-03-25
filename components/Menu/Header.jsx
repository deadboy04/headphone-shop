import {AppBar, Container, Toolbar, Typography, Link, Button } from '@material-ui/core';
import classNames from 'classnames';
import { useStyles } from './Header.style'
import {Headset, YouTube, Instagram, Twitter, ShoppingBasket, AccountCircle} from "@material-ui/icons";

export default function Header() {
    const classes = useStyles();

    return (
            <AppBar className={classes.header}>
                <Container className={classes.flexHead} fixed>
                    <Toolbar className={classes.headerMenu} variant="regular">
                          <Typography variant="h5"  className={classes.title} >
                            <Link href="#" color="inherit" className={classes.menuLink} style={{textDecoration: 'none'}}>
                                <Headset className={classes.headIcon}/> Soundbeam
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuLinks} underline="none">
                                Home
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuLinks} underline="none">
                                Benefits
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classes.menuLinks} underline="none">
                                Reviews
                            </Link>
                        </Typography>
                        <Typography className={classes.title2} >
                            <Link href="#" variant="body2" color="inherit" className={classNames(classes.menuButtons, classes.logText)}>
                                <AccountCircle className={classes.linkIcons}/>
                            </Link>
                            <Link href="#" variant="body2" color="inherit" className={classNames(classes.menuButtons, classes.logText)} underline="none">
                                 Log in
                            </Link>
                            <Button className={classNames(classes.menuButtons, classes.orderButton)} href="#contained-buttons" disableElevation>
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
            </AppBar >
                )
}