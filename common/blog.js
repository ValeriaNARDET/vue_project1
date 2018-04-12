const Blog = Vue.component ('Blog', {
  data: function () {
    return {}
  },
  template: `
    <v-content>
      <section>
        <v-parallax src="images/piony.jpg" height="400">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Evgenia Venger</h1>
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

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs10 sm7 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">«Выдающаяся фотография – это глубина чувств, а не глубина резкости»</h2>
              <span class="subheading">
                Peter Adams
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl another-align>
              <v-layout row wrap align-center>
                <v-flex xs10 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Art</div>
                    </v-card-title>
                    <v-card-text>
                      «Помните, что человек, которого вы фотографируете, составляет 50% портрета, а остальные 50% - это вы. Вы нуждаетесь в модели настолько, насколько он или она нуждается в вас. Если они не хотят помочь вам, это будет очень безрадостная картина»
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs10 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Strength</div>
                    </v-card-title>
                    <v-card-text>
                      «Лучшие изображения это те, которые сохраняют свою силу и влияние на протяжении многих лет, независимо от того, сколько раз их рассматривают»
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs10 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Heart</div>
                    </v-card-title>
                    <v-card-text>
                      «Многие фотографы считают, что если они купят лучшую камеру, то смогут снимать лучшие фотографии. Лучшая камера не будет работать за вас, если в вашей голове или в сердце ничего нет»
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
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

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm6>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">It will be fun</div>
                </v-card-title>
                <v-card-text>
                  Детские, семейные, индивидуальные фотосессии. С удовольствием буду воплощать вместе с вами даже самые сумасшедшие фото-идеи. Обращайтесь)) 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact me</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+38-093-056-2183</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Kiev, UA</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>eva.aliferova@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


    </v-content>
  </v-app>
  `
});
