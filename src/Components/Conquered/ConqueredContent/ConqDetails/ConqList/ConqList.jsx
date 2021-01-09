import React from 'react';
import './conqListStyles.scss';
import ListHeader from './ListHeader/ListHeader';
import ListContent from './ListContent/ListContent';

const ConqList = () => {
    return (
        <div className="conqList">
            <ListHeader />
            <ListContent />
        </div>
    )
}

export default ConqList;
