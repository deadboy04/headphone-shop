import React from 'react'
import { useStyles } from './Product.style'
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Link,
} from '@material-ui/core'

export default function ProductBasket(props) {
  const classes = useStyles()
  const { product, onRemove, cartItems } = props

  return (
    <Box className={classes.productBox}>
      <Link underline="none" className={classes.deleteButton} onClick={onRemove}>
        X
      </Link>
      <Container>
        <Grid container>
          <Grid item>
            <Box>
              <img src={product.img} alt="hp" className={classes.productImg} />
            </Box>
          </Grid>
          <Grid item className={classes.secondProductGrid}>
            <Typography className={classes.productName}>
              Soundbeam ERD - 3083
            </Typography>
            <Typography className={classes.productPrice}>
              ${product.price}
            </Typography>
            <Box>
              <TextField
                variant="outlined"
                type="number"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputProps: {
                    max: 10,
                    min: 1,
                    step: 1,
                    type: 'number',
                    defaultValue: 1,
                  },
                }}
                className={classes.inputSpinner}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
