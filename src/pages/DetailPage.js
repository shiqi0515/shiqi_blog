import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function DetailPage() {
    const { t } = useTranslation();
    const { type, id } = useParams();
    const navigate = useNavigate();

    // 这里应该根据 type 和 id 获取详细信息
    // 为了演示，我们使用一些假数据
    const details = {
        title: t(`${type} ${id}`),
        description: t(`Detailed description for ${type} ${id}...`),
    };

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom>
                    {details.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {details.description}
                </Typography>
                <Button variant="contained" onClick={() => navigate(-1)}>
                    {t('Back')}
                </Button>
            </Container>
        </Box>
    );
}

export default DetailPage;