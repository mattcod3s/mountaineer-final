import React, { useContext } from 'react';
import './conqListItemStyles.scss';
import { PlannedTripsContext, TripActionsContext, FormStatusContext, ConqListContext } from "../../../../../../context/context";
import { List as MUIList, ListItem, Typography, ListItemAvatar, Divider ,ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, MuiThemeProvider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';


const ConqListItems = () => {

    const { completeTrip, completedTrip, ConqueredTrips } = useContext(PlannedTripsContext);
    const [conqIndex, setConqIndex] = useContext(ConqListContext);

    return (
        <div className="conqListItems">
            <MUIList dense={false} style={{maxHeight: '35vh', overflow: 'auto',}}>
                {ConqueredTrips.map((trip) => (
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
