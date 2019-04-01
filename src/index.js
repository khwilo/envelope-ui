import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Envelope from './components/Envelope';

const letter = {
    from: {
        fullname: "Mr. Sender",
        street  : "123 Fake St.",
        address : "Boston, MA 02118",
    },
    to: {
        fullname: "Mrs. Receiver",
        street  : "123 Fake St.",
        address : "San Fransisco, CA 94101",
    },
};

ReactDOM.render(<Envelope letter={letter} />, document.getElementById('root'));
