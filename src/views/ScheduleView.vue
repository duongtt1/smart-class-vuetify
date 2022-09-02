<template>
        <v-calendar class="ma-2"
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
</template>

<script>
  export default {
    data: () => ({
      today: '2022-09-01',
      events: [
        {
          name: 'Weekly Meeting',
          start: '2022-09-01 09:00',
          end: '2022-09-01 10:00',
        },
        {
          name: `Thomas' Birthday`,
          start: '2022-09-01',
        },
        {
          name: 'Mash Potatoes',
          start: '2022-09-01 12:30',
          end: '2022-09-01 15:30',
        },
      ],
    }),
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
  }
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>