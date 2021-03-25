import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    featuredOn: {
        height: 440,
        background: "#ECECEC",
        color: "#000"
    },
    gridElement: {
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7%",
    },
    paper: {
        verticalAlign: "bottom",
    },
    allContent: {
        maxWidth: 1240,
    }
}))
