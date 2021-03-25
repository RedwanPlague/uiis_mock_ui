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
        :columns="courseColumnsPrev"
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
        { name: 'session', label: 'Session', field: 'session', align: 'right', style: 'font-size: 1em' },
        { name: 'time', label: 'Time', field: 'time', align: 'center', style: 'font-size: 1em' },
        { name: 'duration', label: 'Duration', field: 'duration', align: 'center', style: 'font-size: 1em' },
      ],
      courseDataUp: [
        { course: 'Graphics', session: '2020-21', time: '9:00 AM, 08-05-2021', duration: '1 hour'},
        { course: 'HCI', session: '2020-21' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Security', session: '2019-20' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Graph', session: '2018-19' },
      ],
      rowsPerPagePrev: 5,
      courseColumnsPrev: [
        { name: 'course', label: 'Course', field: 'course', align: 'left', style: 'width: 55%; font-size: 1em' },
        { name: 'session', label: 'Session', field: 'session', align: 'right', style: 'font-size: 1em' },
        { name: 'time', label: 'Time', field: 'time', align: 'center', style: 'font-size: 1em' },
        { name: 'duration', label: 'Duration', field: 'duration', align: 'center', style: 'font-size: 1em' },
      ],
      courseDataPrev: [
        { course: 'Graphics', session: '2020-21', time: '9:00 AM, 08-05-2021', duration: '1 hour'},
        { course: 'Graph', session: '2018-19' },
        { course: 'HCI', session: '2020-21' },
        { course: 'Security', session: '2019-20' },
        { course: 'Graphics', session: '2020-21' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
        { course: 'Security', session: '2019-20' },
      ]
    }
  }
}
</script>
