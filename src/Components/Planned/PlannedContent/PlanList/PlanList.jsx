import React, { useState, useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Divider ,ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, MuiThemeProvider } from '@material-ui/core';
import './planListStyles.scss';
import { PlannedTripsContext } from "../../../../context/context";
import DeleteIcon from '@material-ui/icons/Delete';
import PauseIcon from '@material-ui/icons/Pause';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const PlanList = () => {
    const [plannedTrips, setPlannedTrips] = useContext(PlannedTripsContext);
    return (
        <div className="planList">
            <MUIList dense={false} style={{maxHeight: '45vh', overflow: 'auto',}}>
                {plannedTrips.map((trip) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={trip.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={trip.mountain} secondary={`$${trip.startDate} - ${trip.endDate}`}/>
                            <ListItemSecondaryAction style={{paddingRight: '240px'}}>
                                <IconButton edge="end" aria-label="delete">
                                    <DoneAllIcon style={{color: 'green'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction style={{ paddingRight: '140px'}}>
                                <IconButton edge="end" aria-label="delete">
                                    <PauseIcon style={{color: 'yellow'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction style={{ paddingRight: '40px'}}>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon style={{color: 'red'}}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
            {/*
            <MUIList dense={false}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
                ))}
            </MUIList>
            */}
        </div>
    )
}

export default PlanList;
