import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, NativeSelect } from '@material-ui/core';
import './formStyles.scss';
import {FormStatusContext, FormStatusProvider} from '../../../../../context/context';



const Form = () => {
    const [formData, setFormData] = useContext(FormStatusContext);
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} >
                <FormControl fullWidth>
                    <InputLabel>CONTINENT</InputLabel>
                    <NativeSelect
                        value={formData.continent}
                        onChange={(e) => setFormData({ ...formData, continent : e.target.value })}
                    >
                        <option value={null}></option>
                        <option value={'all'}>All Peaks</option>
                        <option value={'top'}>Top Peaks</option>
                        <option value={'africa'}>AFRICA</option>
                        <option value={'south-am'}>SOUTH AMERICA</option>
                        <option value={'north-am'}>NORTH AMERICA</option>
                        <option value={'asia'}>ASIA</option>
                        <option value={'europe'}>EUROPE</option>
                        <option value={'aus'}>AUSTRALIA</option>
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
                        <option value={null}></option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField value={formData.startDate} variant="outlined" label="Start Date" type="date" 
                    InputLabelProps={{shrink: true}} onChange={(e) => setFormData({ ...formData, startDate : e.target.value })}></TextField>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField value={formData.endDate}  variant="outlined" label="End Date" type="date" 
                    InputLabelProps={{shrink: true}} onChange={(e) => setFormData({ ...formData, endDate : e.target.value })}></TextField>
                </FormControl>
            </Grid>
            <Button variant="outlined" color="primary" fullWidth >Create</Button>
        </Grid>
    )
}

export default Form;
