import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
    return (
    <div style ={_stylesLayout.pint_container}>
        <PinCard size ='small'/>
        <PinCard size ='medium'/>
        <PinCard size ='large'/>
        <PinCard size ='small'/>
        <PinCard size ='small'/>
        <PinCard size ='medium'/>
        <PinCard size ='large'/>
        <PinCard size ='small'/>
        <PinCard size ='small'/>
        <PinCard size ='medium'/>
        <PinCard size ='large'/>
        <PinCard size ='small'/>
        <PinCard size ='small'/>
        <PinCard size ='medium'/>
        <PinCard size ='large'/>
        <PinCard size ='small'/>
    </div>
    );
};

const _stylesLayout = {
    pint_container: {
        margin: 0,
        padding: 0,
        width: '90vw',
        backgroundColor: 'white',
        position:'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 168px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
    },
};

export default PinterestLayout;
