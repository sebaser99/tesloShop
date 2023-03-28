import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='center'>
            <Typography>3 items</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='center'>
            <Typography>{`$ ${15.000}`}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Impuestos (12%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='center'>
            <Typography>{`$ ${2.500}`}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='center'>
            <Typography variant="subtitle1">{`$ ${17.500}`}</Typography>
        </Grid>
    </Grid>
  )
}
