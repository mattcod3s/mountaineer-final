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
import useWeatherIcon from '../../../../../../useWeatherIcon';

const ListContent = () => {
    const [index, setIndex] = useContext(ConqListContext);
    let {ConqueredTrips, initialLocalDataTwo} = useContext(PlannedTripsContext);
    let [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    const [cardInfo, setCardInfo] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const {cloudyDay} = useWeatherIcon();

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
            setSpinner(false);
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
                                    handleInfoClick(trip);
                                    setSpinner(true);
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
                <div className={spinner ? 'spinner' : 'spinner__off'}></div>
                <CardContent className={spinner ? 'content__loading' : 'content__loaded'}>
                    <div className="icon">
                        <CloseIcon onClick={handleCloseClick} style={{cursor: 'pointer'}} className='inner-exit'/>
                    </div>
                    <div className="card_header">
                        <div className="header__content">
                            <Typography variant="h5" component="h2">
                                {cardData.mountain}
                            </Typography>
                            <Typography  color="textSecondary">
                                {cardData.timezone}
                            </Typography>
                        </div>
                        <div className="weather-icon">
                            <img src={cloudyDay}/>
                        </div>
                    </div>
                    <div className="card-row">
                        <Typography className="card-row-text" variant="body2" component="p">
                            Started: {cardData.startDate}
                        </Typography>
                        
                        <Typography className="card-row-text" variant="body2" component="p">
                            Conquered: {cardData.endDate}
                        </Typography>
                    </div>
                    <div className="card-row">
                        <Typography className="card-row-text" variant="body2" component="p">
                            Temperature : {cardData.temp}
                        </Typography>
                        <Typography className="card-row-text" variant="body2" component="p">
                            Humidity: {cardData.humidity}
                        </Typography>
                    </div>
                    <div className="card-row">
                        <Typography className="card-row-text" variant="body2" component="p">
                            Chance of Precipitation: {cardData.precipProbability}
                        </Typography>
                        <Typography className="card-row-text" variant="body2" component="p">
                            Wind Speed: {cardData.windSpeed}
                        </Typography>
                    </div>
                    <CardActions className="btn-card-row">
                        <Button style={{marginRight: '20px'}} size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
                
            </Card>

        </div>
    )
}

export default ListContent;
