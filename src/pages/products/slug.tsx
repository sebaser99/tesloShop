import { ShopLayout } from "@/components/layouts"
import { ProductSlideshow, SizeSelector } from "@/components/product"
import { ItemCounter } from "@/components/ui"
import { initialData } from "@/database/products"
import { Grid, Box, Typography, Button, Chip } from "@mui/material"


const product =  initialData.products[0]
const sizes =  initialData.products[0].sizes

const ProductPage = () => {
  return (
    <ShopLayout title='ABC' pageDescription="esta es la página de descripción de un productos">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
                <ProductSlideshow images={product.images} />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box display='flex' flexDirection='column'>
                    <Typography variant='h1' component='h1'>{product.title}</Typography>
                    <Typography variant='subtitle1' component='h2'>{product.price}</Typography>
                    <Box sx={{may: 2}}>
                        <Typography variant='subtitle2'>Cantidad</Typography>
                        <ItemCounter />
                        <SizeSelector selectedSize={product.sizes[0]} sizes={product.sizes} />
                    </Box>
                    {/*Agregar al carrito */}
                    <Button color="secondary" className='circular-btn'>
                        Agregar al Carrito
                    </Button>

                    {/*<Chip label='No hay disponibles' color='error' variant='outlined'/>*/}

                    {/*Descripción */}
                    <Box sx={{mt: 3}}>
                        <Typography variant='subtitle2'>Descripción</Typography>
                        <Typography variant='body2'>{product.description}</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}


export default ProductPage