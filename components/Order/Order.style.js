import { makeStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import { InputBase, TextField, Tabs, Tab, Accordion } from '@material-ui/core'

export const AccordionCustom = withStyles({
  root: {
    padding: 0,
    margin: 0,
    background: 'transparent',
    borderBottom: 'none',
    boxShadow: 'none',
    color: '#fff',
    '& .MuiAccordionSummary-expandIcon': {
      color: '#fff',
    },
  },
})(Accordion)

export const AntTab = withStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    border: 'solid 1px #FFF',
    textTransform: 'none',
    minWidth: 0,
    minHeight: 0,
    '& .MuiTab-icon': {
      minWidth: 0,
      minHeight: 0,
    },
  },
}))((props) => <Tab disableRipple {...props} />)

export const InputSpinner = withStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      marginTop: 5,
      paddingLeft: 5,
      background: '#FFF',
      borderBottom: 'solid 0px !important',
      color: '#000',
      border: 'none !important',
      width: 60,
      height: 10,
      '&:focus': {
        border: 'none !important',
        color: '#000',
      },
    },
  },
}))(TextField)

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    minHeight: 700,
    margin: 'auto',
  },
  headerSection: {
    background: '#2D2D2D',
  },
  mainSection: {
    maxWidth: 900,
    margin: 'auto',
    color: '#FFF',
  },
  headphoneTitle: {
    fontSize: 26,
    lineHeight: '1.4em',
  },
  underTitle: {
    marginTop: 8,
    color: '#ECECEC',
    fontSize: 14,
  },
  price: {
    fontSize: 20,
    marginTop: 30,
  },
  colorSelectorText: {
    color: '#ECECEC',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonOrder: {
    marginTop: 30,
    width: 350,
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    color: '#000',
    font: 'var(--ttlFnt,var(--font_2))',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: '#9F8B71',
      transition: 'all 0.4s ease',
    },
  },
  buttonBuy: {
    marginTop: 10,
    width: 350,
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#FFF',
    boxShadow: 'none',
    color: '#000',
    font: 'var(--ttlFnt,var(--font_2))',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: '#C0C0C0',
      transition: 'all 0.4s ease',
    },
  },
  colorSelection: {
    marginTop: 20,
  },
  quantitySpinner: {
    marginTop: 10,
  },
  switchBox: {
    width: 170,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
  imgBox: {
    minHeight: 500,
    minWidth: 500,
  },
  bottomParagraph: {
    width: 460,
    marginTop: 20,
    fontSize: 14,
  },
  accordionHeading: {
    float: 'left',
    textTransform: 'uppercase',
    font: 'normal normal normal 16px/1.4em barlow-extralight,barlow,sans-serif',
    fontSize: 14,
  },
  accordionSection: {
    maxWidth: 360,
    marginTop: 50,
  },
  accordionLine: {
    color: '#FFF',
    background: '#FFF',
    height: '0.1em',
  },
  accordionParagraph: {
    font: 'normal normal normal 16px/1.4em barlow-extralight,barlow,sans-serif',
    fontSize: 14,
  },

  homeLink: {
    color: '#FFF',
  },
  nameOfModel: {
    opacity: 0.6,
  },
  linkSection: {
    color: '#FFF',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 14,
  },
  secondGrid: {
    marginTop: 110,
  },
  colorBlack: {
    background: '#fff',
    color: '#000',
    borderRadius: '100%',
    width: 0,
    height: 25,
    marginTop: 5,
  },
  colorWhite: {
    background: '#fff',
    color: '#000',
    borderRadius: '100%',
    width: 0,
    height: 25,
    marginTop: 5,
  },
  colorBrown: {
    background: '#fff',
    color: '#000',
    borderRadius: '100%',
    width: 0,
    height: 25,
    marginTop: 5,
  },
  headIcon: {
    width: 25,
    height: 30,
    objectFit: 'cover',
  },
  colorTab: {
    borderRadius: '100%',
    width: 0,
    height: 25,
    marginTop: 5,
  },
}))
