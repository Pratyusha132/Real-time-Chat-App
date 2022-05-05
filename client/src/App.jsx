import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apikey ="9ksb4e6av6v7";

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat>
            <ChannelListContainer

            />
            <ChannelContainer
            
            />   
        </Chat>
    </div>
  )
}

export default App;
