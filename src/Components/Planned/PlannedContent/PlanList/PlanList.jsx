import React, { useContext, useState } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import './planListStyles.scss';
import { PlannedTripsContext } from "../../../../context/context";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import globe from '../../../../Assets/formImg/globe.svg';
import asia from '../../../../Assets/formImg/asia.svg';
import africa from '../../../../Assets/formImg/africa.svg';
import northAmerica from '../../../../Assets/formImg/north-america.svg';
import southAmerica from '../../../../Assets/formImg/south-america.svg';
import australia from '../../../../Assets/formImg/australia.svg';
import europe from '../../../../Assets/formImg/europe.svg';
import ConqSnackbar from '../../../SnackBar2/SnackBar2';



const PlanList = () => {
    const { deleteTrip, plannedTrips, completeTrip } = useContext(PlannedTripsContext);
    const [ open, setOpen ] = useState(false);
  
    const chooseImg = (trip) => {
        let currentImage;
        switch (trip.continent) {
            case 'SOUTH_AMERICA':
                currentImage = southAmerica;
                break;
            case 'NORTH_AMERICA':
                currentImage = northAmerica;
                break;
            case 'ASIA':
                currentImage = asia;
                break;
            case 'AFRICA':
                currentImage = africa;
                break;
            case 'AUSTRALIA':
                currentImage = australia;
                break;
            case 'EUROPE':
                currentImage = europe;
                break;
            default:
                currentImage = globe;
                break;
        }
        return currentImage;
    }

    return (
        <div className="planList">
            <div className="planList__title">
                <h2>PLANNED ADVENTURES</h2>
            </div>
            <div className="list__items">
                <ConqSnackbar open={open} setOpen={setOpen}/>
                <MUIList dense={false} style={{maxHeight: '40vh', overflow: 'auto',}}>
                {plannedTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={chooseImg(trip)}>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText  primary={ trip.continent} secondary={`Start: ${trip.startDate}`}/>
                            <ListItemSecondaryAction style={{paddingRight: '100px'}}>
                                <IconButton edge="end" aria-label="finished" onClick={() => {
                                    completeTrip(trip);
                                    setOpen(true);
                                    }}>
                                    <DoneAllIcon style={{color: 'green'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction style={{ paddingRight: '30px'}}>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTrip(trip.id)}>
                                    <DeleteIcon  style={{color: 'red'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
                </MUIList>
            </div>
            <div className={plannedTrips.length === 0 ? 'emptyList__text__active' : 'emptyList__text'}>
                <h1>NO PLANNED TRIPS</h1>
            </div>
        </div>
    )
}

export default PlanList;
