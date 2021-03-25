import {Box, Typography, Container, Grid, Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import classNames from "classnames";

export const useStyles = makeStyles((theme) => ({
    mainSection: {
        height: 600,
        background: "#E3CBAA",
        color: '#FFF'
    },
    gridTextFirst: {
        maxWidth: 450,
        marginLeft: "25%",
    },
    gridTextSecond: {
        marginTop: "15%"
    },
    buttonOrder: {
        borderRadius: "0",
        borderColor: "#FFF",
        color: "#FFF",
        textTransform: "capitalize",
        width: 170,
        height: 50,
        '&:hover': {
            transition: "all 0.3s ease",
            background: "#FFF",
            color: "#AC9E76"
        },
    },
    textAbout: {
        paddingBottom: 30,
    },
    gridItems: {
        marginBlock: "10%",
    },
    nameOfModel: {
        fontSize: 50,
    },
    aboutExperience: {
        fontSize: 15,
        maxWidth: 450,
        lineHeight: 2
    }

}))

export default function BestSound() {
    const classes = useStyles();

    return (
        <main>
            <Box className={classes.mainSection}>
                <Grid container spacing={0} className={classes.mainGridCont}>
                    <Grid item className={classes.gridItems} xs={6}>
                        <Container className={classes.gridTextFirst}>
                            <img src="https://static.wixstatic.com/media/82fcd3_7b50ff02a3dd411fac2e6ced36f2aed0~mv2.png/v1/fill/w_488,h_267,al_c,q_85,usm_0.66_1.00_0.01/Model_Strip_Single.webp"/>
                        </Container>
                    </Grid>
                    <Grid item className={classes.gridItems} xs={6}>
                        <Container className={classes.gridTexSecond}>
                            <Typography variant="h3" className={classNames(classes.textAbout, classes.nameOfModel)}>
                                Music Like You've <br/>
                                Never Heard Before
                            </Typography>
                            <Typography variant="h2" className={classNames(classes.textAbout, classes.aboutExperience)}>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content
                            </Typography>
                            <Typography className={classes.textAbout}>
                                <Button className={classes.buttonOrder} variant="outlined">Order Now</Button>
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}
