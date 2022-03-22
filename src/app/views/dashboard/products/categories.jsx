import ContentBox from "../helpers/contentBox";
import axios from 'axios'
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
    TablePagination,
    FormControl,
} from '@mui/material'
import React from 'react'
import { Box, styled } from '@mui/system'
// import PaginationTable from "../material-kit/tables/PaginationTable";
import { Breadcrumb, SimpleCard } from 'app/components';


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


const subscribarList = []

axios.get('/api/ecommerce/get-category-list').then((response) => {
    let products = response.data
    products.forEach((e) => {
        subscribarList.push(e)
    })
    console.log(subscribarList);
});

function Categories(){

    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const myStyle = {
        height:'60px',
        width:'90px',
        borderRadius:'10px'       
    }

    return (
        <ContentBox>
            <SimpleCard title="Categories" menu={
                <Box display="flex" justifyContent={"space-evenly"} alignItems={"center"} >
                    <Button variant="outlined">Create Category</Button>
                </Box>
            }>
            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
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
                                        <img style={myStyle} src={subscriber.imgUrl}/>
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.title}
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

export default Categories;