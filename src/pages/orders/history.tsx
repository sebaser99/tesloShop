import { ShopLayout } from '@/components/layouts';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullname', headerName: 'Nombre Completo', width: 300},
    {field: 'paid', headerName:' Pagada', 
        description:'Muestra el estado de la orden', width: 200,
        renderCell: (params: GridRenderCellParams )=> {
            return (
                params.row.paid 
                ?  <Chip color='success' label='Pagada' variant='outlined'/>
                : <Chip color='error' label='No Paga' variant='outlined'/>

            )
        }
    },
    {field: 'orden ', headerName: 'Ver Orden', width: 200, sortable: false,
        renderCell: (params: GridRenderCellParams )=> {
            return (
                <NextLink href={`/orders/${params.row.link}`} passHref legacyBehavior>
                    <Link alignContent='center' underline='always'  >
                        Ver Orden
                    </Link>
                </NextLink>

            )
        }
    }
]

const rows = [
    {id: '1', fullname: 'Sebastian Rodriguez', paid: true, link: '1'},
    {id: '2', fullname: 'Maria Romero', paid: false, link: '2'},
    {id: '3', fullname: 'Angelica Patiño', paid: true, link: '3'},
    {id: '4', fullname: 'Miguel Bermeo', paid: true, link: '4'},
    {id: '5', fullname: 'Camilo Rodriguez', paid: false, link: '5'},
    {id: '6', fullname: 'Josefa Londoño', paid: true, link: '6'},
    {id: '7', fullname: 'Sebastian Rodriguez', paid: false, link: '7'},
    {id: '8', fullname: 'Maria Romero', paid: true, link: '8'},
    {id: '9', fullname: 'Angelica Patiño', paid: false, link: '9'},
    {id: '10', fullname: 'Miguel Bermeo', paid: true, link: '10'},
    {id: '11', fullname: 'Camilo Rodriguez', paid: true, link: '11'},
    {id: '12', fullname: 'Josefa Londoño', paid: true, link: '12'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial Ordenes' pageDescription='El historial de órdenes'>
        <>
            <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
            <Grid container>
            <Grid item xs={12} sx={{height: 650, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel:{pageSize: 10}
                        }
                    }}
                    pageSizeOptions={[5,10,12]}
                    
                    
                />
            </Grid>
            </Grid>
        </>
    </ShopLayout>
  )
}

export default HistoryPage