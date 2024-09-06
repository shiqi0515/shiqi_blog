import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const CustomCard = ({ title, subtitle, content, image, type }) => {
    const isLifeCard = type === 'travel' || type === 'cooking';
    return (
        <Card
            className={`custom-card ${type}`}
            sx={{
                border: "1.5px solid #457b9d",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                height: '100hv',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {isLifeCard ? (
                <>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            padding: '8px',
                            zIndex: 1,
                        }}
                    >
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="body2">
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </>
            ) : (
                <>
                    {image && (
                        <CardMedia
                            component="img"
                            image={image}
                            alt={title}
                            className="custom-card-media"

                        />
                    )}
                    <CardContent
                        className="custom-card-content"
                        sx={{
                            flexGrow: 1,
                            overflow: 'hidden'
                        }}
                    >
                        <Typography variant="h6" component="div" className="card-title">
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="body2" color="text.secondary" className="card-subtitle">
                                {subtitle}
                            </Typography>
                        )}
                        {content && (
                            <Typography variant="body2" color="text.secondary" className="card-content">
                                {content}
                            </Typography>
                        )}
                    </CardContent>
                </>
            )}
        </Card>
    );
};

export default CustomCard;
