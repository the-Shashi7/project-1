import React from 'react'
import { Card } from '@mui/material'
import { styled, Box } from '@mui/system'

const CardRoot = styled(Card)(() => ({
    height: '100%',
    padding: '20px 24px',
}))

const CardTitle = styled('div')(({ subtitle }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: !subtitle && "16px",
}))

const SimpleCard = ({ children, title, subtitle, icon ,menu}) => {
    return (
        <CardRoot elevation={6}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <CardTitle subtitle={subtitle}>
                        {title}
                    </CardTitle>
                    {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
                </Box>
                {menu}
            </Box>
            {children}
        </CardRoot>
    )
}

export default SimpleCard
