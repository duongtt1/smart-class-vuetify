<template>
  <v-card>
    <v-card-title>
      Transcript of student id 18520651
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
  name: "ScoreComponent",
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Course ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Predits', value: 'predits' },
          { text: 'Progress (10%)', value: 'progress' },
          { text: 'Midterm (30%)', value: 'midterm' },
          { text: 'Endterm (60%)', value: 'endterm' },
          { text: 'Summary', value: 'summary' },
        ],
        desserts: [
          {
            id: "IT001",
            name: 'Introduction Programming',
            predits: 4,
            progress: 7.0,
            midterm: 6.4,
            endterm: 9.0,
            summary: 8.5,
          },
           {
            id: "IT002",
            name: 'Introduction Network',
            predits: 4,
            progress: 5.0,
            midterm: 8.4,
            endterm: 9.0,
            summary: 7.5,
          },
           {
            id: "IT007",
            name: 'Operating Systems',
            predits: 4,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
           {
            id: "CE119",
            name: 'Digital Logic Design',
            predits: 4,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 9.5,
          },
           {
            id: "CE223",
            name: 'Processor - Micro Controller',
            predits:  4,
            progress: 9.0,
            midterm: 4.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE224",
            name: 'Embedded Systems',
            predits: 4,
            progress: 4.0,
            midterm: 8.4,
            endterm: 9.0,
            summary: 6.0,
          },
          {
            id: "CE515",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE520",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE511",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE519",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE518",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE517",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          {
            id: "CE516",
            name: 'Intern Business',
            predits: 2,
            progress: 9.0,
            midterm: 8.4,
            endterm: 8.0,
            summary: 8.5,
          },
          
        ],
      }
    },
  }
</script>