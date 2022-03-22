import DashboardWelcomeCard from "../cards/DashboardWelcomeCard";
import TopSellingTable from "./shared/TopSellingTable";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import {Grid} from "@mui/material";
import { styled } from "@mui/system";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

function Dashboard(){
    return (
        <ContentBox>
            <Grid>
                <DashboardWelcomeCard/>
                <StatCards />
                {/* <TopSellingTable/> */}
                {/* <RowCards/> */}
            </Grid>
        </ContentBox>

    );
}

export default Dashboard;