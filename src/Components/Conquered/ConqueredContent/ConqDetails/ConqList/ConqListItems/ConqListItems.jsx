import React, { useContext, useEffect, useState } from 'react';
import './conqListItemStyles.scss';
import { ActiveTripsContext, PlannedTripsContext, ConqListContext } from "../../../../../../context/context";
import { List as MUIList, ListItem,  ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import filterList from '../../../../../../utils/filterConqList';


const ConqListItems = () => {


    const { ConqueredTrips } = useContext(PlannedTripsContext);
    const [conqIndex, setConqIndex] = useContext(ConqListContext);
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);

    
    useEffect(() => {
        setActiveTrips(filterList(conqIndex, ConqueredTrips));
    }, [conqIndex]);

    return (
        <div className="conqListItems">
            <MUIList dense={false} style={{maxHeight: '35vh', overflow: 'auto',}} >
                {activeTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={trip.mountain + ' -- ' + trip.continent} secondary={`Start Date : ${trip.startDate} - End Date : ${trip.endDate}`}/>
                            <ListItemSecondaryAction style={{paddingRight: '30px'}}>
                                <IconButton edge="end" aria-label="info">
                                    <InfoIcon style={{color: 'white'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
        </div>
    )
}

export default ConqListItems;
