import 'date-fns';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MultipleSelect } from 'react-select-material-ui';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import ObjectTable from 'react-object-table';
import axios from 'axios';
import './../../../node_modules/react-object-table/dist/react-object-table.css';

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
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState();

  const classes = useStyles();

  useEffect(() => {
    axios.get('https://ems-dev.azurewebsites.net/api/meter').then((res) => {
      setMeterOptions(res.data.map((meter) => meter.meterName));
    });
    axios.get('https://ems-dev.azurewebsites.net/api/parameter').then((res) => {
      setParmeterOptions(res.data);
    });
  }, []);

  const generateReport = async (e) => {
    const data = {
      startDate: new Date(startDate).toJSON(),
      endDate: new Date(endDate).toJSON(),
      meter: meters,
      parameter: parameters,
    };

    console.log(JSON.stringify(data));
    const res = await axios.post(
      'https://ems-dev.azurewebsites.net/api/Report/HistoricalData',
      data
    );
    console.log(res.data);
    setReportData(res.data);
    setShowReport(true);
  };

  return (
    <div>
      <div
        className={classes.root}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Paper
          style={{
            maxWidth: '500px',
          }}
        >
          <Typography variant='h4' gutterBottom>
            Historical Data
          </Typography>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={3}>
              <Grid xs={6} item>
                <DateTimePicker
                  label='Start Date'
                  value={startDate}
                  onChange={setStartDate}
                  format={'dd MMM yyyy  hh:mm a'}
                  fullWidth={true}
                />
              </Grid>
              <Grid xs={6} item>
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
            style={{ marginTop: '10px' }}
            label='Select Meters'
            values={meters}
            options={meterOptions}
            onChange={(values) => {
              setMeters(values);
            }}
          />
          <MultipleSelect
            style={{ marginTop: '10px' }}
            label='Select Parameters'
            values={parameters}
            options={parameterOptions}
            onChange={(values) => {
              setParameters(values);
            }}
          />
          <Button
            variant='contained'
            style={{ marginTop: '10px' }}
            color='primary'
            onClick={generateReport}
          >
            Generate Report
          </Button>
        </Paper>
      </div>
      {showReport && (
        <ObjectTable
          columns={parameters.map((parameter) => ({
            name: parameter,
            key: parameter,
          }))}
          objects={reportData}
        />
      )}
    </div>
  );
};

export default HistoricalData;
