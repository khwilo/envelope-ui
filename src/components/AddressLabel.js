import React from 'react';

const AddressLabel = ({ person }) => {
    return (
        <div>
            <p>{person.fullname}</p>
            <p>{person.street}</p>
            <p>{person.address}</p>
        </div>
    );
};

export default AddressLabel;
