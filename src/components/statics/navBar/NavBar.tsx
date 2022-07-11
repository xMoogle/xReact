import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
function NavBar()
{
    return(
        <>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box className="pointer" >
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className="pointer" >
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    <Box mx={1} className="pointer" >
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                    <Box mx={1} className="pointer" >
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                    <Box mx={1} className="pointer">
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className="pointer" style={{ color: "white" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Link>
                    
                </Box>

            </Toolbar>
        </AppBar>
    </>
    );
}

export default NavBar;