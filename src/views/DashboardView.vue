<template>
<v-container fluid>
  <v-tabs centered class="fixed-tabs-bar">
    <v-tab v-for="tab in list_top_tabs" :key="tab.id">
      {{tab.title}}
    </v-tab>
    
    <v-tab-item v-for="tab_com in list_components" :key="tab_com.id">
      <v-divider></v-divider>
      <component v-bind:is="tab_com.com"></component>
    </v-tab-item>
  </v-tabs>
</v-container>
</template>

<script>
import AssignmentConponent from '../components/Dashboard/Assignments'
import DocumentComponent from '../components/Dashboard/Documents.vue'
import LessonComponent from '../components/Dashboard/Lesson.vue'
import ScoreComponent from '../components/Dashboard/Scores.vue'
import ClasstodayVue from '@/components/Dashboard/Classtoday.vue'

export default {
  name: 'DashboardView',
  data() {
    return {
      list_top_tabs: [{
          id: 1,
          title: "Room today"
        },
        {
          id: 2,
          title: "Assignments"
        },
        {
          id: 3,
          title: "Documents"
        },
        {
          id: 4,
          title: "Lessons"
        },
        {
          id: 5,
          title: "Scores"
        },
      ],
      list_components: [
      {
        id: 0,
        com: ClasstodayVue
      },{
        id: 1,
        com: AssignmentConponent
      },{
        id: 2,
        com: DocumentComponent
      }
      ,{
        id: 3,
        com: LessonComponent
      }
      ,{
        id: 4,
        com: ScoreComponent
      }
    
      ]
    }
  }
}
</script>

<style>
.fixed-tabs-bar .v-tabs-bar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
}
</style>