import React, {useState} from 'react'
import {useStyles} from './Header.style'
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Dialog,
    Grid,
    Button,
    Drawer,
    IconButton,
    Box,
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
import {Link} from 'react-scroll'
import Order from '../Order/Order'
import SignUp from '../Auth/SignUp/SignUp'
import Login from '../Auth/Login/Login'
import SignUpWithEmail from '../Auth/SignUp/SignUpWithEmail'
import LoginWithEmail from '../Auth/Login/LoginWithEmail'
import classNames from 'classnames'
import Products from '../Product/Products'
import ProductBasket from "../Product/ProductBasket";
import clsx from 'clsx'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const { product } = Products

    const classes = useStyles()

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if(exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x ))
            console.log( product.paragraph, ' уже корзине')
            console.log(cartItems)
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
            console.log( product.paragraph, ' добавлен в корзину')
            console.log(cartItems)
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems(cartItems.map((x) => x.id === product.id ?  {...exist, qty: exist.qty - 1} : x ))
        }
    }

    const handleClickOpen = () => {
        setOpen(true)
    }
    // const handleClickClose = () => {
    //     setOpen(false)
    // }
    const openOrder = () => {
        setForm(4)
    }

    const [state, setState] = React.useState({
        right: false,
    })
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor, onAdd={onAdd}, onRemove={onRemove}) => (
            <div
                    className={clsx(classes.listStyles, {
                        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                    })}
                    role="presentation"
            >
                <Container className={classes.firstList}>
                    <Box className={classes.basketTitle}>
                        <IconButton onClick={toggleDrawer(anchor, false)} className={classes.chevronIcon}>
                            {toggleDrawer === false ? <ChevronLeft/> : <ChevronRight/>}
                        </IconButton>
                        <span className={classes.cartTitle}>
                         Cart
                    </span>
                    </Box>
                </Container>
                <Container className={classes.secondList}>
                    {cartItems.length === 0 && <Typography className={classes.cartItem}>Cart is empty</Typography>}
                    {cartItems.map((item) => (
                            <div key={item.id}>
                                <ProductBasket onAdd={onAdd} product={product} onRemove={onRemove}/>
                                {/*<Typography onAdd={onAdd} product={product}>dasdasdas</Typography>*/}
                            </div>
                    ))}
                </Container>
                <Container className={classes.thirdList}>
                    {cartItems.length === 0 && <Typography className={classes.cartItem}/>}
                </Container>
            </div>
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
                                <Headset className={classes.headIcon}/> Soundbeam
                            </Link>
                            <Link
                                    href="#"
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
                                    href="#"
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
                                    href="#"
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
                                    {form === 0 ? (
                                            <SignUp setForm={setForm}/>
                                    ) : form === 1 ? (
                                            <Login setForm={setForm}/>
                                    ) : form === 2 ? (
                                            <SignUpWithEmail setForm={setForm}/>
                                    ) : form === 3 ? (
                                            <LoginWithEmail setForm={setForm}/>
                                    ) : (
                                            <Order product={product} setForm={setForm} onAdd={onAdd}/>
                                    )}
                                </Grid>
                            </Dialog>
                            <Button
                                    className={classNames(classes.menuButtons, classes.orderButton)}
                                    href="#contained-buttons"
                                    disableElevation
                                    onClick={() => {
                                        openOrder();
                                        handleClickOpen();
                                    }}
                            >
                                Order Now
                            </Button>
                            <Link
                                    href="#"
                                    variant="body2"
                                    color="inherit"
                                    className={classes.menuButtons}
                            >
                                <Instagram className={classes.linkIcons}/>
                            </Link>
                            <Link
                                    href="#"
                                    variant="body2"
                                    color="inherit"
                                    className={classes.menuButtons}
                            >
                                <YouTube className={classes.linkIcons}/>
                            </Link>
                            <Link
                                    href="#"
                                    variant="body2"
                                    color="inherit"
                                    className={classes.menuButtons}
                            >
                                <Twitter className={classes.linkIcons}/>
                            </Link>
                            {['right'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Link
                                                onClick={toggleDrawer(anchor, true)}
                                                href="#"
                                                variant="body2"
                                                color="inherit"
                                                className={classes.menuButtons}
                                        >
                                            <ShoppingBasket className={classes.linkIcons}/>
                                        </Link>
                                        <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                            ))}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}
