import React from "react";
import { Box, Typography, Container } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CustomCard from "./common/CustomCard";
import CustomSlider from "./common/CustomSlider";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function Life() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleCardClick = (type, id, data) => {
        navigate(`/detail/${type}/${id}`, { state: { cardData: data } });
    };
    const travels = [
        {
            destination: t("Nara, Japan"),
            date: t("2024-07-16"),
            image: "/travel/japan.jpg",
        },
        {
            destination: t("Kerid Crater, Iceland"),
            date: t("2024-05-11"),
            image: "/travel/iceland.jpg",
        },
        {
            destination: t("Paris, France"),
            date: t("2023-11-17"),
            image: "/travel/france.jpg",
        },
    ];

    const recipes = [
        {
            name: t("Twice-cooked pork"),
            subtitle: t("With its unique taste, reddish colour, fat but not greasy, and full of colour and flavour, Twice-cooked pork is a dish that most people would choose for their next meal."),
            image: "/cooking/hgr.jpeg",
        },
        {
            name: t("Red-braised Pork Belly"),
            subtitle: t("Red-braised Pork Belly is fat but not greasy, sweet and fluffy, nutritious and melts in your mouth."),
            image: "/cooking/hsr.jpeg",
        },
        {
            name: t("Hot-spicy pot"),
            subtitle: t("Hot-spicy pot has the unique taste of spicy but not dry, fresh but not fishy, fragrant in the mouth and long aftertaste."),
            image: "/cooking/mlxg.jpeg",
        },
    ];

    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                py: 2,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            <Container
                maxWidth="sm"
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
                <Typography variant="h3" gutterBottom align="center" color="#457b9d">
                    {t("Life")}
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                    }}
                >
                    <Box>
                        <Typography variant="h4" gutterBottom color="#457b9d">
                            {t("Travel")}
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
                                    />
                                </div>
                            ))}
                        </CustomSlider>
                    </Box>

                    <Box>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="#457b9d"
                            sx={{ mt: 2 }}
                        >
                            {t("Cooking")}
                        </Typography>
                        <CustomSlider>
                            {recipes.map((recipe, index) => (
                                <div key={index}>
                                    <CustomCard
                                        image={recipe.image}
                                        title={recipe.name}
                                        subtitle={recipe.subtitle}
                                        icon={RestaurantIcon}
                                        type="cooking"
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

export default Life;
