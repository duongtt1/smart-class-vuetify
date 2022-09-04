<template>
<v-container fluid>
  <v-row class="grey rounded lighten-5 mt-1">
    <v-col cols="12" md="7" >
      <strong class="font-header-table-class">Name Lesson</strong>
    </v-col>
    <v-col cols="6" md="2"  v-for="item in list_header" :key="item.id">
      <strong class="font-header-table-class d-flex justify-center align-center">{{item.name}}</strong>
    </v-col>
    <v-col cols="6" md="1">
      <strong class="font-header-table-class d-flex justify-center align-center"></strong>
    </v-col>
  </v-row>

  <v-row v-for="doc in list_docs" :key="doc.id">
    <v-col cols="12" md="7" >
      <div class="d-flex flex-row">
        <v-img class="mr-2" src="https://picsum.photos/510/300?random" max-height="64" max-width="64">
        </v-img>
        <div class="mb-1">
          <strong class="font-header-table-class">{{doc.name}}</strong>
          <v-subheader class="style_sub_header">{{doc.author}}</v-subheader>
        </div>
      </div>
    </v-col>
    <v-col cols="6" md="2" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{doc.class}}</strong>
    </v-col>
    <v-col cols="6" md="2" class="d-flex justify-center align-center">
      <strong class="font-header-table-class">{{doc.datesubmit}}</strong>
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
  name: "DocumentComponent",
  data() {
    return {
      list_header: [{
        id: 1,
        name: "Class"
      }, {
        id: 2,
        name: "Date submit"
      }],
      list_docs: [{
          name: 'Slides Chapter 1',
          id: "1",
          type: "pdf",
          class: "IT001",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Slides Chapter 2',
          id: "2",
          class: "IT001",
          type: "pptx",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Slides Chapter 1',
          id: "3",
          class: "IT003",
          type: "pdf",
          datesubmit: "23:59 09/09/2022",
          author: "ThS. Nguyễn Thanh Thiện",
        },
        {
          name: 'Slides Chapter 2',
          id: "4",
          class: "IT003",
          type: "pdf",
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
