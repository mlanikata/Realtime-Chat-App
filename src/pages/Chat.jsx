import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import ChatBox from '../components/ChatBox';
import RightSidebar from '../components/RightSidebar';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat__container">
                <LeftSidebar />
                <ChatBox />
                <RightSidebar />
            </div>
        </div>
    );
}

export default Chat;
 