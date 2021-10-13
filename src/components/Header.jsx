import React from 'react';
import { FaPinterest } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';


function changeBackground(e) {
    e.target.style.background = '#E6E2E2';
  }

const Header = (props) =>{
    return(
        <div  style ={_stylesHeader.father}>

            <div>
                <FaPinterest style={_stylesHeader.logo}/>
            </div>
            <div id="order" style={_stylesHeader.order}>
                <a href="#" style ={_stylesHeader.buttons1}>Inicio</a>
            </div>
            <div id="order" style={_stylesHeader.order}>
                <a  href="#"  style ={_stylesHeader.buttons2}>Hoy</a>
            </div >
            <div id="searchBar" style={_stylesHeader.formulario}>
                <input type="search" placeholder ="Buscar" style={_stylesHeader.formInput}/>
            </div>
            <div>
                <IoMdNotificationsOutline style={_stylesHeader.logoLabel}/>
            </div>
            <div>
                <BsChatDots  style={_stylesHeader.logoLabel}/>
            </div>

            <div>
            <AiOutlineUser  style={_stylesHeader.logoUser}/>
            </div>

            <div>
                <IoIosArrowDown style={_stylesHeader.logoArrowDown}/>
            </div>
        </div>
    );
};

const _stylesHeader = {
    father:{
        
        justifyContent: 'space-between',
        width: "100%",
        display: "flex"
    },
    formulario:{
        flexGrow: 1,
        padding: "15px 15px",
        
        
    },
    formInput:{
        width: "100%",
        backgroundColor: "#ECECEC",
        borderRadius: "10px",
        fontSize:"13px",
        lineHeight: '30px',
        border: 'none',
        borderColor:'#49E4CB'
    },
    logo:{
        color: 'red',
        fontSize: '25px',
        margin: '14px 15px',
        borderRadius: '20px',
        padding: '10px',
    },

    logoLabel:{
        color: 'grey',
        fontSize: '22px',
        margin: '14px 15px',
        borderRadius: '20px',
        padding: '5px 5px 0 5px',

    },
    logoUser:{
        color: 'grey',
        fontSize: '10px',
        margin: '14px 10px',
        marginTop: '20px',
        borderRadius: '20px',
        padding: '5px 5px 0 5px',
    },

    logoArrowDown:{
        color: 'grey',
        fontSize: '10px',
        margin: '14px 15px',
        borderRadius: '20px',
        padding: '5px 5px 10px 5px',
        paddingTop: '10px',
    },

    buttons1:{
        textDecoration: 'none',
        margin: '14px 15px',
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
    },

    buttons2:{
        textDecoration: 'none',
        margin: '14px 15px',
        borderRadius: '20px',
        padding: '10px',
        color: 'black',
        backgroundColor: 'none',
        fontSize: '15px',
    },
    order:{
        marginTop:'20px',
    }
};

export default Header;