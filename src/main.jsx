import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Styles/index.css"
import "./Styles/fonts.css"
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {ThemeProvider} from "@mui/material";
import theme from "./mui/theme.js";



const client = new ApolloClient({
    uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
)
