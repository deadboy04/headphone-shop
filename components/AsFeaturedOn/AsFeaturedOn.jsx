import { Container, Grid, Box, Typography} from '@material-ui/core';
import { useStyles } from './AsFeaturedOn.style'
import TuneIcon from "../../public/TuneIcon";
import EastFlowIcon from "../../public/EastFlowIcon";
import RockIcon from "../../public/RockIcon";
import InstruentalIcon from "../../public/InstruentalIcon";
import WaveIcon from "../../public/WaveIcon";


export default function AsFeaturedOn() {
    const classes = useStyles();

    return (
        <main>
            <Box className={classes.featuredOn}>
                <Container className={classes.allContent}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={0}>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography className={classes.innerItem} style={{padding: 20}}>As Featured On:</Typography> </Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}> <Typography className={classes.innerItem}><TuneIcon/></Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography className={classes.innerItem}><EastFlowIcon/></Typography></Box>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0}>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography className={classes.innerItem}><RockIcon/></Typography></Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography className={classes.innerItem}><InstruentalIcon/></Typography></Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography className={classes.innerItem}><WaveIcon/></Typography></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    )
}