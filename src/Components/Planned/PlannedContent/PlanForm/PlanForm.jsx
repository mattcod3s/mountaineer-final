import React from 'react';
import './planFormStyles.scss';
import Form from './Form/Form';
import PlanInfo from './PlanInfo/PlanInfo';
import { Typography } from '@material-ui/core';

const PlanForm = () => {
  
    return (
        <div className="planForm">
            <div className="planForm__wrapper">
                <div className="planForm__title">
                    <Typography align="center" gutterBottom className="planForm__title">
                        PLAN NEW ADVENTURE
                    </Typography>
                </div>
                <div className="planForm__innerCont">
                    <div className="planForm__info">
                        <PlanInfo />
                    </div>
                    <div className="planForm__form">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanForm;
