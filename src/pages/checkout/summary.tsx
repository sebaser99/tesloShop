import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription="Resumen de la orden">
      <>
        <Typography variant="h1" component="h1" sx={{mb:5}}>Resumen de la orden</Typography>

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
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Confirmar Orden
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default SummaryPage