import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TracksPage from './containers/tracks-page';
import SearchPage from './containers/search-page';
import AlbumsPage from './containers/albums-page';
import ArtistsPage from './containers/artists-page';
import Artist from './containers/artist';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TracksPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/albums" component={AlbumsPage} />
    <Route path="/artists" component={ArtistsPage} />
    <Route path="/artist/:id" component={Artist} />
  </Route>
);
