import axios from 'axios';
import config from '../config.js';

class ArtistService {
    getListOfArtists(searchText) {
        var instance = axios.create({
            baseURL: 'http://localhost:3000',
            params: {
                apikey: config.musixmatchApi.key
            }
          });

        return instance.get('/ws/1.1/artist.search?q_artist=' + searchText);
    }
}

export default ArtistService;
