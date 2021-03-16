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
    first: {

        background: "red",
    },
    second: {
        background: "blue",
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
    }

}))

export default function BestSound() {
    const classes = useStyles();

    return (
        <main>
            <Box className={classes.mainSection}>
                <Grid container spacing={0} className={classes.mainGridCont}>
                    <Grid item className={classes.gridItems} xs={6}>
                        <Box className={classes.gridTextFirst}>

                        </Box>
                    </Grid>
                    <Grid item className={classes.gridItems} xs={6}>
                        <Box className={classes.gridTexSecond}>
                            <Typography variant="h2" className={classNames(classes.textAbout, classes.nameOfModel)}>
                                Music Like You've <br/>
                                Never Heard Before
                            </Typography>
                            <Typography variant="h6" className={classNames(classes.textAbout, classes.aboutExperience)}>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content
                            </Typography>
                            <Typography className={classes.textAbout}>
                                <Button className={classes.buttonOrder} variant="outlined">Order Now</Button>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}
