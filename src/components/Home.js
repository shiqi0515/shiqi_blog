import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Home({ setShowCareer, setShowLife }) {
    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // 确保高度为100%
            overflow: 'auto', // 添加滚动条，以防内容溢出
        }}>
            <Container maxWidth="sm">
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="h2" gutterBottom sx={{ color: '#457b9d', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            {t('Shiqi Shu')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Box
                            component="img"
                            src="/photo.jpg"
                            alt={t('Shiqi Shu')}
                            sx={{
                                width: '100%',
                                maxWidth: 400, // 减小最大宽度
                                height: 'auto',
                                mb: 2, // 减小底部边距
                                boxShadow: 3,
                                borderRadius: '50%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button
                                onClick={() => setShowCareer(prev => !prev)}
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '140px',
                                    backgroundColor: '#457b9d',
                                    '&:hover': {
                                        backgroundColor: '#3d6e8d',
                                    },
                                }}
                            >
                                {t('Career')}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => setShowLife(prev => !prev)}
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '140px',
                                    backgroundColor: '#457b9d',
                                    '&:hover': {
                                        backgroundColor: '#3d6e8d',
                                    },
                                }}
                            >
                                {t('Life')}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Home;