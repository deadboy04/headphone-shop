import {Typography, Grid, Link, Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    allContent: {
        background: '#ECECEC',
    },
    mainGrid: {
        paddingTop: 35
    },
    linksText: {
        textAlign: 'center',
        textTransform: "uppercase",
        color: '#2D2D2D',
        font: 'var(--font_8)',
        letterSpacing: '0.02em',
        lineHeight: '2em',
        textDecoration: 'none',
        borderBottom: 'none',
        '&:hover': {
            textDecoration: 'none',
            borderBottom: 'none',
        },
    },
    mainContainer: {
        maxWidth: 1200,
        height: 230,
    },

}))

export default function OtherLinks() {
    const classes = useStyles();

    return (
        <main className={classes.allContent}>
            <Container className={classes.mainContainer}>
                <Grid container direction="column" className={classes.mainGrid}>
                    <Grid container item>
                        <Grid item xs={4} justify="flex-start">
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    HOME
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} justify="center">
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    SHIPPING & RETURNS
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} justify="flex-end">
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    Instagram
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item >
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    BENEFITS
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    Store Policy
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    YOUTUBE
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item >
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    REVIEWS
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    PAYMENT METHODS
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    Twitter
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.linksText} variant="h2">
                                <Link rel="stylesheet" href="" color="inherit" underline="none">
                                    Faq
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

