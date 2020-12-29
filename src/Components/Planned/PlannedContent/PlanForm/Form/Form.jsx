import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';


const Form = () => {
    return (
        <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="subtitle2" gutterBottom>
                            PLAN NEW ADVENTURE
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <FormControl fullWidth>
                            <InputLabel>CONTINENT</InputLabel>
                            <NativeSelect value="" >
                                <option value={null}></option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>MOUNTAIN</InputLabel>
                            <NativeSelect value="">
                            {/*selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)*/}
                                <option value={null}></option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField type="number" label="Amount" fullWidth value="" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField type="date" label="Date" fullWidth value=""/>
                    </Grid>
                    <Button variant="outlined" color="primary" fullWidth >Create</Button>
                </Grid>
    )
}

export default Form;
