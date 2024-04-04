import { ipcRenderer } from 'electron'
import { DeviceCodeActivationResponse } from '../types/auth'

export default {
  startAuthFlow: () => ipcRenderer.invoke('auth:start'),
  verifyAuthFlow: (deviceCode: string): Promise<DeviceCodeActivationResponse> => ipcRenderer.invoke('auth:validate', deviceCode),
}
