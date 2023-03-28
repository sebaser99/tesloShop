import NextLink from 'next/link'
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import CreditCartOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 123456' pageDescription="Resumen de la orden">
      <>
        <Typography variant="h1" component="h1" sx={{mb:5}}>Orden: ABC12345</Typography>
        {/* <Chip
            sx={{my: 2}}
            label='Orden Pendiente de pago'
            variant='outlined'
            color='error'
            icon={<CreditCartOffOutlinedIcon />}
         /> */}
        <Chip
            sx={{my: 2}}
            label='Orden ya pagada'
            variant='outlined'
            color='success'
            icon={<CreditCardOutlinedIcon />}
         />

        <Grid container>
          <Grid  item xs={12} md={7}>
            <CartList /> 
          </Grid>

          <Grid  item xs={12} md={5}>
            <Card className="summary-card" sx={{border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '5px'}}>
              <CardContent>
                <Typography variant="h2">Resumen (3 productos)</Typography>
                <Divider sx={{my: 1}} />
                <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Dirección de entrega</Typography>
                  <NextLink href="/checkout/address" passHref legacyBehavior>
                      <Link underline='always'>
                          Editar
                      </Link>
                    </NextLink>
                </Box>
                
                <Typography>Sebastian Rodriguez</Typography>
                <Typography>323 algun lugar</Typography>
                <Typography>Calle 12 oeste # las palmas - 427</Typography>
                <Typography>Cali, Colombia</Typography>
                <Typography>3177820139</Typography>
                <Divider sx={{my: 1}} />
                <Box display='flex' justifyContent='end'>
                    <NextLink href="/cart" passHref legacyBehavior>
                        <Link underline='always'>
                            Editar
                        </Link>
                    </NextLink>
                </Box>
                <OrderSummary />
                
                <Box sx={{mt: 3}}>
                  {/* <Typography variant='h1'>Pagar</Typography> */}
                  <Chip
                    sx={{my: 2}}
                    label='Orden ya pagada'
                    variant='outlined'
                    color='success'
                    icon={<CreditCardOutlinedIcon />}
                />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default OrderPage