import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TracksPage from './containers/tracks-page';
import SearchPage from './components/search-page';
import AlbumsPage from './components/albums-page';
import ArtistsPage from './components/artists-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TracksPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/albums" component={AlbumsPage} />
    <Route path="/artists" component={ArtistsPage} />
  </Route>
);
