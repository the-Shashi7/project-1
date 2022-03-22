import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TextField,
    Button,
    TablePagination,
} from '@mui/material';
import React from 'react';
import { Box, styled } from '@mui/system';
import { SimpleCard } from "app/components";
import ContentBox from "../helpers/contentBox";
import CreateDoctorDialog from './createDoctorModal';


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


const subscribarList = [
    
]

function Doctors(){
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [open, setOpen] = React.useState(false);

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
            <CreateDoctorDialog open={open} handleClose={handleClose}/>
            <SimpleCard title="Doctors" menu={
                <Box display="flex" justifyContent={"space-evenly"} alignItems={"center"} >
                <TextField placeholder="Search doctors here" inputProps={{
                    style: {
                        padding:"10px",
                        width: '300px',
                    }
                }}/>
            <Box width="20px"/>
            <Button variant="outlined" onClick={handleClickOpen}>Add doctor</Button>
            <Box width="20px"/>
        </Box>
            }>
            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Join Date</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subscribarList
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((subscriber, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        {subscriber.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.company}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.date}
                                    </TableCell>
                                    <TableCell>{subscriber.status}</TableCell>
                                    <TableCell>${subscriber.amount}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Icon color="error">close</Icon>
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
                    count={subscribarList.length}
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
            </Box>
            </SimpleCard>

        </ContentBox>
    );
}

export default Doctors;