import React from 'react';
import PropTypes from 'prop-types';

const AddressLabel = ({ person }) => {
    return (
        <div>
            <p>{person.fullname}</p>
            <p>{person.street}</p>
            <p>{person.address}</p>
        </div>
    );
};

AddressLabel.propTypes = {
    person: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        street  : PropTypes.string.isRequired,
        address : PropTypes.string.isRequired
    }).isRequired
};

export default AddressLabel;
