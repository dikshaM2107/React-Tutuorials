import React from 'react';
import "./Css/ContactList.css";

function ContactList(props)
{
    return(
        <div className='list-items'>
                <li>{props.user}</li>
                <li>{props.age}</li>
        </div>
    )
}
export default ContactList;