import React from 'react';
import Header from './Header';
import PinCard from './PinCard';
import HeaderMobile from './HeaderMobile';
import FooterMobile from './FooterMobile';
import { useMediaQuery } from 'react-responsive'
const PinterestLayout = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <>
        {isDesktopOrLaptop && <Header/>}
        {isMobile && <HeaderMobile/>}
            
            <div style ={_stylesLayout.pint_container}>
                
                {_data.map(data =>
                    
                    <PinCard key={data.id} size={data.size} image={`https://picsum.photos/id/${data.id}/500/500`} />
                )}
            </div>
            {isMobile && <FooterMobile/>}
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
        id: 21,
        size: "small"
    },
    {
        id: 22,
        size: "large"
    },
    {
        id: 23,
        size: "medium"
    },
    {
        id: 24,
        size: "large"
    },
    {
        id: 52,
        size: "medium"
    },
    {
        id: 26,
        size: "small"
    },
    {
        id: 27,
        size: "large"
    },
    {
        id: 28,
        size: "medium"
    },
    {
        id: 29,
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
