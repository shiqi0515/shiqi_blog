import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CustomCard from './common/CustomCard';
import CustomSlider from './common/CustomSlider';
import { useTranslation } from 'react-i18next';

function Career() {
    const { t } = useTranslation();

    const workExperience = [
        {
            title: t('Frontend Developer'),
            subtitle: t('Part-time'),
            company: t('Granode Materials'),
            period: t('May 2024 - Present'),
            description: t('Description for Granode Materials'),
        },
        {
            title: t('Full-stack Engineer'),
            subtitle: t('Seasonal'),
            company: t('Shenzhen Tiansenfu Property Management Co., Ltd'),
            period: t('Jun 2023 - Aug 2023'),
            description: t('Description for Shenzhen Tiansenfu'),
        },
    ];

    const projects = [
        {
            title: t('Research of appropriate luminance level of monitor screens in the workplace'),
            company: t('Sogeti Sverige, Borlänge'),
            period: t('Jun 2023 - Aug 2023'),
            description: t('Description for Research Project'),
        },
    ];

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            py: 2,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            <Container maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h3" gutterBottom align="center" color="#457b9d">
                    {t('Career')}
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h4" gutterBottom color="#457b9d">
                            {t('Work Experience')}
                        </Typography>
                        <CustomSlider>
                            {workExperience.map((work, index) => (
                                <div key={index}>
                                    <CustomCard
                                        title={`${work.title} | ${work.subtitle}`}
                                        subtitle={`${work.company} | ${work.period}`}
                                        content={work.description}
                                        type="career"
                                        id={index}
                                    />
                                </div>
                            ))}
                        </CustomSlider>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h4" gutterBottom color="#457b9d">
                            {t('Projects')}
                        </Typography>
                        <CustomSlider>
                            {projects.map((project, index) => (
                                <div key={index}>
                                    <CustomCard
                                        title={project.title}
                                        subtitle={`${project.company} | ${project.period}`}
                                        content={project.description}
                                        type="project"
                                        id={index}
                                    />
                                </div>
                            ))}
                        </CustomSlider>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Career;