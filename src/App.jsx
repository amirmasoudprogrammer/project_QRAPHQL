import React from 'react';
import HomePage from "./Component/Home/HomePage.jsx";
import Pagesindex from "./Component/Layout/Pagesindex.jsx";
import {Route, Routes} from "react-router-dom";
import AutherPage from "./Component/Author/AutherPage.jsx";
import BlogPage from "./Component/Blog/BlogPage.jsx";



const App = () => {
    return (
        <Pagesindex>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/blogs/:slug" element={<BlogPage/>}/>
                <Route path="/authors/:slug" element={<AutherPage/>}/>
            </Routes>
        </Pagesindex>


    );
};

export default App;