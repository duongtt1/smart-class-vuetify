<template>
<v-container fluid  class="mb-2 grey lighten-5">
    <v-row class="d-flex flex-row justify-start"> 
        <h2 class="mt-2 ml-7">Notifications</h2>
    </v-row>
    <v-divider class="mt-5"></v-divider>
    <v-list >
        <v-list-item class="item-border mt-1 mb-1" color="blue-grey lighten-5" v-for="data in list_noti" :key="data.id">
            <div class="d-flex flex-row justify-center">
                <v-list-item-icon>
                <v-icon color="indigo" size="32">
                    {{data.icon}}
                </v-icon>
                </v-list-item-icon>
            </div>
            <v-list-item-content class="mb-0">
                <v-list-item-title>Giảng viên <strong>{{data.author}}</strong> đã tạo 1 bài <strong>{{data.type}}</strong> tại lớp <strong>{{data.classroom}}</strong></v-list-item-title>
                <v-list-item-subtitle>vào {{data.date}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon color="blue">mdi-arrow-right-circle</v-icon>
            </v-list-item-icon>
        </v-list-item>
    </v-list>
</v-container>
</template>

<script>
export default {
    name: 'NotificationView',
    data() {
        return {
            list_noti: [{
                id: 1,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 2,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT002",
                type: "về nhà",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 3,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT007",
                type: "kiểm tra",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 4,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "CE224",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 5,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "CE119",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 6,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 7,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 8,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 9,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 10,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            },
            {
                id: 11,
                icon: "mdi-bell",
                author: "Nguyễn Thanh Thiện",
                classroom: "IT001",
                type: "trắc nghiệm",
                date: "01-09-2022, 10:24:27PM"
            }]
            
        }
    }
}
</script>

<style>
.item-border {
   border-bottom: 1px solid #78909C
}
</style>