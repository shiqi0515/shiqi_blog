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
        switch (type) {
            case 'travel':
                return (
                    <>
                        <h3>{cardData.destination}</h3>
                        <p>日期: {cardData.date}</p>
                        <img src={cardData.image} alt={cardData.destination} />
                    </>
                );
            case 'cooking':
                return (
                    <>
                        <h3>{cardData.name}</h3>
                        <p>{cardData.subtitle}</p>
                        <img src={cardData.image} alt={cardData.name} />
                    </>
                );
            // 可以添加更多类型的处理
            default:
                return <p>未知类型的卡片</p>;
        }
    };

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom>
                    {cardData.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {cardData.description}
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