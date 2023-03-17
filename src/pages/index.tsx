
import { Inter } from 'next/font/google'
import { ShopLayout } from '@/components/layouts'
import { NextPage } from 'next'
import { initialData } from '@/database/products'
import {Grid, Card, CardActionArea, CardMedia, Typography} from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = ()=> {
  console.log(initialData)
  return (
    <ShopLayout title='Tesla Shop' pageDescription='Este es el sitio de la tienda oficial de Tesla Motors para comprar su merchandising'>
       <>
        <Typography variant='h1' component='h1'>Todos</Typography>
        <Typography variant='h2' sx={{mb:1}}>Los Productos</Typography>
        <Grid container spacing={4}>
          {
            initialData.products.map(product => (
              <Grid item xs={6} sm={4} key={product.slug}>
                <Card>
                  <CardActionArea>
                    <CardMedia component='img'  image={`products/${product.images[0]}`} alt={product.title}/>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
       </> 
    </ShopLayout>
   
  )
}

export default Home
