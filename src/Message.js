import React from 'react'
import { Typography, CardContent, Card, Container, Toolbar, Grid } from '@mui/material';
import './Message.css';

function Message({ username, message }) {
    const isUser = username === message.username;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <div className="user_name">
                <b><i>{message.username}</i></b>
            </div>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <Container>
                    
                    <Typography
                        color="black"
                        variant="h6"
                        component="h6"
                    >
                        {message.message}
                    </Typography>
                </Container>
            </Card>
        </div>
    )
}

export default Message
