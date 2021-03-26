<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Routine</h4>
      <q-markup-table separator="cell">
        <thead>
        <tr>
          <th style="font-size: 1.05em">Weekday</th>
          <th style="font-size: 1.05em">8:00-9:00</th>
          <th style="font-size: 1.05em">9:00-10:00</th>
          <th style="font-size: 1.05em">10:00-11:00</th>
          <th style="font-size: 1.05em">11:00-12:00</th>
          <th style="font-size: 1.05em">2:30-5:00</th>
        </tr>
        </thead>
        <tbody>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Sat</td>
          <td>CSE 325 <br/> Room 107</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>CSE 409 <br/> Room 207</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Sun</td>
          <td>-</td>
          <td>CSE 325 <br/> Room 107</td>
          <td>-</td>
          <td>CSE 409 <br/> Room 207</td>
          <td>-</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Mon</td>
          <td>CSE 325 <br/> Room 107</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>CSE 409 <br/> Room 207</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Tues</td>
          <td>-</td>
          <td>CSE 325 <br/> Room 107</td>
          <td>-</td>
          <td>-</td>
          <td>CSE 409 <br/> Room 207</td>
        </tr>
        <tr style="text-align: center">
          <td style="font-size: 1.05em">Wed</td>
          <td>-</td>
          <td>-</td>
          <td colspan="3">Thesis</td>
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
        { name: 'f11t12', label: '11:00-12:00', field: 'f11t12', align: 'center' },
        { name: 'f12t1', label: '12:00-1:00', field: 'f12t1', align: 'center' },
      ],
      routineData: [
        {
          weekday: 'Sat',
          f8t9: '-',
          f9t10: 'CSE-409',
          f10t11: '-',
          f11t12: 'CSE-425',
          f12t1: '-'
        },
        {
          weekday: 'Sun',
          f8t9: 'CSE-409',
          f9t10: '-',
          f10t11: '-',
          f11t12: 'CSE-425',
          f12t1: '-'
        },
        {
          weekday: 'Mon',
          f8t9: '-',
          f9t10: '-',
          f10t11: 'CSE-405',
          f11t12: 'CSE-425',
          f12t1: '-'
        },
        {
          weekday: 'Tue',
          f8t9: '-',
          f9t10: '-',
          f10t11: '-',
          f11t12: 'Thesis',
          f12t1: 'Thesis'
        },
        {
          weekday: 'Wed',
          f8t9: '-',
          f9t10: 'CSE-405',
          f10t11: '-',
          f11t12: '-',
          f12t1: '-'
        }
      ],
      rowsPerPage: 5,
      courseColumns: [
        { name: 'course', label: 'Course', field: 'course', align: 'left', style: 'width: 75%; font-size: 1em' },
        { name: 'session', label: 'Session', field: 'session', align: 'right', style: 'font-size: 1em' }
      ],
      courseData: [
        { course: 'CSE-409:Computer Graphics', session: '2019-20' },
        { course: 'CSE-325:Compiler', session: '2019-20' },
        { course: 'CSE-301:Mathematical Analysis of Computer Science', session: '2018-19' },
        { course: 'CSE-215:Database', session: '2018-19' },
        { course: 'CSE-107:Object Oriented Programming', session: '2017-18' },
        { course: 'CSE-108:Object Oriented Programming Sessional', session: '2017-18' },
        { course: 'CSE-107:Object Oriented Programming', session: '2017-18' },
        { course: 'CSE-107:Object Oriented Programming', session: '2016-17' },
        { course: 'CSE-107:Object Oriented Programming', session: '2015-16' },
        { course: 'CSE-107:Object Oriented Programming', session: '2015-16' },
      ]
    }
  }
}
</script>
