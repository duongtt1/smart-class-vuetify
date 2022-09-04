<template>
<v-container fluid class="d-flex flex-row flex-wrap">
    <v-card tile class="ma-2" width="175px" v-for="room in rooms" :key="room.id">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="155px"></v-img>
        <v-card-title>
            {{room.name}}
        </v-card-title>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'ListClassComponent',
    props: ['rooms'],
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
