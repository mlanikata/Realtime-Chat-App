import React from 'react';
import assets from '../assets/assets';


const ChatBox = () => {
    return (
        <div className='chat__box'>
            <div className="chat__user">
                <img src={assets.profile_img} alt="" />
                <p>Richard Sanford <img className='dot' src={assets.green_dot} alt="" /></p>
                <img src={assets.help_icon} className='help' alt="" />
            </div>

        <div className="chat__msg">
            <div className="s__msg">
                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            <div className="s__msg">
                <img className='msg__img' src={assets.pic1} alt="" />
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            <div className="r__msg">
                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
        </div>
            <div className="chat__input">
                <input type="text" placeholder='Send a message' />
                <input type="file" id='image' accept='image/png, image/jpeg' hidden />
                <label htmlFor="image">
                    <img src={assets.gallery_icon} alt="" />
                </label>
                <img src={assets.send_button} alt="" />
            </div>
        </div>
    );
}

export default ChatBox;
