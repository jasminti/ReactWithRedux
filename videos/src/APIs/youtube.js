import axios from 'axios';


const KEY = 'AIzaSyCXghTJOkrDjuME7dN1YRbF9Bcck1MmFt8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});