<template>
<v-container align="center" justify="center" fill-height>
    <v-row justify="space-around">
        <v-col cols="12" class="mt-8">
            <v-card width="100%">
                <v-img height="150px" src="https://cdn.pixabay.com/photo/2021/07/09/06/52/lavender-6398415_960_720.jpg">
                    <v-card-title class="white--text mt-8">
                        <v-avatar size="96">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                        </v-avatar>

                        <strong class="ml-3">
                            Từ Thanh Dương
                        </strong>
                    </v-card-title>
                </v-img>

                <v-card-text>

                    <div class="font-weight-bold ml-8 mb-2">
                        Details
                    </div>

                    <v-list two-line>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="indigo">
                                    mdi-phone
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-subtitle>Day of birth</v-list-item-subtitle>
                                <v-list-item-title>02-09-2000</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="indigo">
                                    mdi-email
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>18520651@gm.uit.edu.vn</v-list-item-title>
                                <v-list-item-subtitle>University of Information Technology</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <!-- <v-divider inset></v-divider> -->

                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'ProfileComponent'
}
</script>

<style>
.bg-img {
    background-image: url("https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    border-radius: 3px;
}
</style>
