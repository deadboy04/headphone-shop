import React, {useRef} from 'react'
import Content from "../Content";
import Header from "../Menu";
import AsFeaturedOn from "../AsFeaturedOn";
import BestSound from "../bestSound";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from 'react-parallax';
import {Typography, Box, Grid} from '@material-ui/core';
const image = 'https://static.wixstatic.com/media/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.jpg/v1/fill/w_1175,h_832,al_c,q_85/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.webp';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import HeadsetIcon from '@material-ui/icons/Headset';

export const useStyles = makeStyles((theme) => ({
    headerSection: {
        width: '100%',
        height: '80vh',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('https://static.wixstatic.com/media/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.jpg/v1/fill/w_1903,h_752,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.webp')`
    },
    infoAboutHP: {
        color: "#FFF",
        height: 770,
    } ,

    gridItems: {
        borderRight: "1px solid rgba(255,255,255, 0.1)",
    },
    mainGridCont: {
        justify: "flex-start",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: 770,
    },
    gridTextFirst: {
        marginLeft: "25%",
        marginTop: "75%",
        width: "250px"
    },
    gridTexSecond: {
        marginLeft: "25%",
        marginTop: "45%",
        width: "250px"
    },
    featuredOn: {
        width: "100%",
    },
    bestSound: {
        width: "100%",
    }
}))

export default function MainContent() {
    const classes = useStyles();
    return (
        <>
                <div className={classes.headerSection}>
                    <Header></Header>
                    <Content></Content>
                </div>
                    <Parallax bgImage={image} strength={500}>
                        <Box className={classes.infoAboutHP}>
                            <Grid container spacing={0} className={classes.mainGridCont}>
                                <Grid item className={classes.gridItems} xs={3}>
                                    <Box className={classes.gridTextFirst}>
                                        <Typography variant="h6">
                                            <p>
                                                <GraphicEqIcon fontSize="large"/><br/>
                                                High Quality <br/>
                                                Sound
                                            </p>
                                        </Typography>
                                        <Typography>
                                            The bass of this model is still quite deep and has a pleasant density.
                                            The bass is now less  quantitatively accentuated.Let your users get to know you.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item className={classes.gridItems} xs={3}>
                                    <Box className={classes.gridTexSecond}>
                                        <Typography variant="h6">

                                            <p>
                                                <BluetoothIcon fontSize="large"/> <br/>
                                                Easy Wireless
                                                 <br/>
                                                Listening
                                            </p>
                                        </Typography>
                                        <Typography>
                                            Bluetooth 5.0 provides a strong grip on both Android and iOS devices.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item className={classes.gridItems} xs={3}>
                                    <Box className={classes.gridTextFirst}>
                                        <Typography variant="h6">
                                            <p>
                                                <FlashOnIcon fontSize="large"/> <br/>
                                                Longer <br/>
                                                Battery Life
                                            </p>
                                        </Typography>
                                        <Typography>
                                            The device's battery is designed for 4 hours without recharging, which is enough for any workout, but hardly enough for a day of use.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item className={classes.gridItems} xs={3}>
                                    <Box className={classes.gridTexSecond}>
                                        <Typography variant="h6">
                                            <p>
                                                <HeadsetIcon fontSize="large"/> <br/>
                                                Sleek <br/>
                                                Updated Design
                                            </p>
                                        </Typography>
                                        <Typography>
                                            Compact, foldable and lightweight, these headphones are perfect for your pace of life. Take them with you in your bag.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Parallax>
                    <AsFeaturedOn className={classes.featuredOn}/>
                    <BestSound className={classes.bestSound} />
        </>
    )
}