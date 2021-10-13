import React from 'react';
import Header from './Header';
import PinCard from './PinCard';
import HeaderMobile from './HeaderMobile';
import FooterMobile from './FooterMobile';

const PinterestLayout = () => {
    return (
        <>
            <HeaderMobile></HeaderMobile>
            <div style ={_stylesLayout.pint_container}>
                
                {_data.map(data =>
                    
                    <PinCard key={data.id} size={data.size} image={`https://picsum.photos/id/${Math.floor((Math.random() * (1070 - 1000 + 1)) + 1000)}/500/500`} />
                )}
            </div>
            <FooterMobile></FooterMobile>
        </>
       
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
const _data = [
    {
        id: 1,
        size: "small"
    },
    {
        id: 2,
        size: "large"
    },
    {
        id: 3,
        size: "medium"
    },
    {
        id: 4,
        size: "large"
    },
    {
        id: 5,
        size: "medium"
    },
    {
        id: 6,
        size: "small"
    },
    {
        id: 7,
        size: "large"
    },
    {
        id: 8,
        size: "medium"
    },
    {
        id: 9,
        size: "large"
    },
    {
        id: 10,
        size: "medium"
    },
    {
        id: 11,
        size: "small"
    },
    {
        id: 12,
        size: "large"
    },
    {
        id: 13,
        size: "medium"
    },
    {
        id: 14,
        size: "large"
    },
    {
        id: 15,
        size: "medium"
    },
    {
        id: 16,
        size: "small"
    },
    {
        id: 17,
        size: "large"
    },
    {
        id: 18,
        size: "medium"
    },
    {
        id: 19,
        size: "large"
    },
    {
        id: 20,
        size: "medium"
    }
    
    
];


export default PinterestLayout;
