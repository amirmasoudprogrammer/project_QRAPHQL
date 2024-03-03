import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Get_blogs_info} from "../../Graphql/Queries.js";
import Loader from "../../Graphql/Loader.jsx";
import {Avatar, Container, Grid, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sanitizeHtml from "sanitize-html";
import CommentForm from "../Comment/CommentForm.jsx";
import Comments from "../Comment/Comments.jsx";

const BlogPage = () => {
    const {slug} = useParams()
    const Navigate = useNavigate()
    const {loading, data, errors} = useQuery(Get_blogs_info, {
        variables: {slug: slug}
    })
    if (loading) return <Loader/>
    if (errors) return <h2>خطا در شبکه..!</h2>
    console.log({loading, data, errors})
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} mt={9} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="h2" variant="h4" color="primary" fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackIcon onClick={() => Navigate(-1)} style={{cursor: "pointer"}}/>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} alt="icon" width="100%"/>
                </Grid>
                <Grid item xs={12} mt={7} display="flex" alignItems="center">
                    <Avatar src={data.post.author.avatar.url} sx={{width: 80, height: 80, marginLeft: 2}}/>
                    <div>
                        <Typography component="p" variant="h5" fontWeight={700}>{data.post.author.name}</Typography>
                        <Typography component="p" variant="p"
                                    color="text.secondary">{data.post.author.field}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}>

                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;