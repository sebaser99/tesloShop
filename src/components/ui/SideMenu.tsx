import {Drawer, Box, List, ListItem, ListItemIcon, ListItemText, Input, InputAdornment, IconButton, Divider, ListSubheader} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarning';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const SideMenu = () => {
  return (
    <Drawer
        open={true}
        anchor='right'
        sx={{backdropFilter:'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ widht: 250, paddingTop:5}}>
            <List>
                <ListItem>
                    <Input 
                        type='text'
                        placeholder='Buscar...'
                        endAdornment={
                            <InputAdornment  position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                >
                                    <SearchOutlinedIcon/>
                                </IconButton>
                            </InputAdornment>
                        } 
                    />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ConfirmationNumberOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis Ordenes'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <MaleOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <FemaleOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <EscalatorWarningOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItem>

                <ListItem button>
                <ListItemIcon>
                    <VpnKeyOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={'Ingresar'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LoginOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>

                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItem button>
                    <ListItemIcon>
                        <CategoryOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ConfirmationNumberOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Ordenes'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AdminPanelSettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Usuarios'} />
                </ListItem>
            </List>   
        </Box>
    </Drawer>
  )
}
