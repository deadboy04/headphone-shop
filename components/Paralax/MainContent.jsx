import Content from "../Content";
import Header from "../Menu";
import Reviews from "../Reviews";
import AsFeaturedOn from "../AsFeaturedOn";
import BestSound from "../BestSound";
import EmailDistribution from "../EmailDistribution";
import Footer from "../Footer";
import OtherLinks from "../OtherLinks";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax } from 'react-parallax';
import { Typography, Box, Grid } from '@material-ui/core';
import { Headset, FlashOn, Bluetooth, GraphicEq} from "@material-ui/icons";
const image = 'https://static.wixstatic.com/media/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.jpg/v1/fill/w_1175,h_832,al_c,q_85/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.webp';
const image2 = 'https://static.wixstatic.com/media/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.jpg/v1/fill/w_1432,h_866,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.webp';


export const useStyles = makeStyles((theme) => ({
    headerSection: {
        width: '100%',
        height: '752px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('https://static.wixstatic.com/media/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.jpg/v1/fill/w_1903,h_752,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.webp')`
    },
    infoAboutHP: {
        color: '#FFF',
        height: 770,
        width: "100%",
    } ,
    mainGridCont: {
        height: 770,
    },
    gridItems: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRight: '1px solid rgba(0,0,0,0)',
        backgroundClip: 'content-box',
},
    gridTextFirst: {
        marginTop: '70%',
        width: '200px',
        margin: 'auto',
    },
    gridTexSecond: {
        marginTop: '45%',
        width: '200px',
        margin: 'auto',
    },
    featuredOn: {
        width: '100%',
    },
    bestSound: {
        width: '100%',
    },
    reviews: {
        width: '100%',
        height: 640
    },
    parallaxImage: {
        width: '100%',
        height: 570,
        backgroundSize: 'cover',
    },
    innerColor: {
        width: '100%',
        height: 570,
        background: 'rgba(208, 180, 143, 0.3)',
    },
    emailDistribution: {
        width: '100%',
        height: 240,
    },
    otherLinks: {
        width: '100%',
        height: 230,
    },
    footer: {
        width: '100%',
        height: 66,
    },

}))

export default function MainContent() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.headerSection}>
                <Header></Header>
                <Content></Content>
            </div>
            <Parallax bgImage={image} strength={600} className={classes.infoAboutHP}>
                <Box>
                    <Grid container spacing={0} className={classes.mainGridCont}>
                        <Grid item className={classes.gridItems} xs={3}>
                            <Box className={classes.gridTextFirst}>
                                <Typography variant="h6">
                                    <p>
                                        <GraphicEq fontSize="large"/><br/>
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
                                        <Bluetooth fontSize="large"/> <br/>
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
                                        <FlashOn fontSize="large"/> <br/>
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
                                        <Headset fontSize="large"/> <br/>
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
            <Reviews classname={classes.reviews}/>
            <Parallax bgImage={image2} strength={500} className={classes.parallaxImage}>
                <Box className={classes.innerColor}/>
            </Parallax>
            <EmailDistribution className={classes.emailDistribution}/>
            <OtherLinks className={classes.otherLinks}/>
            <Footer className={classes.footer}/>
        </>
    )
}