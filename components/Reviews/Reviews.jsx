import { Container, Grid, Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";



export const useStyles = makeStyles((theme) => ({
    reviewsBlock: {
        height: 640,
        background: "#FFF",
        textAlign: "center",
        width: "100%",
    },
    reviewItem: {
        paddingTop: 146,
        height: 640,
        width: 720,
    },
    reviewsCaption: {
        fontSize: 25,
        letterSpacing: 15,
    },
    reviewsParagraph: {
        marginTop: 45,
        fontSize: 36,
        lineHeight: 1.5
    },
    reviewsAuthor: {
        marginTop: 74,
        fontSize: 18,
    },
    bottomLine: {
        height: 5,
        width: 76,
        borderTop: "solid 1px #000",
        marginTop: 42,
        margin: "auto"
    },

}))

export default function Reviews() {
    const classes = useStyles();
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };
    const indicatorStyles = {
        background: '#2D2D2D',
        width: 6,
        height: 6,
        display: 'inline-block',
        margin: '35px 6px',
        borderRadius: 100,
        cursor: 'pointer',
    };
    return (

        <main>
            <Grid container direction="column" justify="center" alignItems="center">
                <Carousel className={classes.reviewsBlock} infiniteLoop={true} showStatus={false} transitionTime="1800" renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <ArrowBackIos
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                ...arrowStyles,
                                left: 50,
                            }}
                        >
                        </ArrowBackIos>
                    )
                }renderArrowNext={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <ArrowForwardIos
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                ...arrowStyles,
                                right: 50,
                            }}
                        >
                        </ArrowForwardIos>
                    )
                }renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#C0C0C0' }}

                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                        />
                    );
                }}
                >
                    <Container className={classes.reviewItem}>
                        <Typography className={classes.reviewsCaption} variant="h2">Reviews</Typography>
                        <Typography className={classes.bottomLine} variant="h2"></Typography>
                        <Typography className={classes.reviewsParagraph}variant="h2">“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</Typography>
                        <Typography className={classes.reviewsAuthor} variant="h2">DJ Nini</Typography>
                    </Container>
                    <Container className={classes.reviewItem}>
                        <Typography className={classes.reviewsCaption} variant="h2">Reviews</Typography>
                        <Typography className={classes.bottomLine}></Typography>
                        <Typography className={classes.reviewsParagraph} variant="h2">“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</Typography>
                        <Typography className={classes.reviewsAuthor} variant="h2">Sam Mathews</Typography>
                    </Container>
                    <Container className={classes.reviewItem}>
                        <Typography className={classes.reviewsCaption} variant="h2">Reviews</Typography>
                        <Typography className={classes.bottomLine}></Typography>
                        <Typography className={classes.reviewsParagraph} variant="h2">“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</Typography>
                        <Typography className={classes.reviewsAuthor} variant="h2">Rene Jordan</Typography>
                    </Container>
                </Carousel>
            </Grid>
        </main>
    )
}