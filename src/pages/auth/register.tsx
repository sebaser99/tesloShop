import { AuthLayout } from '@/components/layouts';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react'

const RegisterPage = () => {
  return (
    <AuthLayout title='Ingresar'>
        <Box sx={{width: 350, padding: '10px 20px'}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Crea una Cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Nombre' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Correo' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Contraseña' type='password' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Repite Contraseña' type='password' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary'  className='circular-btn' size='large' fullWidth>Registrarse</Button> 
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                   <NextLink href='/auth/login' passHref legacyBehavior>
                        <Link underline='always'>
                           <Typography>Ingresar</Typography> 
                        </Link>
                    </NextLink> 
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage