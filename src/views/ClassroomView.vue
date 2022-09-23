<template>
<v-container fluid>
  <div v-if="onMeeting" class="">
    <vue-jitsi-meet ref="jitsiRef" domain="meet.jit.si"  :options="jitsiOptions"></vue-jitsi-meet>
  </div>
  <div v-else>
    <v-tabs centered class="fixed-tabs-bar">
      <v-tab v-for="title_tab in list_title_tabs" :key="title_tab">
        {{ title_tab }}
      </v-tab>
      <v-tab-item v-for="item in list_tabs" :key="item.id">
        <v-divider></v-divider>
        <div class="d-flex flex-row flex-wrap">
          <v-card class="mt-2 ml-6 mr-6 " width="200px" v-for="room in rooms" :key="room.id">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="154px"></v-img>
            <div class="d-flex flex-row justify-space-between">
              <v-card-title>
                {{room.name}}
              </v-card-title>
              <v-card-actions>
                <v-btn @click="onJoinClass" outlined rounded text right>
                  Go
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</v-container>
</template>

<script>
import {
  JitsiMeet
} from '@mycure/vue-jitsi-meet';
export default {
  name: 'ClassroomView',
  components: {
    VueJitsiMeet: JitsiMeet
  },
  computed: {
    jitsiOptions() {
      return {
        height: 480,
        lang: 'vi',
        roomName: 'IT007',
        noSSL: false,
        userInfo: {
          email: '18520651@gm.uit.edu.vn',
          displayName: 'DuongTT',
        },
        configOverwrite: {
          enableNoisyMicDetection: false,
          disableDeepLinking: true
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          MOBILE_APP_PROMO: false
        },
        // onload: this.onIFrameLoad
      };
    },
  },
  methods: {
    onIFrameLoad() {
      // do stuff
    },
    onJoinClass() {
      this.onMeeting = !this.onMeeting
    }
  },
  data() {
    return {
      onMeeting: false,
      tab: null,
      list_title_tabs: ['Current Class', 'Past Class', 'Class hided'],
      rooms: [{
          id: 1,
          name: 'IT001'
        },
        {
          id: 2,
          name: 'IT007'
        },
        {
          id: 3,
          name: 'CE224'
        },
        {
          id: 4,
          name: 'CE103'
        },
        {
          id: 5,
          name: 'CE119'
        },
        {
          id: 6,
          name: 'IT005'
        },
      ],
      list_tabs: [{
          id: 1,
          title: 'Current Class',

        },
        {
          id: 2,
          title: 'Past Class',

        },
        {
          id: 3,
          title: 'Class hided',

        },
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style>
.fixed-tabs-bar .v-tabs-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}
.frame-jitsi{
  height: 525px;
}
</style>
