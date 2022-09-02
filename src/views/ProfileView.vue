<template>
<v-container fluid style="height: 500px;">
    <v-tabs background-color="grey lighten-5" v-bind:align-with-title="true" v-bind:vertical="true" grow class="fill-height">
        <v-tabs-slider color="blue"></v-tabs-slider>
        <div class="d-flex flex-column justify-space-between ">
            <div class="d-flex flex-column justify-start align-start">
                <v-tab v-for="item in items" :key="item.title">
                    <v-icon left>
                        {{ item.icon }}
                    </v-icon>
                    {{ item.title }}
                </v-tab>
            </div>
            <div class="d-flex flex-column justify-end mt-10">
                <v-btn color="error" outlined>
                    Logout
                </v-btn>
            </div>
        </div>
        <v-tab-item v-for="data in list_component" :key="data.id">
            <v-card flat>
                <component class="ml-2" v-bind:is="data.com"></component>
            </v-card>
        </v-tab-item>
    </v-tabs>
</v-container>
</template>

<script>
import GroupComponent from '@/components/Account/groups.vue'
import TodoComponent from '@/components/Account/todo.vue'
import SettingComponent from '@/components/Account/setting.vue'
import HelpComponent from '@/components/Account/help.vue'
import ParentComponent from '@/components/Account/parent.vue'
import ProfileComponent from '@/components/Account/profile.vue'

export default {
    name: "ProfileView",
    components: {
        ProfileComponent, 
        TodoComponent,
        GroupComponent,
        SettingComponent,
        ParentComponent,
        HelpComponent
    },
    data() {
        return {
            items: [{
                    title: 'Profile',
                    icon: 'mdi-account'
                },
                {
                    title: 'Todo Lists',
                    icon: 'mdi-checkbox-multiple-marked-circle-outline'
                },
                {
                    title: 'Groups',
                    icon: 'mdi-account-group-outline'
                },
                {
                    title: 'Parents',
                    icon: 'mdi-human-male-female-child'
                },
                {
                    title: 'Settings',
                    icon: 'mdi-cog-outline'
                },
                {
                    title: 'Help',
                    icon: 'mdi-help-box'
                }
            ],
            list_component: [{
                    com: ProfileComponent,
                    id: 1
                }, {
                    com: TodoComponent,
                    id: 2
                },
                {
                    com: GroupComponent,
                    id: 3
                }, {
                    com: ParentComponent,
                    id: 4
                },
                {
                    com: SettingComponent,
                    id: 5
                },
                {
                    com: HelpComponent,
                    id: 6
                }
            ],
            right: null,
        }
    },
}
</script>
