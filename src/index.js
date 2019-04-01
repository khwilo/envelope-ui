import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddressLabel from './components/AddressLabel';

const person = {
    fullname: "Fullname",
    street  : "123 Fake St.",
    address : "Boston, MA 02118",
};

ReactDOM.render(<AddressLabel person={person} />, document.getElementById('root'));
