import React, { useState } from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { createJog } from '../request/request';

export function EditJogForm(props) {
    const history = useHistory();
    
    const [time, setTime] = useState("0");
    const [distance, setDistance] = useState("0");
    const [date, setDate] = useState(new Date());

    const onTimeChange = (event) => setTime(event.target.value);
    const onDistanceChange = (event) => setDistance(event.target.value);
    const onDateChange = (date) => setDate(date);

    const onSave = (event) => {
        event.preventDefault();
        createJog({ time, distance, date })
            .then(() => history.goBack())
            .catch(console.log)
    }

    return (
        <div className="edit-form-container">
            <div className="edit-form-box">
                <button className="close-edit-form-button" onClick={() => history.goBack()}>
                    <i className="fa fa-close"></i>
                </button>
                <form className="edit-form" onSubmit={onSave}>
                    <div className="edit-form-group">
                        <label for='distance_input'>Distance</label> 
                        <input type='text' onChange={onDistanceChange} id='distance_input'/>
                    </div>
                    <div className="edit-form-group">
                        <label for='time_input'>Time</label> 
                        <input type='text' onChange={onTimeChange} id='time_input'/>
                    </div>
                    <div className="edit-form-group">
                        <label for='date_input'>Date</label> 
                        <DatePicker selected={date} onChange={onDateChange} id='date_input'/>
                    </div>
                    <input type='submit' className="edit-form-save-button" value="Save"/>
                </form>
            </div>
        </div>
    )
}