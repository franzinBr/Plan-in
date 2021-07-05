import React from 'react';
import { Class } from './ClassFrame.style';
import { ReactComponent as Thumb } from '../../assets/thumb.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import DateFormatter from '../../utils/DateFormatter';

const ClassFrame = ({ _class }) => {
    const date = new DateFormatter(_class.date);

    return (
        <Class className="animeLeft">
            <div className="title">
                <h1>{_class.name}</h1>
            </div>
            <div className="thumb">
                <Thumb />
            </div>
            <div className="date">
                <div className="calendar">
                    <Calendar />
                </div>
                <p>{date.getFormattedDate()}</p>
            </div>
        </Class>
    );
};

export default ClassFrame;
