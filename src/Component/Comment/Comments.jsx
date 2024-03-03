import React from 'react';
import {useQuery} from "@apollo/client";
import {Get_Comment} from "../../Graphql/Queries.js";
import Loader from "../../Graphql/Loader.jsx";
import {Avatar, Grid, Typography ,Box} from "@mui/material";

const Comments = ({slug}) => {
    const {loading, data, errors} = useQuery(Get_Comment, {
        variables: {slug}
    })
    console.log({data})
    if (loading) return <Loader/>
    if (errors) return <h1>خطا در شبکه ...</h1>
    return (
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.1 0px 4px 12px)", borderRadius: "", py: 1, mt: 8}}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" fontWeight="700" color="primary">کامنت ها</Typography>
                {data.comments.map((items) =>(
                    <Grid item key={items.id} m={2} p={2} border="1px silver solid" borderRadius={1}>
                        <Box component="div" display="flex" alignItems="center" mb={3}>
                            <Avatar>{items.name[0]}</Avatar>
                            <Typography component="span" variant="p" fontWeight={700} mr={1}>{items.name}</Typography>
                        </Box>
                        <Typography component="p" variant="p" >{items.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;