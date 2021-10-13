import React from 'react';

import { BsChatDots } from 'react-icons/bs';
import { AiFillHome} from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'




const footerMobile = (props) =>{
    return(
        <div style = {_stylesFooter.father}>

            <div>
            <AiFillHome style = {_stylesFooter.logoHome}/>
            </div>

            <div>
            <BiSearchAlt2 style = {_stylesFooter.logoSearch}/>
            </div>

            <div>
            <BsChatDots style = {_stylesFooter.logoNotifications}/>
            </div>

            <div>
            
            <FaUser style = {_stylesFooter.logoUser}/>
            </div>
            
        </div>
    );
};

const _stylesFooter ={
    father:{
        justifyContent: 'space-between',
        width: "80%",
        display: "flex",
        position: 'fixed',
        left:'40px',
        top: '650px',
        backgroundColor: 'white',
        borderRadius: '50px'
    },

    logoHome:{
        color: 'Black',
        fontSize: '35px',
        margin: '14px 15px',
        padding: '10px 5px 0 5px',
    },
    
    logoSearch:{
        color: 'grey',
        fontSize: '35px',
        margin: '14px 15px',
        padding: '10px 5px 0 5px',

    },
    
    logoNotifications:{
        color: 'grey',
        fontSize: '35px',
        margin: '14px 15px',
        padding: '10px 5px 0 5px',
    },
    
    logoUser:{
        color: 'grey',
        fontSize: '35px',
        margin: '14px 15px',
        padding: '10px 5px 0 5px',

    },
}

export default footerMobile;
