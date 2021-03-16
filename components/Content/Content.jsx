import {Box, Typography, Container, Grid, Button} from '@material-ui/core';
import classNames from "classnames";

import { useStyles} from "./Content.style";

export default function Content() {
    const classes = useStyles();
    return (
        <main>
            <Box className={classes.homePart}>
                <Container>
                    <Grid container >
                        <Grid item>
                            <div className={classes.blockAbout}>
                                <Typography variant="h6" className={classNames(classes.textAbout, classes.nameOfModel)}>
                                    Soundbeam ERD - 3083
                                </Typography>
                                <Typography variant="h2" className={classNames(classes.textAbout, classes.aboutExperience)}>
                                    reinventing <br/>
                                    sound experience
                                </Typography>
                                <Typography className={classes.textAbout}>
                                    <Button className={classes.buttonOrder} variant="outlined">Order Now</Button>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    )
}
