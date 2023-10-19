import React, { useState } from 'react'; 


function DeviceForm({ onDeploy }) { 
    const [deviceName, setDeviceName] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [deviceId, setDeviceId]=usestate('');
    
    const handleDeploy = () => {
    onDeploy( deviceId, username, deviceName ); 
    setSerialNumber(''); 
    setUsername(''); 
                                }; 
{/* creating the drop down selections*/}
    return (
        <div>
            <h2> Device Form </h2>
            
            <div>
                <label>Device Type:</label>
                <select value={deviceName} onchange={(e) =>setDeviceName(e.target.value)}>
                    <option value="">Select Device</option>
                    <option value="Laptop"></option>
                    <option value="Hip Printer"></option>
                    <option value="Radio"></option>
                </select>
            </div>

            <div>
                <label>Device ID:</label>
                <input
                    type="Text"
                    value={deviceId}
                    onChange={(e)=>setDeviceId(e.target.value)} />                    
            </div>
                        
            <div>
                <label>UserName:</label>
                <input
                    type="text"
                    value={username}
                    onChange ={(e)=> setUsername(e.target.value)} />
            </div>

                <button onClick={handleDepoly} >Deployed Device</button>
            </div>
               );
        }
                export default DeviceForm;