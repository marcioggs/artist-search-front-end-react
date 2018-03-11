import axios from 'axios';

class ArtistService {
    constructor() {
    }

    getListOfArtists(searchText) {
        var instance = axios.create({
            baseURL: 'http://localhost:3000',
            params: {
                apikey: '2f43ecfbba9b62c8fb22198cef6d8cbd'
            }
          });

        return instance.get('/ws/1.1/artist.search?q_artist=' + searchText);
    }

}

export default ArtistService;
