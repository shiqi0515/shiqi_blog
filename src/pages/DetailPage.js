import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function DetailPage() {
    const { t } = useTranslation();
    const { type, id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const cardData = location.state?.cardData;

    if (!cardData) {
        return <div>加载中...</div>; // 或者显示一个错误消息
    }

    const renderContent = () => {
        const imgStyle = {
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            display: 'block',
            margin: '20px auto'
        };

        switch (type) {
            case 'travel':
                return (
                    <>
                        <h1>{cardData.destination}</h1>
                        <h3>{t('Date')}: {cardData.date}</h3>
                        <img src={cardData.image} alt={cardData.destination} style={imgStyle} />
                    </>
                );
            case 'cooking':
                return (
                    <>
                        <h1>{cardData.name}</h1>
                        <p>{cardData.subtitle}</p>
                        <img src={cardData.image} alt={cardData.name} style={imgStyle} />
                    </>
                );
            case 'work':
                return (
                    <>
                        <h1>{cardData.title}</h1>
                        <h2>{cardData.subtitle}</h2>
                        <h2>{t('Company')}: {cardData.company}</h2>
                        <h3>{t('Period')}: {cardData.period}</h3>
                        <p>{t('Description')}: {cardData.description}</p>
                        {cardData.image && <img src={cardData.image} alt={cardData.title} style={imgStyle} />}
                    </>
                );
            case 'project':
                return (
                    <>
                        <h1>{cardData.title}</h1>
                        <h2>{t('Company')}: {cardData.company}</h2>
                        <h3>{t('Period')}: {cardData.period}</h3>
                        <p>{t('Description')}: {cardData.description}</p>
                        {cardData.image && <img src={cardData.image} alt={cardData.title} style={imgStyle} />}
                    </>
                );
            default:
                return <p>Unknown type of card</p>;
        }
    };

    return (
        <Box sx={{
            py: 0,
            height: '100vh',
            overflow: 'auto'
        }}>
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom>
                </Typography>
                <Typography variant="body1" paragraph>
                </Typography>
                {renderContent()}
                <Button variant="contained" onClick={() => navigate(-1)}>
                    {t('Back')}
                </Button>
            </Container>
        </Box>
    );
}

export default DetailPage;