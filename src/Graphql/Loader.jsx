import React from 'react';
import { RotatingSquare } from 'react-loader-spinner'
const Loader = () => {
    return(
       <div style={{
           width:"100%",
           height:"1000px",
           display:"flex",
           justifyContent:"center",
           paddingTop:"20px"
       }}>
           <RotatingSquare
           visible={true}
           height="100"
           width="100"
           color="#1976d2"
           ariaLabel="rotating-square-loading"
       />
       </div>
    );
};

export default Loader;