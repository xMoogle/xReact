import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import React from "react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="caixa" >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="gbotao" >Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <Facebook className="linkText"  />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <Instagram className="linkText" />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedIn className="linkText"/>
                            </a>
                        </Box>
                    </Box>
                    <Box className="caixa2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="gbotao" >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="gbotao" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;