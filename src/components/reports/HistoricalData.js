import 'date-fns';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MultipleSelect } from 'react-select-material-ui';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    '& > *': {
      padding: theme.spacing(2),
    },
  },
}));

const HistoricalData = () => {
  const [meters, setMeters] = React.useState([]);
  const [parameters, setParameters] = React.useState([]);
  const [meterOptions, setMeterOptions] = React.useState([]);
  const [parameterOptions, setParmeterOptions] = React.useState([]);
  const [startDate, setStartDate] = React.useState(
    new Date(Date.now()).setHours(0, 0, 0, 0)
  );
  const [endDate, setEndDate] = React.useState(Date.now());

  const classes = useStyles();

  useEffect(() => {
    axios.get('https://ems-dev.azurewebsites.net/api/meter').then((res) => {
      setMeterOptions(res.data.map((meter) => meter.meterName));
    });
    axios.get('https://ems-dev.azurewebsites.net/api/parameter').then((res) => {
      setParmeterOptions(res.data);
    });
  }, []);

  const generateReport = (e) => {
    const data = {
      startDate: new Date(startDate).toJSON(),
      endDate: new Date(endDate).toJSON(),
      meters,
      parameters,
    };
    alert('report');
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h2' gutterBottom>
          Historical Data
        </Typography>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid xs={6} spacing={3} item>
              <DateTimePicker
                label='Start Date'
                value={startDate}
                onChange={setStartDate}
                format={'dd MMM yyyy  hh:mm a'}
                fullWidth={true}
              />
            </Grid>
            <Grid xs={6} spacing={3} item>
              <DateTimePicker
                label='End Date'
                value={endDate}
                onChange={setEndDate}
                format={'dd MMM yyyy  hh:mm a'}
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <MultipleSelect
          style={{ marginTop: '20px' }}
          label='Select Meters'
          values={meters}
          options={meterOptions}
          onChange={(values) => {
            setMeters(values);
          }}
        />
        <MultipleSelect
          style={{ marginTop: '20px' }}
          label='Select Parameters'
          values={parameters}
          options={parameterOptions}
          onChange={(values) => {
            setParameters(values);
          }}
        />
        <Button
          variant='contained'
          style={{ marginTop: '20px' }}
          color='primary'
          onClick={generateReport}
        >
          Generate Report
        </Button>
      </Paper>
    </div>
  );
};

export default HistoricalData;
