import React from 'react';
import './plannedContStyles.scss';
import PlanForm from './PlanForm/PlanForm';
import PlanList from './PlanList/PlanList';


const PlannedContent = () => {
    return (
        <div className="plannedContent">
            <PlanForm />
            <PlanList />
        </div>
    )
}

export default PlannedContent;
