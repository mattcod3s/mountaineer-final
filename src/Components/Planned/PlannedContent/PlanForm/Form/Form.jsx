import React, { useState, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import './formStyles.scss';
import {FormStatusContext, PlannedTripsContext} from '../../../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import constants from '../../../../../constants/constants';
import formatDate from '../../../../../utils/formatDate';
import CustomizedSnackbar from '../../../../SnackBar/SnackBar';

const Form = () => {

    const [formData, setFormData] = useContext(FormStatusContext);
    const { addTrip } = useContext(PlannedTripsContext);
    const [dateError, setDateError] = useState(false);
    const [ open, setOpen ] = useState(false);


    const handleFormClick = (e) => {
        if (formData.continent === '' || formData.mountain === '' || formData.startDate === '' || formData.endDate === '') {
            setFormData({id : '', continent: '', mountain: '', startDate: '', endDate: '', img: ''});
        } else if (formatDate(formData.startDate, formData.endDate) == true) {
            setFormData({id : '', continent: '', mountain: '', startDate: '', endDate: '', img: ''});
        } else {
            e.preventDefault();
            const pTrip = {...formData, id : uuidv4(), continent : formData.continent, mountain : formData.mountain, startDate : formData.startDate, endDate: formData.endDate, img: ''}
            addTrip(pTrip);
            setOpen(true);
        }
        setFormData({id : '', continent: '', mountain: '', startDate: '', endDate: '', img : ''});
        setDateError(formatDate(formData.startDate, formData.endDate));
        
    }


    return (
        <Grid container spacing={2}>
            <CustomizedSnackbar open={open} setOpen={setOpen}/>
            <Grid item xs={6} >
                <FormControl fullWidth>
                    <InputLabel>CONTINENT</InputLabel>
                    <NativeSelect
                        value={formData.continent}
                        onChange={(e) => {
                            setFormData({ ...formData, continent : e.target.value })
                        }}
                    >
                        <option value={null}></option>
                        {constants.map((cont) => <option key={uuidv4()} value={cont.continent}>{cont.continent}</option>)}
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>MOUNTAIN</InputLabel>
                    <NativeSelect
                        value={formData.mountain}
                        onChange={(e) => setFormData({ ...formData, mountain : e.target.value })}
                    >
                        <option key={uuidv4()} value={null}></option>
                        
                        {constants.map((cont) => {
                            if (formData.continent === cont.continent){
                                return (cont.mountains.map((m) => <option key={uuidv4()} value={m.name}>{m.name}</option>))
                            }
                        })}
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField error={dateError ? true : false} helperText={dateError ? 'Must be before End Date':''} value={formData.startDate} variant="outlined" label="Start Date" type="date" 
                    InputLabelProps={{shrink: true}} onChange={(e) => {
                        setFormData({ ...formData, startDate : e.target.value })
                        
                    }}></TextField>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField error={dateError ? true : false}  helperText={dateError ? 'Must be after Start Date':''} value={formData.endDate}  variant="outlined" label="End Date" type="date" 
                    InputLabelProps={{shrink: true}} onChange={(e) => {
                        setFormData({ ...formData, endDate : e.target.value})
                        
                    }}></TextField>
                </FormControl>
            </Grid>
            <Button variant="outlined" color="primary" fullWidth onClick={handleFormClick}>Create</Button>
        </Grid>
    )
}

export default Form;
