import React from 'react';

import AddressLabel from './AddressLabel';

const Envelope = ({ letter }) => {
    const { from, to } = letter;
    return (
        <div>
            <div className="sender">
                <AddressLabel person={from}/>
            </div>
            <div className="recipient">
                <AddressLabel person={to} />
            </div>
        </div>
    );
};

export default Envelope;
