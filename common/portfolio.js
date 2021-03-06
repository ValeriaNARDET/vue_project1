const Portfolio = Vue.component ('Portfolio', {
  props: ["albums"],
  data: function () {
    return {  
      list: null,
      drawer:  false
    }
  },
  methods: {
    selectPhotoalbum: function ( event ) {
      this.$parent.$emit ( 'albumSelect', event.target.innerHTML.trim() )
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
            class="white--text"
          >
             <v-toolbar color="transparent">
              <v-toolbar-side-icon dark @click="drawer = !drawer" ></v-toolbar-side-icon>
              <v-toolbar-title class="white--text portfolio-shadow-title">Albums</v-toolbar-title>
            </v-toolbar>
          </v-layout>
        </v-parallax>   


 <v-layout align-start justify-space-between>
   <v-flex xs11 sm4 xl3 v-if="drawer">
    <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
      </div>
      

        photos
      </div>
      photos
      </div>
    </v-list>
  </v-navigation-drawer> 
</v-flex>
<v-flex> 
  <div class="helloo">hello</div>
 

</v-flex>
</v-layout>

      </section>
    </v-content>
  `
});
