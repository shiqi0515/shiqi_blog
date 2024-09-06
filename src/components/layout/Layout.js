import React from 'react';
import { Box } from '@mui/material';
import TopBar from '../common/TopBar';

function Layout({ children }) {
    return (
        <Box sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <TopBar />
            {children}
        </Box>
    );
}

export default Layout;