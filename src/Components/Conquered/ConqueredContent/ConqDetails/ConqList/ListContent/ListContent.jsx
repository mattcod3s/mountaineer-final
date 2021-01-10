import React, {useContext, useEffect, useState} from 'react';
import './listContentStyles.scss';
import {ConqStatusContext, ConqListContext, PlannedTripsContext, ActiveTripsContext} from '../../../../../../context/context';
import { List as MUIList,Card,CardActions,CardContent, Button,Typography , ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import globe from '../../../../../../Assets/formImg/globe.svg';
import asia from '../../../../../../Assets/formImg/asia.svg';
import africa from '../../../../../../Assets/formImg/africa.svg';
import northAmerica from '../../../../../../Assets/formImg/north-america.svg';
import southAmerica from '../../../../../../Assets/formImg/south-america.svg';
import australia from '../../../../../../Assets/formImg/australia.svg';
import europe from '../../../../../../Assets/formImg/europe.svg';

const ListContent = () => {
    const [index, setIndex] = useContext(ConqListContext);
    let {ConqueredTrips, initialLocalDataTwo} = useContext(PlannedTripsContext);
    let [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    const [cardInfo, setCardInfo] = useState(false);
    
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

    useEffect(() => {
        
        switch (index) {
            case 1:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'AUSTRALIA');
                setActiveTrips(activeTrips);
                break;
            case 2:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'SOUTH_AMERICA');
                setActiveTrips(activeTrips);
                break;
            case 3:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'NORTH_AMERICA');
                setActiveTrips(activeTrips);
                break;
            case 4:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'ASIA');
                setActiveTrips(activeTrips);
                break;
            case 5:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'EUROPE');
                setActiveTrips(activeTrips);
                break;
            case 6:
                activeTrips = ConqueredTrips.filter((trip) => trip.continent === 'AFRICA');
                setActiveTrips(activeTrips);
                break;
            default:
                setActiveTrips(ConqueredTrips);
                break;
        }
        return activeTrips;
        
    }, [index, conqStatus]);

    const handleInfoClick = () => {
        setCardInfo(true);
        console.log(cardInfo);
    }

    const handleCloseClick = () => {
        setCardInfo(false);
        console.log(cardInfo);
    }

    return (
        <div className='listContent'>
            <Card className={cardInfo ? 'cardInfo__active' : 'cardInfo'} >
                <CardContent>
                    <CloseIcon onClick={handleCloseClick} style={{cursor: 'pointer'}}/>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    benevolent
                    </Typography>
                    <Typography  color="textSecondary">
                    adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
                
            </Card>
            <MUIList dense={false} style={{maxHeight: '38vh', overflow: 'auto',}}>
                {activeTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={chooseImg(trip)}>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText style={{color: 'rgb(220,220,220)'}} primary={ trip.mountain } secondary={`Conquered : ${trip.endDate}`}/>
                            <ListItemSecondaryAction style={{ paddingRight: '30px'}}>
                                <IconButton edge="end" aria-label="info" style={{color: 'white'}} onClick={handleInfoClick}>
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
