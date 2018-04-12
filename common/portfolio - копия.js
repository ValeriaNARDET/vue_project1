const Portfolio = Vue.component ('Portfolio', {
  data: function () {
    return {  
      drawer:  false,
      rowData: [],
      sourceURL:"https://raw.githubusercontent.com/ValeriaNARDET/links/master/database.json"
    }
  },
  methods: {
    loadJSON: function () {
      this.$http.get( this.sourceURL ).then (response => {
                        // response.data
                   this.rowData = JSON.parse(response.data);
                        console.log (response.data)

                    }, response => {
                        console.log ("Ошибка доступа к файлу: " + this.sourceURL)
      })
    }
  },
  mounted: { function () {
      this.loadJSON()
    }
  },
  template: `
    <v-content>
      <section>
        <v-parallax src="https://2.bp.blogspot.com/-6vIsArb1i7w/VnFUpsQlubI/AAAAAAAAATA/9GN5tDmcjFc/s640/lr1-0815-2.jpg" height="150">
          <v-layout
            column
            align-start
            justify-end
            class="white--text">
             <v-toolbar color="transparent">
              <v-toolbar-side-icon dark @click="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title class="white--text portfolio-shadow-title">Albums</v-toolbar-title>
            </v-toolbar>
          </v-layout>
        </v-parallax>   

<!-- ====================== --> 
 <v-layout align-start justify-space-between>
   <v-flex xs11 sm4 xl3 v-if="drawer">
    <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
  <!--     <div v-for="album in rowData" :key="album" @click="" >


<router-link to="/portfolio/:id"  class="dropdown-item"> <photoalbum></photoalbum> </router-link>

<router-view></router-view> -->


      </div>
    </v-list>
  </v-navigation-drawer> 
</v-flex>
<v-flex> 
  <div class="helloo">hello</div>
      <div v-for="item in rowData" :key="album" @click="" >
              <p v-html="item.albumName"></p>
         <div v-for="url in item.urls">
          <img :src="url" height="100px">
         </div>
      </div>
</v-flex>
</v-layout>


      </section>
    </v-content>
  `,
  // components: 
});