<template>
  <q-page padding class="q-ma-lg">
    <div class="row">
      <q-img class="col-3" src="../../assets/images.jpeg" width="200px"></q-img>
      <div class="col-6 q-ml-md">
        <span class="text-h5">
          {{name}}<br/>
          <span style="font-size: 0.8em">{{stdId}}</span>
        </span><br/>
      </div>
    </div>
    <div class="q-mt-lg">
      <q-markup-table wrap-cells flat>
        <tbody>
        <tr v-for="(value, key, i) in info" :key="i">
          <td class="text-bold" style="font-size: 1.1em">{{key}}</td>
          <td class="text-right" style="font-size: 1.1em">{{value}}</td>
        </tr>
        <tr>
          <td class="text-bold" style="font-size: 1.2em">CGPA</td>
          <td class="text-right" style="font-size: 1.2em">{{currentCG.toFixed(2)}}</td>
        </tr>
        </tbody>
      </q-markup-table>

      <div class="q-mt-lg q-mb-sm text-h6">Previous Result</div>
      <q-list bordered>
        <q-expansion-item
          v-for="(result, i) in previousResult"
          :key="i"
          :label="'session ' + result.session"
          header-style="font-size: 1.2em"
        >
          <q-markup-table flat>
            <thead>
            <tr>
              <th style="font-size: 1.1em" class="text-left">Course</th>
              <th style="font-size: 1.1em">Credit</th>
              <th style="font-size: 1.1em">Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(course, i) in result.courses" :key="i">
              <td style="font-size: 1.05em">{{course.name}}</td>
              <td style="font-size: 1.05em" class="text-center">{{course.credit.toFixed(2)}}</td>
              <td style="font-size: 1.05em" class="text-center">{{course.grade.toFixed(2)}}</td>
            </tr>
            <tr>
              <td></td>
              <td style="font-size: 1.05em" class="text-center text-bold">GPA</td>
              <td style="font-size: 1.05em" class="text-center">
                {{getGrade(result.courses).toFixed(2)}}
              </td>
            </tr>
            </tbody>
          </q-markup-table>
        </q-expansion-item>
      </q-list>
      <q-card>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'StudentPage',
  data () {
    return {
      name: 'Bishwajit Bhattacharjee',
      stdId: 1605003,
      info: {
        'Full Name': 'Bishwajit Bhattacharjee',
        'Student Id': 1605003,
        'Level/Term': 'Level-4 / Term-I',
        'Mobile No': '01521778899',
        'E-mail Address': 'bishwajit@buet.ac.bd',
        'Contact Person': 'Avijit Bhattacharjee, Brother, 01821253554',
      },
      currentCG: 3.00,
      previousResult: [
        {
          session: '2018-19',
          courses: [
            {
              name: 'CSE305-Computer Architecture',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'CSE307-Software Engineering',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'CSE309-Compiler',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'CSE311-Data Communication',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'CSE315-Micrprocessors, Microcontroller',
              credit: 3.00,
              grade: 3.00
            },
          ]
        },
        {
          session: '2017-18',
          courses: [
            {
              name: 'CSE207-Data Structure and Algorithms II',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'CSE215-Database',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'MATH247-Linear Algebra, Laplace Transformation',
              credit: 3.00,
              grade: 3.00
            },
            {
              name: 'EEE269-Electrical Devices and Instruments',
              credit: 3.00,
              grade: 3.00
            },
          ]
        }
      ]
    }
  },
  methods: {
    getGrade (courses) {
      let cum = 0, sum = 0;
      for (const course of courses) {
        cum += course.credit * course.grade
        sum += course.credit
      }
      return cum / sum
    }
  }
}
</script>
