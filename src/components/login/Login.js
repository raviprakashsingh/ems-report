import React, { useState } from 'react';
import CompanyImage from './../../img/power-station.jpg';
import SmartFiImage from './../../img/smart-fi.png';
import VenliteImage from './../../img/venlite-logo.png';
import axios from 'axios';

import {
  Typography,
  Divider,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';

const sectionStyle = {
  height: '100vh',
  background: `url('${CompanyImage}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const style = {
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '150px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,.7)',
  color: 'rgba(35, 42, 61)',
  minWidth: '400px',
  padding: '25px',
};

const Login = ({ setLoggedIn, setUser }) => {
  const [userName, setUserName] = useState('venlite');
  const [userPassword, setUserPassword] = useState('venlite@2017');

  const login = async (e) => {
    e.preventDefault();
    const data = { userName, userPassword };
    const res = await axios.post(
      'https://ems-dev.azurewebsites.net/api/Login/Create',
      data
    );
    setLoggedIn(true);
    setUser(res.data);
    console.log(res.data);
  };

  return (
    <div style={sectionStyle}>
      <img
        src={VenliteImage}
        alt='Venlite'
        style={{
          position: 'fixed',
          top: '10px',
          left: '30px',
          width: '100px',
        }}
      />
      <div style={style}>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <img
            style={{
              maxHeight: '80px',
              borderRadius: '5px',
            }}
            src={SmartFiImage}
            alt='User Login'
          />
        </div>
        {/* <Typography variant='h3' align='center'>
          User Login
        </Typography> */}
        <Divider
          variant='fullWidth'
          style={{
            height: '3px',
            background: 'rgba(35, 42, 61)',
            marginTop: '10px',
          }}
        />
        <form onSubmit={login} style={{ width: '100%' }}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <Person />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <TextField
                label='Username'
                fullWidth={true}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                style={{ marginTop: '30px' }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <Lock />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <TextField
                label='Password '
                fullWidth={true}
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                style={{ marginTop: '10px' }}
              />
            </Grid>
          </Grid>
          <Button
            size='large'
            variant='contained'
            type='submit'
            style={{
              marginTop: '30px',
              background: 'rgba(35, 42, 61)',
              fontSize: '1.2rem',
              color: '#fff',
              width: '100%',
            }}
          >
            Login
          </Button>
        </form>
      </div>
      <footer
        style={{
          color: '#fff',
          width: '100%',
          position: 'fixed',
          fontWeight: '500',
          bottom: '0',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <p>©Venlite Industry Limited ESTD 2017. Crafted with Care In India</p>
      </footer>
    </div>
  );
};

export default Login;
