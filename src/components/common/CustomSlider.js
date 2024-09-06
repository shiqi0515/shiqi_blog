import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlider({ children, settings = {}, autoplay = true }) {
    const sliderRef = useRef(null);

    const defaultSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 3000,
    };

    const sliderSettings = { ...defaultSettings, ...settings };

    // 检查是否只有一个子元素
    const isSingleChild = React.Children.count(children) === 1;

    if (isSingleChild) {
        return <Box>{children}</Box>;
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Slider ref={sliderRef} {...sliderSettings}>
                {children}
            </Slider>
            <IconButton
                onClick={() => sliderRef.current.slickPrev()}
                sx={{
                    position: 'absolute',
                    left: -30,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'transparent',
                    '&:hover': { bgcolor: 'background.default' },
                    zIndex: 1,
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                onClick={() => sliderRef.current.slickNext()}
                sx={{
                    position: 'absolute',
                    right: -30,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'transparent',
                    '&:hover': { bgcolor: 'background.default' },
                    zIndex: 1,
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
}

export default CustomSlider;