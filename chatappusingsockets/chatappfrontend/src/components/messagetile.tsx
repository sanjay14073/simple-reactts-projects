import React from 'react';

interface MessageTileProps {
    content: string;
}

const MessageTile: React.FC<MessageTileProps> = ({ content }) => {
    return (
        <div>
            <h2>{content}</h2>
        </div>
    );
};

export default MessageTile;
