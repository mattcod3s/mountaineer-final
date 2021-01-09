import React, {useContext, useEffect} from 'react';
import './listContentStyles.scss';
import {ConqStatusContext, ConqListContext, PlannedTripsContext, ActiveTripsContext} from '../../../../../../context/context';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const ListContent = () => {
    const [index, setIndex] = useContext(ConqListContext);
    let {initialLocalDataTwo} = useContext(PlannedTripsContext);
    let [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    useEffect(() => {
        
        switch (index) {
            case 1:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'AUSTRALIA');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            case 2:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'SOUTH_AMERICA');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            case 3:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'NORTH_AMERICA');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            case 4:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'ASIA');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            case 5:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'EUROPE');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            case 6:
                activeTrips = initialLocalDataTwo.filter((trip) => trip.continent === 'AFRICA');
                setActiveTrips(activeTrips);
                
                return activeTrips;
            default:
                setActiveTrips(initialLocalDataTwo);
                
                return activeTrips;
                
        }
        
    }, [index, conqStatus]);

    return (
        <div className='listContent'>
            <MUIList dense={false} style={{maxHeight: '35vh', overflow: 'auto',}}>
                {activeTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText  primary={ trip.continent } secondary={`Start: ${trip.startDate}`}/>
                            <ListItemSecondaryAction style={{ paddingRight: '30px'}}>
                                <IconButton edge="end" aria-label="info">
                                    <InfoIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
        </div>
    )
}

export default ListContent;
