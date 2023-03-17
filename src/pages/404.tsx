import { ShopLayout } from '@/components/layouts'
import {Box, Typography} from '@mui/material'

const Custom404 = () => {
  return (
    <ShopLayout title='Not Found Page' pageDescription='No hay un sitio para mostrar aquí'>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{flexDirection:{xs:'column', sm: 'row'}}} >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={150}>404 <Typography fontSize='inherit' fontWeight='inherit' sx={{display: {xs:'none', sm: 'inline-block'}}} >|</Typography></Typography>
            <Typography sx={{marginTop: {xs: '20px', sm: '5px'}}} marginLeft={2}>No hay una página para mostrar aquí</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404