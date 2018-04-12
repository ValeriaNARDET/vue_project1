const photoalbum = Vue.component ('photoalbum', {
  props: {
    name: {
      type: String,
      default: 'параметры роутера'
    }
  },
  template: `
      <div>
      <v-list-tile>
        <v-list-tile-action>
          <img :src="album.urls.url1" height="150px">
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="album.albumName">hi 4</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
     </div>
  `
});