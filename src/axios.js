import React from 'react';
import Axios from 'axios';

const URL=Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default URL;

