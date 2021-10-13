import React from 'react';


const PinCard = (props) =>{
    return(
        <div  style ={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
            <img src={props.image} style={_stylesPinCard.image} />
        </div>
    );
};

const _stylesPinCard = {
    pin_card:{
        margin: '15px 10px',
        padding: 0,
        borderRadius: '15px',
        backgroundColor: 'red',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        
    },
    small: {
        gridRowEnd: 'span 26',
    },

    medium:{
        gridRowEnd: 'span 33',
    },
    large:{
        gridRowEnd: 'span 45',
    },
};

export default PinCard;
