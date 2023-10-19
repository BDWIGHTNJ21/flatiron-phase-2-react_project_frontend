import React from 'react'

function Data ({ device}) {
    return (
        <div>
            <h2>Deployed Devices</h2>
            <table>
              <thread>
                <tr>
                    <th> Device ID</th>
                    <th>Device</th>
                    <th>Username</th>
                </tr>
                </thread>  
                <tbody>
                    
                    {devices.map((device) =>(
                    <tr key={devices.id}>
                        <td>{device.id}</td>
                        <tb>{device.device}</tb>
                        <tb>{device.username}</tb>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Data;