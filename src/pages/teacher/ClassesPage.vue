<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Routine</h4>
      <q-table
        :columns="routineColumns"
        :data="routineData"
        separator="cell"
        hide-bottom
        row-key="name"
      />
      <h4 style="margin-bottom: 0.5em">My Courses</h4>
      <q-table
        :columns="courseColumns"
        :data="courseData"
        hide-bottom
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ClassesPage',
  data() {
    return {
      routineColumns: [
        { name: 'weekday', label: 'Weekday', field: 'weekday', align: 'center' },
        { name: 'f8t9', label: '8:00-9:00', field: 'f8t9', align: 'center' },
        { name: 'f9t10', label: '9:00-10:00', field: 'f9t10', align: 'center' },
        { name: 'f10t11', label: '10:00-11:00', field: 'f10t11', align: 'center' },
      ],
      routineData: [
        {
          weekday: 'Sat',
          f8t9: 'Graph',
          f9t10: 'Graphics',
          f10t11: 'Bio'
        },
        {
          weekday: 'Sun',
          f8t9: 'Graph',
          f9t10: '-',
          f10t11: 'Bio'
        },
        {
          weekday: 'Mon',
          f8t9: 'Graph',
          f9t10: 'Graphics',
          f10t11: 'Bio'
        },
      ],
      courseColumns: [
        { name: 'course', label: 'Course', field: 'course', align: 'left', style: 'width: 75%;'},
        { name: 'session', label: 'Session', field: 'session', align: 'right' }
      ],
      courseData: [
        { course: 'Graphics', session: '2020-21' },
        { course: 'HCI', session: '2020-21' },
        { course: 'Graph', session: '2018-19' },
        { course: 'Security', session: '2019-20' },
      ]
    }
  }
}
</script>
