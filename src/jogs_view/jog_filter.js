import React from 'react';
import './jog_filter.css';
import ReactDatePicker from 'react-datepicker';

export function JogFilter(props) {
    return (
        <div className="jog-filter-container">
            <div className="jog-filter-input-group">
                <label htmlFor="date-from">Date from</label>
                <ReactDatePicker 
                    id="date-from" 
                    selected={props.dateFrom} 
                    onChange={ (date) => props.setDateFrom(date) }
                /> 
            </div>
            <div className="jog-filter-input-group">
                <label htmlFor="date-to">Date to</label>
                <ReactDatePicker 
                    id="date-to"
                    selected={props.dateTo}
                    onChange={ (date) => props.setDateTo(date) } 
                /> 
            </div>
        </div>
    )
}