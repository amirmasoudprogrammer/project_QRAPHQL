import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useMutation} from "@apollo/client";
import {SEND_COMMENT} from "../../Graphql/Mutation.js";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({slug}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const [send_data, {loading, data, errors}] = useMutation(SEND_COMMENT, {
        variables: {name, email, text, slug}
    })
    console.log({loading, data, errors})
    console.log({data})
    const startAPI = () => {
       if (name && email && text){
           send_data()
       }else {
           toast.error('لطفا فرم پر کنید!', {
               position: "top-center",
               autoClose: 5000,
               theme: "colored",
           });
       }
    }
    return (
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px , 4px, 12px", borderRadius: 4, py: 1, mt: 5,}}>
            <Grid item xs={12} m={1}>
                <Typography component="p" variant="h6" fontWeight="700" color="primary">فرم ارسال کامنت </Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} label="نام کاربری" variant="outlined"
                           sx={{width: "100%"}}/>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="ایمیل" variant="outlined"
                           sx={{width: "100%"}}/>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField multiline minRows={4} value={text} onChange={(e) => setText(e.target.value)} label="کامنت"
                           variant="outlined" sx={{width: "100%"}}/>
            </Grid>

            <Grid item xs={12} m={12}>
                {loading ? (<Button variant="contained" disabled>درحال ارسال</Button>):(    <Button onClick={startAPI} variant="contained">ارسال</Button>)}
            </Grid>
            <ToastContainer/>
        </Grid>
    );
};

export default CommentForm;