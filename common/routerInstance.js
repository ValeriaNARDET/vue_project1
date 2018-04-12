const router = new VueRouter({
  props: ["id"],
  routes: [
    { 
      path: '/',
      name: 'Blog',
      component: Blog,
      props: true,
    },
    { 
      path: '/:id',
      name: 'Portfolio',
      component: Portfolio,
      props: true,
      // children: [,
      //   { 
      //     path: '/:name', 
      //     component: photoalbum, 
      //     props: true,
      //   },
      //   { 
      //     path: '/:name', 
      //     component: photoalbum,
      //     props: true,
      //   },
      //   { 
      //     path: '/:name',
      //     component: photoalbum,
      //     props: true,
      //   },,
      //   { 
      //     path: '/:name', 
      //     component: photoalbum, 
      //     props: true,
      //   },
      //   { 
      //     path: '/:name', 
      //     component: photoalbum,
      //     props: true,
      //   },
      //   { 
      //     path: '/:name',
      //     component: photoalbum,
      //     props: true,
      //   },,
      //   { 
      //     path: '/:name', 
      //     component: photoalbum, 
      //     props: true,
      //   },
      //   { 
      //     path: '/:name', 
      //     component: photoalbum,
      //     props: true,
      //   },
      //   { 
      //     path: '/:name',
      //     component: photoalbum,
      //     props: true,
      //   },,
      //   { 
      //     path: '/:name', 
      //     component: photoalbum, 
      //     props: true,
      //   },
      //   { 
      //     path: '/:name', 
      //     component: photoalbum,
      //     props: true,
      //   },
      //   { 
      //     path: '/:name',
      //     component: photoalbum,
      //     props: true,
      //   },,
      //   { 
      //     path: '/:name', 
      //     component: photoalbum, 
      //     props: true,
      //   },
      //   { 
      //     path: '/:name', 
      //     component: photoalbum,
      //     props: true,
      //   },
      //   { 
      //     path: '/:name',
      //     component: photoalbum,
      //     props: true,
      //   },
      // ]
    },
    { 
      path: '/:id',
      name: 'Info',
      component: Info,
      props: true,
    },
    { 
      path: '/:id',
      name: 'Contacts',
      component: Contacts,
      props: true,
    }
  ]
})
