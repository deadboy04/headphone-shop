import {Typography, Grid, Button, TextField} from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import classNames from 'classnames';

export const useStyles = makeStyles((theme) => ({

    emailMainGrid: {
        height: 240,
        width: '100%',
        background: '#2D2D2D',
        margin: "auto",
    },
    boxGrid: {
        width: 655,
        height: 128,
        marginLeft: "auto",
        marginRight: "auto",
    },
        stayConnected: {
        color: "#FFF",
        letterSpacing: '0.02em',
        marginLeft: 40,
        fontSize: 19,
    },
    emailField: {
        width: 263,
        height: 39,
        marginLeft: 72,
        color: '#FFF !important',
    },
    emailText: {
        marginLeft: 72,
        font: 'var(--fntlbl,var(--font_8))',
        lineHeight: 1,
        marginBottom: 7,
        color: '#FFF !important',
    },
    subscribeButton: {
        padding: 0,
        borderRadius: 0,
        background: "#CAAF8B",
        boxShadow: "none",
        width: 111,
        height: 40,
        color: "#000",
        fontSize: 12,
        marginRight: 18,
        textTransform: "capitalize",
        font: 'var(--fnt,var(--font_5))',
        '&:hover': {
            background: "#FFF",
        },
    },

}))
const CssTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "solid 1px #CAAF8B",
                borderRadius: 0,
                color: '#FFF !important',

            },
            "&:hover fieldset": {
                border: "solid 3px #CAAF8B",
                borderRadius: 0,
                color: '#FFF !important',

            },
            "&.Mui-focused fieldset": {
                border: "solid 3px #CAAF8B",
                borderRadius: 0,
                color: '#FFF !important',
            }
        }
    }
})(TextField);


export default function EmailDistribution() {
    const classes = useStyles();

    return (
        <main>
            <Grid container className={classes.emailMainGrid}>
                <Grid item container direction="row" direction="row" justify="center" alignItems="flex-end" className={classes.boxGrid}>
                        <Grid item className={classNames(classes.gridItem, classes.firstGrid)}>
                            <Typography className={classes.stayConnected}>Stay Connected</Typography>
                        </Grid>
                        <Grid item xs container direction="column" className={classNames(classes.gridItem, classes.secondGrid)}>
                            <Typography className={classes.emailText} variant="h2">Email*</Typography>
                            <CssTextField id="filled-email-input" type="email" name="email" autoComplete="email" variant="outlined" color="primary" size="small" id="custom-css-outlined-input" className={classes.emailField}/>
                        </Grid>
                        <Grid item className={classNames(classes.gridItem, classes.thirdGrid)}>
                            <Button variant="contained" color="primary" className={classes.subscribeButton}>Subscribe</Button>
                        </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

