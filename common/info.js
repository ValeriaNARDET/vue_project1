const Info = Vue.component ('Info', {
  data: function () {
    return {}
  },
  template: `
    <v-content>
      <section>
        <v-parallax src="https://1.bp.blogspot.com/-F562ccoRTgo/V85Mdk-q_-I/AAAAAAAABOU/Ejmn2apx0cUMSn64Tx6Daj1rG8ofWhcpwCEw/s640/DJI_04621.jpg" height="400">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">EVA</h1>
            <div class="subheading mb-3 text-xs-center">Your own photographer</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Look photos
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section><!-- slider -->
      </section>

        <v-parallax src="images/composition.jpg" height="280">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

    </v-content>
  </v-app>
  `
});