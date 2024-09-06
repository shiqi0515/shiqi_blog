import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CustomCard from './common/CustomCard';
import CustomSlider from './common/CustomSlider';
import { useTranslation } from 'react-i18next';

function Life() {
    const { t } = useTranslation();

    const travels = [
        {
            destination: t('Nara, Japan'),
            image: "/travel/japan.jpg",
        },
        {
            destination: t('Kerid Crater, Iceland'),
            image: "/travel/iceland.jpg",
        },
        {
            destination: t('Paris, France'),
            image: "/travel/france.jpg",
        }
    ];

    const recipes = [
        {
            name: t('Homemade Pizza'),
            image: "/path/to/pizza-image.jpg",
        },
        {
            name: t('Sushi Rolls'),
            image: "/path/to/sushi-image.jpg",
        },
        {
            name: t('Chocolate Lava Cake'),
            image: "/path/to/lava-cake-image.jpg",
        }
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
                    {t('Life')}
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h4" gutterBottom color="#457b9d">
                            {t('Travel')}
                        </Typography>
                        <CustomSlider>
                            {travels.map((travel, index) => (
                                <div key={index}>
                                    <CustomCard
                                        image={travel.image}
                                        title={travel.destination}
                                        subtitle={travel.date}
                                        icon={TravelExploreIcon}
                                        type="travel"
                                        id={index + 1}
                                    />
                                </div>
                            ))}
                        </CustomSlider>
                    </Box>

                    <Box>
                        <Typography variant="h4" gutterBottom color="#457b9d" sx={{ mt: 2 }}>
                            {t('Cooking')}
                        </Typography>
                        <CustomSlider>
                            {recipes.map((recipe, index) => (
                                <div key={index}>
                                    <CustomCard
                                        title={recipe.name}
                                        description={recipe.description}
                                        image={recipe.image}
                                        icon={RestaurantIcon}
                                        type="recipe"
                                        id={index + 1}
                                    />
                                </div>
                            ))}
                        </CustomSlider>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
}

export default Life;