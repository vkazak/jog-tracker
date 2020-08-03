import React, { useState, useEffect } from 'react';
import { EmptyJogsView } from './empty_jogs_view';
import { getJogsForUser } from '../request/request';
import './index.css';
import { useHistory } from 'react-router-dom';

export function JogsView(props) {
    const history = useHistory();
    const [jogs, setJogs] = useState([]);

    useEffect(() => {
        getJogsForUser()
            .then(setJogs)
            .catch(console.log)
    }, []);

    if (jogs.length > 0) {
        return (
            <div> 
                { jogs.map(jog => 
                    <JogItem jog={jog} key={jog.id} />
                ) }
                <button className="add-jog-button" onClick={() => history.push('/edit')}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    } else {
        return <EmptyJogsView />
    }
}

function JogItem(props) {
    const jog = props.jog;
    const date = new Date(jog.date * 1000);

    const description = [
        {
            name: '', 
            value: date.toLocaleDateString()
        },
        {
            name: 'Speed', 
            value: (jog.distance / (jog.time / 60)).toFixed(0) + ' km/h'
        },
        {
            name: 'Distance', 
            value: jog.distance + ' km'
        },
        {
            name: 'Time', 
            value: jog.time + ' min'
        }
    ];

    const makeJogDescriptionLine = ({ name, value }) => {
        if (name !== '') name += ': ';
        return (
            <p>
                <span className='description-name'>{name}</span>
                <span className='description-value'>{value}</span>
            </p>
        )
    };

    return(
        <div>
            <div className='jog-item-container'>
                <img className='jog-icon' alt='Jog icon'/>
                <div className='description-box'>
                     { description.map(makeJogDescriptionLine) }
                </div>
            </div>
            <hr/>
        </div>
    )
}