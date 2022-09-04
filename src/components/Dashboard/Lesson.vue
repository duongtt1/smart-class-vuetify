<template>
<v-container fluid>
  <v-row class="grey rounded lighten-5 mt-1">
    <v-col cols="12" md="7" >
      <strong class="font-header-table-class">Name Lesson</strong>
    </v-col>
    <v-col cols="6" md="1">
      <strong class="font-header-table-class d-flex justify-center align-center">Class</strong>
    </v-col>
    <v-col cols="6" md="1">
      <strong class="font-header-table-class d-flex justify-center align-center">Type</strong>
    </v-col>
    <v-col cols="6" md="2">
      <strong class="font-header-table-class d-flex justify-center align-center">Deadline</strong>
    </v-col>
    <v-col cols="6" md="1">
      <strong class="font-header-table-class d-flex justify-center align-center"></strong>
    </v-col>
  </v-row>

  <v-row v-for="less in list_lesson" :key="less.id">
    <v-col cols="12" md="7" >
      <div class="d-flex flex-row">
        <v-img class="mr-2" src="https://picsum.photos/510/300?random" max-height="64" max-width="64">
        </v-img>
        <div class="mb-1">
          <strong class="font-header-table-class">{{less.name}}</strong>
          <v-subheader class="style_sub_header">{{less.author}}</v-subheader>
        </div>
      </div>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{less.class}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{less.type}}</strong>
    </v-col>
    <v-col cols="6" md="2" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{less.datesubmit}}</strong>
    </v-col>
    <v-col cols="6" md="1" class="d-flex justify-center align-center">
      <v-btn icon color="primary">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-col>
    <v-divider></v-divider>
  </v-row>
</v-container>
</template>

<script>
  export default {
    name: "LessonComponent",
  data() {
    return {
      list_header: [{
        id: 1,
        name: "Class"
      }, {
        id: 2,
        name: "Date submit"
      }],
      list_lesson: [{
          name: 'Lectures 1',
          id: "1",
          type: "video",
          class: "IT001",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Lectures 2',
          id: "2",
          class: "IT001",
          type: "pptx",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Lectures 3',
          id: "3",
          class: "IT003",
          type: "video",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Lectures 4',
          id: "4",
          class: "IT003",
          type: "video",
          datesubmit: "23:59 09/09/2022",
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
