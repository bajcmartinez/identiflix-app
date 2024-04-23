import axios from 'axios'
import { DeviceCodeActivationResponse } from '../../types/auth'

export const startAuthFlow = async () => {
  const options = {
    method: 'POST',
    url: 'https://auth-test.gotolcs.com/oauth/device/code',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: {client_id: '8dfAuyOuUbxy7VJ2nOIL6GmwMAOIGuU2', scope: 'SCOPE'}
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch(error) {
    console.error(error);
    return {};
  }
}

export const verifyAuthFlow = async (deviceCode: string): Promise<DeviceCodeActivationResponse> => {
  const options = {
    method: 'POST',
    url: 'https://auth-test.gotolcs.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      device_code: deviceCode,
      client_id: '8dfAuyOuUbxy7VJ2nOIL6GmwMAOIGuU2'
    })
  };

  try {
    const response = await axios.request(options);
    return {
      loggedIn: true,
      idToken: response.data['id_token'],
    }
  } catch(error) {
    if (error.response && error.response.data && error.response.data && error.response.data.error) {
      console.log('Error validating if the user has logged in', error.response.data);
    } else {
      console.log('Error validating if the user has logged in', error);
    }

    return {
      loggedIn: false
    };
  }
}
