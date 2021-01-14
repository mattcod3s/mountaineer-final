import React, {useContext, useEffect, useState} from 'react';
import './listContentStyles.scss';
import {ConqStatusContext, ConqListContext, PlannedTripsContext, ActiveTripsContext} from '../../../../../../context/context';
import { List as MUIList,Card,CardActions,CardContent, Button,Typography , ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import getDataCall from '../../../../../../axios';
import globe from '../../../../../../Assets/formImg/globe.svg';
import asia from '../../../../../../Assets/formImg/asia.svg';
import africa from '../../../../../../Assets/formImg/africa.svg';
import northAmerica from '../../../../../../Assets/formImg/north-america.svg';
import southAmerica from '../../../../../../Assets/formImg/south-america.svg';
import australia from '../../../../../../Assets/formImg/australia.svg';
import europe from '../../../../../../Assets/formImg/europe.svg';
import axios from 'axios';

const ListContent = () => {
    const [index, setIndex] = useContext(ConqListContext);
    let {ConqueredTrips, initialLocalDataTwo} = useContext(PlannedTripsContext);
    let [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    const [cardInfo, setCardInfo] = useState(false);
    

    const [cardData, setCardData] = useState({
        continent : '',
        mountain: '',
        startDate: '',
        endDate: '',
        lat: 0,
        long: 0,
        timezone: '',
        temp: 0,
        humidity: '',
        icon: '', 
        precipProbability: '',
        precipIntensity: '',
        windSpeed: ''
    });
    
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

    const handleInfoClick = (trip) => {
        getDataCall(trip.lat, trip.long);
        
        setCardInfo(true);
        async function fetchData() {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const fetchURL = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${trip.lat},${trip.long}`;
            const request = await axios.get(fetchURL);

            setCardData({
                continent: trip.continent,
                mountain: trip.mountain,
                startDate: trip.startDate,
                endDate: trip.endDate,
                lat: trip.lat,
                long:trip.long,
                timezone : request.data.timezone,
                temp: request.data.currently.temperature,
                humidity: request.data.currently.humidity,
                icon: request.data.currently.icon, 
                precipProbability: request.data.currently.precipProbability,
                precipIntensity: request.data.currently.precipIntensity,
                windSpeed: request.data.currently.windSpeed
            });
            
            console.log(cardData);
            return request;
        }
        fetchData();
    }

    const handleCloseClick = () => {
        setCardInfo(false);
    }

    
    return (
        <div className='listContent'>
            
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
                                <IconButton key={trip.id} edge="end" aria-label="info" style={{color: 'white'}} onClick={() => {
                                    handleInfoClick(trip)
                                }}>
                                    <InfoIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                    
                ))}
            </MUIList>

            <div className={cardInfo ? 'arrow-left__active' : 'arrow-left'}></div>
            <Card className={cardInfo ? 'cardInfo__active' : 'cardInfo'} >
                
                <CardContent>
                    <CloseIcon onClick={handleCloseClick} style={{cursor: 'pointer'}}/>
                    <Typography color="textSecondary" gutterBottom>
                       Conquered Peak {cardData.icon}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {cardData.mountain}
                    </Typography>
                    <Typography  color="textSecondary">
                        {cardData.timezone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Started: {cardData.startDate}
                    <br />
                        Conquered: {cardData.endDate}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Temperature : {cardData.temp}
                    <br />
                        Humidity: {cardData.humidity}
                    <br />
                        Chance of Precipitation: {cardData.precipProbability}
                    <br />
                        Precipitation Intensity: {cardData.precipIntensity}
                     <br />
                        Precipitation Intensity: {cardData.precipIntensity}
                    <br />
                        Wind Speed: {cardData.windSpeed}
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
                
            </Card>

        </div>
    )
}

export default ListContent;
