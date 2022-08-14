import Grid from '@mui/material/Grid'; // Grid version 1
import styled from 'styled-components';
import { Paper } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Maingrid = () => {

    return(
        <Grid container spacing={2}>
        <Grid xs={8} item={true}>
            <Item>xs=8</Item>
        </Grid>
        <Grid xs={4} item={true}>
            <Item>xs=4</Item>
        </Grid>
        <Grid xs={4} item={true}>
            <Item>xs=4</Item>
        </Grid>
        <Grid xs={8} item={true}>
            <Item>xs=8</Item>
        </Grid>
        </Grid>
    )
}

export default Maingrid