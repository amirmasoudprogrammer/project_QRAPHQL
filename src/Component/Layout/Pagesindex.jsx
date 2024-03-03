import React from 'react';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer.js";

const Pagesindex = ({children}) => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography component="h1" variant="h5" fontWeight="700" flex={1}>وبلاگ برنامه نویسان </Typography>
                        <ComputerIcon/>
                    </Toolbar>
                </Container>
            </AppBar>

            {children}
                <Typography component="p" variant="p" bgcolor="#f7f7f7" color="primary" padding="10px" textAlign="center">
                    پروژه وبلاگ با | graphql| امیرمسعود اسدی طلب
                </Typography>
        </>
    );
};

export default Pagesindex;