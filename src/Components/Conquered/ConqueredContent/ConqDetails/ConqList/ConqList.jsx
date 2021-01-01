import React, { useContext } from 'react';
import './conqListStyles.scss';
import ConqListHeader from './ConqListHeader/ConqListHeader';
import ConqListItems from './ConqListItems/ConqListItems';

const ConqList = () => {

    return (
        <div className="conqList">
            <ConqListHeader />
            <ConqListItems />
        </div>
    )
}

export default ConqList;
