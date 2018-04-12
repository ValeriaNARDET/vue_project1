// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

const PhotoalbumList = Vue.component ('PhotoalbumList', {
  props: ['id'],
  data: function () {
    return {}
  },
  template: `
    <router-link to='/художественная литература/другое'><photoalbum></photoalbum></router-link>
  `
});

   // mounted () {
    //   axios
    //     .get('https://raw.githubusercontent.com/ValeriaNARDET/links/master/database.json')
    //     .then(response => {
    //       this.rowData = response.data
    //       alert(rowData)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       this.errored = true
    //     })
    //     .finally(() => this.loading = false)
    // },