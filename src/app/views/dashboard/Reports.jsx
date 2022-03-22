import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material';
import React from 'react';
import { Box, styled } from '@mui/system';
import { SimpleCard } from "app/components";
import ContentBox from "./helpers/contentBox";

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
    {
        name: 'Dolo 650',
        date: '18 january, 2019',
        amount: 100,
        DiscountedPrice: 70,
        inStock: 45,
        // company: 'ABC Fintech LTD.',
    },
    
]


function Reports(){

    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <ContentBox>
            <SimpleCard title="Products">
            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>In Stock</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Discounted Price</TableCell>
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

export default Reports;