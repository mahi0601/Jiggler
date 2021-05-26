const clientId = '64befd17a00e4537b51a3be498a8a2af';
const redirectUri = 'http://localhost:3000/';

const scopes = [
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
];

export const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=false`;
export const accessToken = window.location.hash.split('&')[0].split('=')[1];