 const app =   new Vue({
    data: function () {
      return {
        title: 'Photo by EVA',
        drawer: true,
      rowData: [],
      sourceURL:"https://raw.githubusercontent.com/ValeriaNARDET/links/master/database.json",
        menuItems: {
          Blog: "Blog",
          Portfolio: "Portfolio",
          Info: "Info",
          Contacts: "Contacts",
       },
      }
    },
  methods: {
    loadJSON: function () {
      this.$http.get( this.sourceURL ).then (response => {
                        // response.data
                   this.rowData = JSON.parse(response.data);
                        console.log (response.body)

                    }, response => {
                        console.log ("Ошибка доступа к файлу: " + this.sourceURL)
      })
    }
  },
  mounted: { function () {
      this.loadJSON()
    }
  },
    router,
  }).$mount('#app')
