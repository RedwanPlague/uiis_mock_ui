<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-bottom: 0.5em; margin-top: 0">Upcoming</h4>
      <q-table
        :columns="courseColumnsUp"
        :data="courseDataUp.slice(0, rowsPerPageUp)"
        hide-bottom
        row-key="name"
        :pagination="{ rowsPerPage: 100 }"
      />
      <q-btn class="q-my-md" color="primary" @click="rowsPerPageUp += 5">Load More</q-btn>
      <br/>
      <h4 style="margin-bottom: 0.5em">Previous</h4>
      <q-table
        :columns="courseColumnsUp"
        :data="courseDataPrev.slice(0, rowsPerPagePrev)"
        hide-bottom
        row-key="name"
        :pagination="{ rowsPerPage: 100 }"
      />
      <q-btn class="q-my-md" color="primary" @click="rowsPerPagePrev += 5">Load More</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ClassesPage',
  data() {
    return {
      rowsPerPageUp: 5,
      courseColumnsUp: [
        { name: 'course', label: 'Course', field: 'course', align: 'left', style: 'width: 55%; font-size: 1em' },
        { name: 'session', label: 'Session', field: 'session', align: 'center', style: 'font-size: 1em' },
        { name: 'room', label: 'Place', field: 'room', align: 'center', style: 'font-size: 1em' },
        { name: 'time', label: 'Time', field: 'time', align: 'center', style: 'font-size: 1em' },
        { name: 'duration', label: 'Duration', field: 'duration', align: 'center', style: 'font-size: 1em' },
      ],
      courseDataUp: [
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2020-21', time: '9:00 AM, 08-05-2021', duration: '1 hour'},
        { course: 'CSE425: Human Computer Interaction', room: 'ECE 207', session: '2020-21' , time: '9:00 AM, 10-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 307', session: '2018-19' , time: '12:00 AM, 12-05-2021', duration: '2 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 108', session: '2019-20' , time: '9:00 AM, 13-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 208', session: '2018-19' , time: '12:00 AM, 12-05-2021', duration: '2 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 14-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 15-05-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 16-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 17-05-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 18-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 19-05-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 20-05-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 21-05-2021', duration: '1 hour'},
      ],
      rowsPerPagePrev: 5,
      courseDataPrev: [
        { course: 'CSE409: Computer Graphic', room: 'ECE 107', session: '2020-21', time: '9:00 AM, 08-04-2021', duration: '1 hour'},
        { course: 'CSE425: Human Computer Interaction', room: 'ECE 207', session: '2020-21' , time: '9:00 AM, 10-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 307', session: '2018-19' , time: '12:00 AM, 12-04-2021', duration: '2 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 108', session: '2019-20' , time: '9:00 AM, 13-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 208', session: '2018-19' , time: '12:00 AM, 12-04-2021', duration: '2 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 308', session: '2019-20' , time: '9:00 AM, 14-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 15-04-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 16-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 17-04-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 18-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 19-04-2021', duration: '1 hour'},
        { course: 'CSE405: Computer Security', room: 'ECE 107', session: '2019-20' , time: '9:00 AM, 20-04-2021', duration: '2 hour'},
        { course: 'CSE409: Computer Graphics', room: 'ECE 107', session: '2018-19' , time: '12:00 AM, 21-04-2021', duration: '1 hour'},
      ]
    }
  }
}
</script>
