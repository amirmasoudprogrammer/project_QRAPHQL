import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_BLOGS_INFO} from "../../Graphql/Queries.js";
import {Grid} from "@mui/material";
import CardEl from "../Shared/CardEL";
import Loader from "../../Graphql/Loader.jsx";


const Blogs = () => {
    const {loading, data, error} = useQuery(GET_BLOGS_INFO)
    console.log(loading, data, error)
    if (loading) return <Loader/>
    if (error) return <h1>خطا در شبکه ...!</h1>
    return (
        <Grid container spacing={2}>
            {data.posts.map((post) => (
                <Grid  item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post} />
                </Grid>
            ))}

        </Grid>
    );
};

export default Blogs;