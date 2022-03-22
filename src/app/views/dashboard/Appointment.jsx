import PaginationTable from "../material-kit/tables/PaginationTable";
import { Breadcrumb, SimpleCard } from 'app/components'
import ContentBox from "./helpers/contentBox";
import {Box,Button} from "@mui/material"; 

function Appointment(){
    return (
        <ContentBox>
            <SimpleCard title="Appointments" subtitle="Hello world" menu={<Box>
                <Button variant="outlined">Create New</Button>
            </Box>}>
            {/* <PaginationTable></PaginationTable> */}
            </SimpleCard>
        </ContentBox>
    );
}

export default Appointment;