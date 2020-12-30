import React, { useState, useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Divider ,ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, MuiThemeProvider } from '@material-ui/core';
import './planListStyles.scss';
import { PlannedTripsContext, TripActionsContext } from "../../../../context/context";
import DeleteIcon from '@material-ui/icons/Delete';
import PauseIcon from '@material-ui/icons/Pause';
import DoneAllIcon from '@material-ui/icons/DoneAll';


const PlanList = () => {
    const { deleteTrip, plannedTrips, completeTrip, completedTrip } = useContext(PlannedTripsContext);

    /*const { deleteTrip, plannedTrips } = useContext(TripActionsContext);*/

    return (
        <div className="planList">
            <div className="planList__title">
                <h2>PLANNED ADVENTURES</h2>
            </div>
            <div className="list__items">
                <MUIList dense={false} style={{maxHeight: '40vh', overflow: 'auto',}}>
                {plannedTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={trip.mountain + ' -- ' + trip.continent} secondary={`Start Date : ${trip.startDate} - End Date : ${trip.endDate}`}/>
                            <ListItemSecondaryAction style={{paddingRight: '240px'}}>
                                <IconButton edge="end" aria-label="finished">
                                    <DoneAllIcon style={{color: 'green'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction style={{ paddingRight: '140px'}}>
                                <IconButton edge="end" aria-label="pause" >
                                    <PauseIcon style={{color: 'yellow'}} />
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction style={{ paddingRight: '40px'}}>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTrip(trip.id)}>
                                    <DeleteIcon  style={{color: 'red'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
                </MUIList>
            </div>
        </div>
    )
}

export default PlanList;
