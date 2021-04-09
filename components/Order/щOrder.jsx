import {
  Box,
  Typography,
  Grid,
  Button,
  AppBar,
  Tabs,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@material-ui/core'
import Header from '../Menu/Header'
import EmailDistribution from '../EmailDistribution/EmailDistribution'
import OtherLinks from '../OtherLinks/OtherLinks'
import Footer from '../Footer/Footer'
import Products from './Products'
import React from 'react'
import { useStyles, InputSpinner, AntTab, AccordionCustom } from './Order.style'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const image =
  'https://static.wixstatic.com/media/82fcd3_96384875d86043c28020b47a59c8c00b~mv2_d_1920_1920_s_2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_96384875d86043c28020b47a59c8c00b~mv2_d_1920_1920_s_2.webp'
const image2 =
  'https://static.wixstatic.com/media/82fcd3_5ee76b86a6cd48e09f554436dae5359e~mv2_d_1920_1920_s_2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_5ee76b86a6cd48e09f554436dae5359e~mv2_d_1920_1920_s_2.webp'

function TabPanel(props) {
  const { children, value, index } = props

  return (
    <div hidden={value !== index}>{value === index && <>{children}</>}</div>
  )
}

export default function Order(props) {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <main>
      <div className={classes.headerSection}>
        <Header />
        <Grid item container className={classes.mainSection}>
          <Grid container className={classes.mainGrid}>
            <Grid item>
              <Typography variant="h2" className={classes.linkSection}>
                <Link href="#" underline="none" className={classes.homeLink}>
                  Home
                </Link>{' '}
                /
                <span className={classes.nameOfModel}>
                  Soundbeam ERD - 3083
                </span>
              </Typography>
              <Box>
                <TabPanel value={value} index={0} className={classes.imgBox}>
                  <img alt="headphones" src="" />
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.imgBox}>
                  <img alt="headphones" src="" />
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.imgBox}>
                  <img alt="headphones" src="" />
                </TabPanel>
                <AppBar position="static" className={classes.switchBox}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <AntTab
                      icon={<Add />}
                      className={classes.tabElement}
                      {...a11yProps(0)}
                    />
                    <AntTab
                      icon={<Add />}
                      className={classes.tabElement}
                      {...a11yProps(1)}
                    />
                    <AntTab
                      icon={<Add />}
                      className={classes.tabElement}
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </AppBar>
                <Box>
                  <Typography variant="h2" className={classes.bottomParagraph}>
                    I'm a product description. I'm a great place to add more
                    details about your product such as sizing, material, care
                    instructions and cleaning instructions.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item className={classes.secondGrid}>
              <Typography variant="h1" className={classes.headphoneTitle}>
                Soundbeam ERD - 3083
              </Typography>
              <Typography variant="h2" className={classes.underTitle}>
                SKU: 00001
              </Typography>
              <Typography variant="h3" className={classes.price}>
                $299.00
              </Typography>
              <Box className={classes.colorSelection}>
                <Typography variant="h2" className={classes.colorSelectorText}>
                  Color:{' '}
                </Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <AntTab
                    className={classes.colorTab}
                    {...a11yProps(0)}
                    style={{ background: '#000' }}
                  />
                  <AntTab
                    className={classes.colorTab}
                    {...a11yProps(1)}
                    style={{ background: '#FFF' }}
                  />
                  <AntTab
                    className={classes.colorTab}
                    {...a11yProps(2)}
                    style={{ background: '#C6A97C' }}
                  />
                </Tabs>
              </Box>
              <Box className={classes.quantitySpinner}>
                <Typography variant="h2" className={classes.colorSelectorText}>
                  Quantity
                </Typography>
                <TextField
                  value={2}
                  InputProps={{ max: 10, min: 0, step: 1 }}
                  type={'number'}
                />
                <InputSpinner
                  variant="outlined"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box>
                <Button className={classes.buttonOrder} variant="outlined">
                  Order Now
                </Button>
              </Box>
              <Box>
                <Button className={classes.buttonBuy} variant="outlined">
                  Buy Now
                </Button>
              </Box>
              <Box className={classes.accordionSection}>
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Product Info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
                <hr className={classes.accordionLine} />
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Return & Refund Policy
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
                <hr className={classes.accordionLine} />
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Shipping info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <EmailDistribution />
      <OtherLinks />
      <Footer />
    </main>
  )
}
