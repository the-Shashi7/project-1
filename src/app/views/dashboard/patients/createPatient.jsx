
import React from 'react'
import {Button,TextField,Dialog,DialogActions,DialogContent,Select,MenuItem,Grid,DialogContentText,DialogTitle} from "@mui/material";

export default function CreatePatientDialog({ open,handleClose}) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth="true"
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add new patient</DialogTitle>
                
                <DialogContent >
                    <DialogContentText>
                    </DialogContentText>
                    <Grid container columns={2} spacing={"20px"}>
                        <Grid item >
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="First Name"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Last Name"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Mobile number"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                        <Select
                            fullWidth
                        >
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="O">O</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                        <Select>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select>
                                <MenuItem value="single">Single</MenuItem>
                                <MenuItem value="married">Married</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Patient
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}