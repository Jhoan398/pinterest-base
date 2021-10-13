import React from 'react';
import { FaPinterest } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';




const Header = (props) =>{
    return(
        <div  style ={_stylesHeader.padre}>

            <div>
                <FaPinterest style={_stylesHeader.logo}/>
            </div>
            <div>
                <h6>Inicio</h6>
            </div>
            <div>
                <h6>Hoy</h6>
            </div>
            <div id="searchBar" style={_stylesHeader.formulario}>
                <input type="text" style={_stylesHeader.formInput}/>
            </div>
            <div>
                <IoMdNotificationsOutline style={_stylesHeader.logoLabel}/>
            </div>
            <div>
                <BsChatDots style={_stylesHeader.logoLabel}/>
            </div>
            <div>
                <IoIosArrowDown style={_stylesHeader.logoLabel}/>
            </div>
        </div>
    );
};

const _stylesHeader = {
    padre:{
        
        justifyContent: 'space-between',
        width: "100%",
        display: "flex"
    },
    formulario:{
        flexGrow: 1,
        padding: "15px 15px"
        
    },
    formInput:{
        width: "100%",
        backgroundColor: "#5f5f5f7a",
        borderRadius: "10px"
    },
    logo:{
        color: 'red',
        fontSize: '30px',
        margin: '14px 15px'
    },

    logoLabel:{
        color: 'grey',
        fontSize: '30px',
        margin: '14px 15px'
    },
};

export default Header;