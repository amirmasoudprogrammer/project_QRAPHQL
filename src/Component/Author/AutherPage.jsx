import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_Author_info} from "../../Graphql/Queries.js";
import sanitizeHtml from 'sanitize-html';
import {Avatar, Container, Grid, Typography} from "@mui/material";
import CardEl from "../Shared/CardEL";
import Loader from "../../Graphql/Loader.jsx";


const AutherPage = () => {
    const {slug} = useParams()
    const {loading, data, errors} = useQuery(GET_Author_info, {
        variables: {slug: slug}
    })
    if (loading) return <Loader/>
    if (errors) return <h1>خطا در شبکه...</h1>
    console.log({loading, data, errors})
    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} display="flex" alignItems="center" flexDirection="column">
                    <Avatar sx={{width: 250, height: 250}} src={data.author.avatar.url}/>
                    <Typography component="h3" variant="h5" fontWeight={700} mt={4}>{data.author.name}</Typography>
                    <Typography component="p" variant="h5" color="text.secondary"
                                mt={2}>{data.author.field}</Typography>
                </Grid>
                <Grid item xs={12} mt={1} display="flex" justifyContent="center" alignItems="center">
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html),}}>
                    </div>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <Typography component="h3" variant="h5" fontWeight={700}>  مقالات {data.author.name}</Typography>
                    <Grid container spacing={3} mt={4}>
                        {data.author.posts.map(item => (
                            <Grid item xs={12} sm={6} md={6} key={item.id}>
                                <CardEl title={item.title} slug={item.slug} coverPhoto={item.coverPhoto}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AutherPage;