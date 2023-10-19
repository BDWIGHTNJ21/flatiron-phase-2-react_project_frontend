import React, {useState} from 'react';
import DeviceForm from './DeviceForm';
import Data from './Data';

function App(){
    const [devices, setDevices]=useState([]) /* use the currecnt state} */
    const handleDeploy=(device,username, deviceId) => {
        const newDevice ={
            id: devices.length +1,
            device,
            username
        };
        setDevices([...devices,newDevice]);

    };
    return (
        <div>
            <h1> Device Management App</h1>
            <DeviceForm
            onDeploy={handleDeploy} />
            <Data devices ={devices}/>      
            
       </div>
    );
}
export default App