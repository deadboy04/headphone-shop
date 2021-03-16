import {Paper, Container, Grid, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    featuredOn: {
        height: 440,
        background: "#000",
        color: "#fff"
    },
    gridElement: {
        textAlign: "center"
    },
    paper: {
        padding: "90px"
    }
}))

export default function AsFeaturedOn() {
    const classes = useStyles();

    return (
        <main>
            <Paper className={classes.featuredOn}>
                <Container >
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}>As Featured On</Box>
                            </Grid>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}> fdsfs
                                </Box>
                            </Grid>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}>item</Box>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}>As Featured On:</Box>
                            </Grid>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}>item</Box>
                            </Grid>
                            <Grid item xs={4} className={classes.gridElement}>
                                <Box className={classes.paper}>item</Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </main>
    )
}