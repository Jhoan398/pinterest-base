import React from 'react';

const HeaderMobile= (props)=>{
return(
    <div style = {_styleHeaderMobile.father}>

        <div style = {_styleHeaderMobile.order}>
            <a  href = "#" style={_styleHeaderMobile.decorations}>Para ti</a>
        </div>

        <div style = {_styleHeaderMobile.order}>
            <a href = "#" style={_styleHeaderMobile.decorations}>Hoy</a>
        </div>

        <div style = {_styleHeaderMobile.order}>
            <a href = "#" style={_styleHeaderMobile.decorations}>Ilustration...</a>
        </div>

        <div style = {_styleHeaderMobile.order}>
            <a href = "#" style={_styleHeaderMobile.decorations}>Recetas de</a>
        </div>

    </div>
);
};

const _styleHeaderMobile = {
    father:{
        
        justifyContent: 'space-between',
        width: "100%",
        display: "flex"
    },

    order:{
    paddingTop: '20px 10px 10px 10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    },

    decorations:{
        textDecorationLine: 'none',
        color: 'black',
    },

}

export default HeaderMobile;