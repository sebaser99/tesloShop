
import { Inter } from 'next/font/google'
import { ShopLayout } from '@/components/layouts'
import { NextPage } from 'next'
import { initialData } from '@/database/products'
import {Typography} from '@mui/material'
import { ProductList } from '@/components/product'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = ()=> {
  
  return (
    <ShopLayout title='Tesla Shop' pageDescription='Este es el sitio de la tienda oficial de Tesla Motors para comprar su merchandising'>
       <>
        <Typography variant='h1' component='h1'>Todos</Typography>
        <Typography variant='h2' sx={{mb:1}}>Los Productos</Typography>
        <ProductList products={initialData.products as any} />
       </> 
    </ShopLayout>
   
  )
}

export default Home
