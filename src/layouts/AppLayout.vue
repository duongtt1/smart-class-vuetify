<template>
<v-app>
    <v-main>
        <router-view></router-view>
    </v-main>
    <v-bottom-navigation class="show_botton_bar mb-0 pb-0" v-model="value" :background-color="color" fixed dark grow>
        <v-btn height="100%" :color="color" :onclick="gotoroute">
            <span>Dashboard</span>

            <v-icon>mdi-book-edit</v-icon>
        </v-btn>

        <v-btn height="100%" :color="color" :onclick="gotoroute">
            <span>Class Room</span>

            <v-icon>mdi-cast-education</v-icon>
        </v-btn>

        <v-btn height="100%" :color="color" :onclick="gotoroute">
            <span>Schdule</span>

            <v-icon>mdi-calendar-multiple-check</v-icon>
        </v-btn>

        <v-btn height="100%" :color="color" :onclick="gotoroute">
            <span>Notifications</span>

            <v-icon>mdi-bell </v-icon>
        </v-btn>

        <v-btn height="100%" :color="color" :onclick="gotoroute">
            <span>Account</span>

            <v-icon>mdi-account </v-icon>
        </v-btn>
    </v-bottom-navigation>
</v-app>
</template>

<script>
export default {
    data: () => ({
        value: 0,
    }),
    computed: {
        gotoroute() {
            switch (this.value) {
                case 1:
                    this.$router.push('/classroom')
                    break
                case 2:
                    this.$router.push('/schedule')
                    break
                case 3:
                    this.$router.push('/notification')
                    break
                case 4:
                    this.$router.push('/profile')
                    break
                case 0:
                    if (this.$route.path !== "/dashboard"){
                        this.$router.push('/dashboard')
                    }
                    break
            }

        },
        color() {
            switch (this.value) {
                case 0:
                    return 'blue-grey'
                case 1:
                    return 'teal'
                case 2:
                    return 'brown'
                case 3:
                    return 'blue lighten-1'
                default:
                    return 'orange darken-1'
            }
        },
    },
};
</script>
<style>
.show_botton_bar {
  z-index: 999 !important;
}
</style>