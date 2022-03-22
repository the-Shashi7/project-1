import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Icon,
    TextField,
    Select,
    MenuItem,
    TablePagination,
    CircularProgress
} from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { Box, styled } from '@mui/system';
import { SimpleCard } from "app/components";
import ContentBox from "../helpers/contentBox";
import CreatePatientDialog from './createPatient';
import PatientReducer,{IntialState} from "../../../redux/reducers/PatientReducer";
import { getPatients } from "../../../redux/actions/PatientActions";


const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))


function Patients(){
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [state,dispatch] = useReducer(PatientReducer,IntialState);

    useEffect(()=>{
        getPatients(dispatch);
    },[]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <ContentBox>
            <CreatePatientDialog open={open} handleClose={handleClose}/>
            <SimpleCard title="Patients" menu={
                <Box display="flex" justifyContent={"space-evenly"} alignItems={"center"} >
                <TextField placeholder="Search patients here" inputProps={{
                    style: {
                        padding:"10px",
                        width: '300px',
                    }
                }}/>
            <Box width="20px"/>
            <Button variant="outlined" onClick={handleClickOpen}>Add Patient</Button>
            <Box width="20px"/>
        </Box>
            }>
            {state.isLoading?
            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>BloodGroup</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Marital Status</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.patients
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((subscriber, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.first_name+" "+subscriber.last_name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.mobileNumber}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.email}
                                    </TableCell>
                                    <TableCell align="center">
                                        {subscriber.bloodGroup}
                                    </TableCell>
                                    <TableCell align="center">
                                        {subscriber.gender}
                                    </TableCell>
                                    <TableCell align="center">
                                        {subscriber.maritalStatus}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.dob}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Icon color="warning">edit</Icon>
                                        </IconButton>
                                        <IconButton>
                                            <Icon color="error">delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </StyledTable>

                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={state.patients.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>:<CircularProgress/>}
            </SimpleCard>
        </ContentBox>
    );
}

export default Patients;