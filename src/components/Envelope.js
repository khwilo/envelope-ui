import React from 'react';

import AddressLabel from './AddressLabel';
import Stamp from './Stamp';

const Envelope = ({ letter }) => {
    const { from, to, stamp } = letter;
    return (
        <div>
            <div className="sender">
                <AddressLabel person={from}/>
            </div>
            <div className="recipient">
                <AddressLabel person={to} />
            </div>
            <div className="stamp">
                <Stamp stamp={stamp} />
            </div>
        </div>
    );
};

export default Envelope;
