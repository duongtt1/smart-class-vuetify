<template>
<v-container fluid>
  <v-row class="grey rounded lighten-5 mt-1">
    <v-col cols="12" md="7" class="">
      <strong class="font-header-table-class">Name class</strong>
    </v-col>
    <v-col cols="6" md="1" class="" v-for="item in list_header" :key="item.id">
      <strong class="font-header-table-class d-flex justify-center align-center">{{item.name}}</strong>
    </v-col>
  </v-row>

  <v-row v-for="course in list_course" :key="course.code" class="rounded">
    <v-col cols="12" md="7" class="">
      <div class="d-flex flex-row">
        <v-img class="mr-2" src="https://picsum.photos/510/300?random" max-height="64" max-width="64">
        </v-img>
        <div class="mb-1">
          <strong class="font-header-table-class">{{course.name}} - {{course.code}}</strong>
          <v-subheader class="style_sub_header">{{course.author}}</v-subheader>
        </div>
      </div>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{course.member}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{course.lesson}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{course.exer}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{course.docs}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
    <v-btn
      icon
      color="primary"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
     
    </v-col>

  </v-row>
</v-container>
</template>

<script>
export default {
  name: "ClassTodayComponent",
  data() {
    return {
      list_header: [{
        id: 1,
        name: "Member"
      }, {
        id: 2,
        name: "Lesson"
      }, {
        id: 3,
        name: "Exercises"
      }, {
        id: 4,
        name: "Docs"
      }, {
        id: 5,
        name: ""
      }],
      list_course: [{
          name: 'Programing for beginer',
          code: "IT001",
          member: 36,
          lesson: 5,
          exer: 3,
          docs: 9,
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Programing for beginer',
          code: "IT002",
          member: 36,
          lesson: 5,
          exer: 3,
          docs: 9,
          author: "ThS. Nguyễn Thanh Thiện",
        },
      ],
    }
  }

}
</script>

<style>
.font-header-table-class {
  font-size: 14px;
}

.style_sub_header {
  height: 15px;
  padding: 0 0 0 0;
}
</style>
