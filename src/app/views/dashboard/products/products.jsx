import ContentBox from '../helpers/contentBox'
import FormDialog from '../products/createProduct'
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
    Select,
    MenuItem,
} from '@mui/material'
import React from 'react'
import { Box, styled } from '@mui/system'
import { useState, useEffect } from 'react'
// import PaginationTable from "../material-kit/tables/PaginationTable";
import { Breadcrumb, SimpleCard } from 'app/components'
import { element } from 'prop-types'

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

function Products() {
    const [subscribarList, setSubscribarList] = useState([])

    useEffect(() => {
        axios.get('/api/ecommerce/get-product-list').then((response) => {
            setSubscribarList(response.data)
            console.log(response.data)
        })
    }, {})

    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [popup, setPopup] = useState(true)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.post('/api/ecommerce/delete-from-cart/', { productId: productId })
        // /api/product/:id
    }

    const myStyle = {
        height: '60px',
        width: '90px',
        borderRadius: '10px',
    }
    const addProduct = () => {
        console.log('Hello')
    }

    return (
        <ContentBox>
            <SimpleCard
                title="Products"
                menu={
                    <Box
                        display="flex"
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                    >
                        <TextField
                            placeholder="Search products here"
                            inputProps={{
                                style: {
                                    padding: '10px',
                                    width: '300px',
                                },
                            }}
                        />
                        <Box width="20px" />
                        <FormDialog>
                            <Button
                                variant="outlined"
                                onClick={() => addProduct()}
                            >
                                Add Product{' '}
                            </Button>
                        </FormDialog>
                        <Box width="20px" />
                        <Select
                            value="none"
                            inputProps={{
                                style: {
                                    padding: '10px',
                                    // width: '300px',
                                },
                            }}
                        >
                            <MenuItem value={'none'}>Sort by</MenuItem>
                            <MenuItem value={10}>Newly added</MenuItem>
                            <MenuItem value={10}>Highest Priced</MenuItem>
                        </Select>
                    </Box>
                }
            >
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
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
                                            <img
                                                style={myStyle}
                                                src={subscriber.imgUrl}
                                            />
                                        </TableCell>
                                        <TableCell align="left">
                                            {subscriber.title}
                                        </TableCell>
                                        <TableCell align="left">
                                            {subscriber.totalUnit}
                                        </TableCell>
                                        <TableCell>
                                            ₹ {subscriber.price}
                                        </TableCell>
                                        <TableCell>
                                            ₹ {subscriber.DiscountedPrice}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon color="warning">
                                                    edit
                                                </Icon>
                                            </IconButton>
                                            <IconButton
                                                onClick={() =>
                                                    deleteProduct(subscriber.id)
                                                }
                                            >
                                                <Icon color="error">
                                                    delete
                                                </Icon>
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
    )
}

export default Products
