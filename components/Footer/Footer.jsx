import {Typography, Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    footerMainBlock: {
        width: '100%',
        height: 66,
        background: '#E3E3E3',
    },
    footerContainer: {
    },
    footerText: {
        margin: '0 auto',
        textAlign: 'center',
        verticalAlign: 'center',
        fontSize: '15px',
        color: '#2D2D2D',
        font: 'var(--font_8)',
        lineHeight: "66px",
    }
}))

export default function EmailDistribution() {
    const classes = useStyles();

    return (
        <main className={classes.footerMainBlock}>
            <Container className={classes.footerContainer} justify="center" alignItems="center">
                <Typography className={classes.footerText} variant="h2">
                    &#169;2023 by SOUNDBEAM. Proudly created with Wix.com
                </Typography>
            </Container>
        </main>
    )
}

