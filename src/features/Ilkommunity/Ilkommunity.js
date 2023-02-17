import React from 'react'
import './Ilkommunity.css'
import agriux from '../../Assets/Ilkommunity/Agriux 200 x 200.png'
import CSI from '../../Assets/Ilkommunity/CSI 200 x 200.png'
import agribot from '../../Assets/Ilkommunity/Agribot 200 x 200.png'
import CP from '../../Assets/Ilkommunity/CP 200 x 200.png'
import daming from '../../Assets/Ilkommunity/Daming 200 x 200.png'
import iwdc from '../../Assets/Ilkommunity/IWDC 200 x 200.png'
import gary from '../../Assets/Ilkommunity/Gary 200 x 200.png'
import mad from '../../Assets/Ilkommunity/MAD 200 x 200.png'

const Ilkommunity = () => {
    return (
        <div>
            <div className="header">
                <h2>ILKOMMUNITY</h2>
            </div>
            <div className="ilkommunity">
                <div className="ilkommunity-agriux">
                    <img src={agriux} alt="AgriUX" />
                    <li>AGRIUX</li>
                </div>
                <div className="ilkommunity-csi">
                    <img src={CSI} alt="CSI" />
                    <li>CSI</li>
                </div>
                <div className="ilkommunity-agribot">
                    <img src={agribot} alt="Agribot" />
                    <li>AGRIBOT</li>
                </div>
                <div className="ilkommunity-cp">
                    <img src={CP} alt="CP" />
                    <li>CP</li>
                </div>
                <div className="ilkommunity-daming">
                    <img src={daming} alt="Daming" />
                    <li>DAMING</li>
                </div>
                <div className="ilkommunity-iwdc">
                    <img src={iwdc} alt="IWDC" />
                    <li>IWDC</li>
                </div>
                <div className="ilkommunity-gary">
                    <img src={gary} alt="GARY" />
                    <li>GARY</li>
                </div>
                <div className="ilkommunity-mad">
                    <img src={mad} alt="MAD" />
                    <li>MAD</li>
                </div>
            </div>
        </div>
    )
}

export default Ilkommunity