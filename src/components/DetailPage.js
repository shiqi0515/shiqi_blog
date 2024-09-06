import React from "react";
import { useParams, useLocation } from "react-router-dom";

function DetailPage() {
    const { type, id } = useParams();
    const location = useLocation();
    const cardData = location.state?.cardData;

    if (!cardData) {
        return <div>加载中...</div>;
    }

    const renderContent = () => {
        switch (type) {
            case 'travel':
                return (
                    <>
                        <h2>{cardData.destination}</h2>
                        <p>日期: {cardData.date}</p>
                    </>
                );
            case 'cooking':
                return (
                    <>
                        <h2>{cardData.name}</h2>
                        <p>{cardData.subtitle}</p>
                    </>
                );
            // 可以添加更多类型的处理
            default:
                return <p>未知类型的卡片</p>;
        }
    };

    return (
        <div>
            <h1>详情页</h1>
            <p>类型: {type}</p>
            <p>ID: {id}</p>
            {renderContent()}
            {cardData.image && <img src={cardData.image} alt={cardData.destination || cardData.name} />}
        </div>
    );
}

export default DetailPage;