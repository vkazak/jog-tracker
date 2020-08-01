import React from 'react';
import './index.css';
import { loginByUUID } from '../request/request';
import { useHistory } from 'react-router-dom';

export function LogInView(props) {
    const history = useHistory();
    
    const letMeIn = async () => {
        try {
            const uuid = 'hello';
            const token = await loginByUUID(uuid);
            localStorage.setItem('token', token);
            console.log(token);
            history.push('/jogs');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='container'>
            <div className='outer-rectangle'>
                <div className='content-col'>
                    <img className='bear-image' alt='Bear face' />
                    <button className='let-me-button' onClick={letMeIn}> 
                        Let me in 
                    </button> 
                </div>
            </div>
        </div>
    )
}