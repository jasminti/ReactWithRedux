import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:43' },
        { title: 'All Star', duration: '3:10' },
        { title: 'I Want it That Way', duration: '1:55' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers ({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});