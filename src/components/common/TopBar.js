import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

function TopBar() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLanguageClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        handleLanguageClose();
    };

    const languages = [
        { code: 'en', flag: '/flags/uk.png' },
        { code: 'zh', flag: '/flags/cn.png' },
        { code: 'sv', flag: '/flags/se.png' },
    ];

    return (
        <Box sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1000,
            display: 'flex',
            gap: 2,
        }}>
            <IconButton
                color="primary"
                onClick={() => window.open('https://www.linkedin.com/in/shiqi-shu', '_blank')}
                sx={{ padding: 1 }}
            >
                <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
                color="primary"
                onClick={() => window.open('https://www.instagram.com/shiqi_shu/', '_blank')}
                sx={{ padding: 1 }}
            >
                <InstagramIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Tooltip
                title="+46 76 599 4272"
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            fontSize: '1rem',
                            padding: '4px 8px'
                        }
                    }
                }}
            >
                <IconButton color="primary" sx={{ padding: 1 }}>
                    <PhoneIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="shiqi0515@outlook.com"
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            fontSize: '1rem',
                            padding: '4px 8px'
                        }
                    }
                }}
            >
                <IconButton color="primary" sx={{ padding: 1 }}>
                    <EmailIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <IconButton
                color="primary"
                sx={{ padding: 1 }}
                onClick={handleLanguageClick}
            >
                <LanguageIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageClose}
                PaperProps={{
                    style: {
                        width: '56px',
                    },
                }}
            >
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        sx={{
                            justifyContent: 'center',
                            padding: '12px 0',
                            '&:hover': {
                                backgroundColor: '#457b9d'
                            }
                        }}
                    >
                        <Avatar
                            src={lang.flag}
                            alt={lang.code}
                            sx={{ width: 32, height: 32 }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default TopBar;