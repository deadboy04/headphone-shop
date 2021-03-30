import {makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";

export const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '100%',
    },
    mainGrid: {
        width: '100%',
        height: '100vh',
        background: '#2D2D2D',
        color: '#FFF',
    },
    container: {
        width: 325,
        position: 'relative',
        top: 'calc(50% - 230px)',
        margin: "auto",
    },
    headingSignUp: {
        fontSize: 48,
        font: 'var(--ttlFnt,var(--font_2))',
        marginBottom: 20,
    },
    headingLogIn: {
        textDecoration: 'none',
        letterSpacing: 0.3,
        font: 'var(--fnt,var(--font_8))',
        fontSize: 16,
        marginBottom: 25,
    },
    linkStyle: {
        color: "#D9C0A1",
    },
    headingLine: {
        margin: '0 auto',
        font: 'var(--fnt,var(--font_8))',
        fontSize: 16,
        color: '#B0B0B0',
        backgroundColor: '#2D2D2D',
        width: 40,
        height: 40,
        zIndex: 100,
    },
    line: {
        width: 320,
        textAlign: 'center',
        height: 13,
        borderBottom: '1px solid #B0B0B0',

    },
    heading: {
        marginTop: -15,
        minWidth: '100%',
    },
    logButton: {
        minWidth: '100%',
    }
}))