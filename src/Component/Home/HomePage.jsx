import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Author from "../Author/Author.jsx";
import Blogs from "../Blog/Blogs.jsx";

const HomePage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2} padding={3} >
                    <Grid item xs={12} md={3} mt={4}>
                    <Typography component="h3" variant="h5" fontWeight="bold" mt={3}>نویسنده ها </Typography>
                        <Author/>
                    </Grid>
                    <Grid item xs={12} md={9} mt={4}>
                        <Typography component="h3" variant="h5" fontWeight="bold" mt={3}>مقالات</Typography>
                        <Blogs/>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default HomePage;