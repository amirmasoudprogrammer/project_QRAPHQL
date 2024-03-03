import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography  ,Button } from "@mui/material";
import {Link} from "react-router-dom";

const CardEl = ({title , slug , coverPhoto , author}) => {
    return (
        <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4  ,width:"100%"}}>
            {author && (
                <CardHeader
                    avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
                    title={<Typography component="p" variant="p" color="text.primary">{author.name}</Typography>}
                />
            )}
            <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug}/>
            <CardContent>
                <Typography component="h3" variant="h6" color="text.primary" fontWeight={600}>
                    {title}
                </Typography>
            </CardContent>
       <hr/>
            <CardActions>
            <Link to={`/blogs/${slug}`} style={{textDecoration:"none"}}>
                <Button size="small" variant="outlined" sx={{width:"100%" , borderRadius:3}}>طالعه مقاله</Button>
            </Link>
            </CardActions>
        </Card>
    )
};

export default CardEl;