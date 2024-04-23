import { useEffect, useState } from 'react'
import { DeviceCodeResponse } from '../../types/auth'
import QRCode from "react-qr-code"
import { NavLink, useNavigate } from 'react-router-dom'
import { startAuthFlow, verifyAuthFlow } from '../services/auth0'

export default function () {
  const [loginData, setLoginData] = useState<DeviceCodeResponse | undefined>();
  const navigate = useNavigate();

  async function login() {
    const response = await startAuthFlow();
    setLoginData(response);
  }

  async function validateAuth() {
    const response = await verifyAuthFlow(loginData.device_code);
    if (response.loggedIn) {
      navigate('/browse')
    }
  }

  useEffect(() => {
    login()
  }, []);

  useEffect(() => {
    if (loginData) {
      const interval = setInterval(() => {
        validateAuth();
      }, (loginData.interval + 2) * 1000);

      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }
  }, [loginData?.interval]);

  return (
    <div className="overflow-hidden bg-gray-900 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Device Flow</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Login faster on your device</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                To activate Identiflix on your Smart TV:
              </p>
              <ul className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-400 lg:max-w-none">
                <li>
                  1. On your computer or device, visit: <pre className="inline-block ml-2 text-green-300">{loginData?.verification_uri || 'loading...'}</pre>
                </li>
                <li>
                  2. Enter the following code: <pre className="inline-block ml-2 px-2 py-1 rounded bg-blue-200 text-black">{loginData?.user_code || 'loading...'}</pre>
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-x-6">
                <NavLink
                  className="text-sm font-semibold leading-6 text-gray-100"
                  to="/"
                >
                  Back to start
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start">
            {loginData ? (
              <div className="border-8 rounded-lg border-white shadow-gray-200">
                <QRCode value={loginData.verification_uri_complete}/>
              </div>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
