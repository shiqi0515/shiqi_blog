import React, { useState } from 'react';
import Home from '../components/Home';
import Career from '../components/Career';
import Life from '../components/Life';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Paper, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CakeIcon from '@mui/icons-material/Cake';
import PetsIcon from '@mui/icons-material/Pets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import '../styles/HomePage.css';

function HomePage() {
    const [showCareer, setShowCareer] = useState(false);
    const [showLife, setShowLife] = useState(false);
    const { t } = useTranslation();

    const educationData = [
        {
            university: t('Uppsala University'),
            degree: t('Master of Science - Computer Science'),
            period: t('Sep 2023 - Jun 2025'),
            logo: '/insignias/uu.png'
        },
        {
            university: t('Dalarna University'),
            degree: t('Bachelor of Science - Information Systems'),
            period: t('Sep 2020 - Jun 2023'),
            logo: '/insignias/du.png'
        },
        {
            university: t('Jiangxi University of Finance and Economics'),
            degree: t('Bachelor of Engineering - Software Engineering'),
            period: t('Sep 2019 - Jun 2023'),
            logo: '/insignias/jufe.png'
        }
    ];

    const personalInfo = [
        { icon: CakeIcon, primary: t('Birthday'), secondary: t('15 May, 2001') },
        { icon: PetsIcon, primary: t('Zodiac'), secondary: t('Snake / Taurus') },
        { icon: LanguageIcon, primary: t('Languages'), secondary: t('Chinese / English') },
        {
            icon: LocationOnIcon,
            primary: t('Hometown'),
            secondary: t('Nanchang, Jiangxi Province, China'),
            link: 'https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E6%B1%9F%E8%A5%BF%E7%9C%81%E5%8D%97%E6%98%8C%E5%B8%82/@28.680929,115.9043884,11z/data=!3m1!4b1!4m6!3m5!1s0x343ab856f20dafb1:0xf180919945bad83e!8m2!3d28.6820199!4d115.8579399!16zL20vMDIyOW41?entry=ttu&g_ep=EgoyMDI0MDkwMi4wIKXMDSoASAFQAw%3D%3D'
        },
        { icon: ParaglidingIcon, primary: t('Hobbies'), secondary: t('Skiing / Cooking / Traveling') },
    ];

    return (
        <Box className="home-container">
            {/* Left section - Education Background */}
            <Box className="section-box section-box-left">
                <Typography variant="h4" className="section-title">
                    {t('Education')}
                </Typography>
                <List className="education-list">
                    {educationData.map((edu, index) => (
                        <React.Fragment key={index}>
                            <ListItem className="education-item">
                                <ListItemAvatar>
                                    <Avatar src={edu.logo} alt={edu.university} className="education-avatar" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="h6" align="center">{edu.university}</Typography>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography variant="body2" color="text.primary" align="center" display="block">
                                                {edu.degree}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" align="center" display="block">
                                                {edu.period}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            {index < educationData.length - 1 && <Divider className="education-divider" />}
                        </React.Fragment>
                    ))}
                </List>
            </Box>

            {/* Center section */}
            <Box className="section-box section-box-center">
                <Home setShowCareer={setShowCareer} setShowLife={setShowLife} />
            </Box>

            {/* Right section - Personal Information */}
            <Box className="personal-info-container">
                <Box className="section-box section-box-right">
                    <Typography variant="h4" className="section-title">
                        {t('Personal Info')}
                    </Typography>
                    <List className="personal-info-list">
                        {personalInfo.map((info, index) => (
                            <Paper
                                className={`personal-info-item ${index === personalInfo.length - 1 ? 'last-item' : ''}`}
                                elevation={3}
                                key={index}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="personal-info-avatar">
                                            <info.icon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="subtitle1" sx={{ color: '#457b9d' }}>{info.primary}</Typography>}
                                        secondary={
                                            info.link ? (
                                                <Link
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    color="#457b9d"
                                                    underline="hover"
                                                >
                                                    <Typography variant="body2" color="#457b9d">
                                                        {info.secondary}
                                                    </Typography>
                                                </Link>
                                            ) : (
                                                <Typography variant="body2" color="#457b9d">
                                                    {info.secondary}
                                                </Typography>
                                            )
                                        }
                                    />
                                </ListItem>
                            </Paper>
                        ))}
                    </List>
                </Box>
            </Box>

            {/* Career and Life sections */}
            <Box className={`career-life-box career-box ${showCareer ? 'show' : ''}`}>
                <div className="career-life-content">
                    <Career />
                </div>
            </Box>
            <Box className={`career-life-box life-box ${showLife ? 'show' : ''}`}>
                <div className="career-life-content">
                    <Life />
                </div>
            </Box>
        </Box>
    );
}

export default HomePage;