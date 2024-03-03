import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_Author} from "../../Graphql/Queries.js";
import {Avatar, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Loader from "../../Graphql/Loader.jsx";

const Author = () => {
    const {loading, data, error} = useQuery(GET_Author)
    if (loading) return <Loader/>
    if (error) return <h1>خطا در شبکه...</h1>
    console.log({data})
    return (
        <>
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, width: "100%"}}>
            {data.authors.map(item => (
                    <Grid item xs={12} key={item.id} padding={2}>
                        <Link to={`/authors/${item.slug}`} style={{display:"flex" , alignItems:"center",textDecoration:"none"}}>
                        <Avatar src={item.avatar.url} sx={{marginLeft:2}}/>
                        <Typography component="p" variant="p" color="text.secondary">{item.name}</Typography>
                        </Link>
                        <hr/>
                    </Grid>
            ))}

        </Grid>

        </>
    );
};

export default Author;