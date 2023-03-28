import { AuthLayout } from '@/components/layouts';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react'

export const LoginPage = () => {
  return (
    <AuthLayout title='Ingresar'>
        <Box sx={{width: 350, padding: '10px 20px'}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Correo' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='filled'  label='Contraseña' type='password' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary'  className='circular-btn' size='large' fullWidth>Ingresar</Button> 
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                   <NextLink href='/auth/register' passHref legacyBehavior>
                        <Link underline='always'>
                            <Typography>¿No tienes una Cuenta?</Typography>
                        </Link>
                    </NextLink> 
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default LoginPage;