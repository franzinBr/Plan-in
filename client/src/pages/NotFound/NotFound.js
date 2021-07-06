import React from 'react';
import { ReactComponent as NotFoundImg } from '../../assets/not-found.svg';
import { NotFoundContainer } from './NotFound.style';

const NotFound = () => {
    return (
        <NotFoundContainer className="animeTop">
            <div>
                <NotFoundImg />
            </div>
            <h1>Not Found :(</h1>
        </NotFoundContainer>
    );
};

export default NotFound;
