<template>
  <v-container fluid>
     <v-sheet height="500">
        <v-calendar class="ma-2"
          ref="calendar"
          v-model="value"
          :events="events"
          color="primary"
          type="week"
        >
        <template v-slot:day-body="{ date, week }">
            <div
              class="v-current-time"
              :class="{ first: date === week[0].date }"
              :style="{ top: nowY }"
            ></div>
        </template>
        </v-calendar>
      </v-sheet>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      today: '2022-08-30',
      value: '',
      ready: false,
      events: [
        {
          name: 'CE232.N11.MTCL - EN',
          start: '2022-09-12 07:30',
          end: '2022-09-12 09:45',
        },
        {
          name: 'CE232.N11.MTCL.1 - EN(HT2)',
          start: '2022-09-12 13:00',
          end: '2022-09-12 16:15',
        },
        {
          name: 'CE437.N11 - VN',
          start: '2022-09-13 07:30',
          end: '2022-09-13 09:45',
        },
        {
          name: 'CE437.N11.2 - VN(HT1)',
          start: '2022-09-14 13:00',
          end: '2022-09-14 16:15',
        },
        {
          name: 'CE206.N11.MTCL - VN(ĐA)',
          start: '2022-09-15 07:30',
          end: '2022-09-15 09:45',
        },
        {
          name: 'SE301.N12.PMCL - VN',
          start: '2022-09-15 13:00',
          end: '2022-09-15 16:15',
        },
        
      ],
    }),
    computed: {
      cal () {
        return this.ready ? this.$refs.calendar : null
      },
      nowY () {
        return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
      },
    },
    mounted () {
      this.ready = true
      this.scrollToTime()
      this.updateTime()
    },
    methods: {
      getCurrentTime () {
        return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0
      },
      scrollToTime () {
        const time = this.getCurrentTime()
        const first = Math.max(0, time - (time % 30) - 30)

        this.cal.scrollToTime(first)
      },
      updateTime () {
        setInterval(() => this.cal.updateTimes(), 60 * 1000)
      },
    },
  }
</script>

<style lang="scss">
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: #ea4335;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
</style>