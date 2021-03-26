<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Routine</h4>
      <q-markup-table separator="cell">
        <thead>
        <tr>
          <th style="font-size: 1.05em">Weekday</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
        </tr>
        </thead>
        <tbody>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Sat</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>-</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Sat</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>-</td>
          <td colspan="3">CSE 321 <br/> Room 107</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Sat</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>-</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
          <td>CSE 321 <br/> Room 107</td>
        </tr>
        </tbody>
      </q-markup-table>
      <h4 style="margin-bottom: 0.5em">My Courses</h4>
      <q-table
        :columns="courseColumns"
        :data="courseData.slice(0, rowsPerPage)"
        hide-bottom
        row-key="name"
        :pagination="{ rowsPerPage: 100 }"
      />
      <q-btn class="q-my-md" color="primary" @click="rowsPerPage += 5">Load More</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ClassesPage',
  data() {
    return {
      routineColumns: [
        { name: 'weekday', label: 'Weekday', field: 'weekday', align: 'center', style: 'font-weight: bold' },
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
      rowsPerPage: 5,
      courseColumns: [
        { name: 'course', label: 'Course', field: 'course', align: 'left', style: 'width: 75%; font-size: 1em' },
        { name: 'session', label: 'Session', field: 'session', align: 'right', style: 'font-size: 1em' }
      ],
      courseData: [
        { course: 'Graphics', session: '2020-21' },
        { course: 'HCI', session: '2020-21' },
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
