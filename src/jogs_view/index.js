import React, { useState } from 'react';
import { EmptyJogsView } from './empty_jogs_view';

export function JogsView(props) {

    const [jogs, setJogs] = useState([]);

    if (jogs.length > 0) {
        return (
            <p></p>
        )
    } else {
        return <EmptyJogsView />
    }
}