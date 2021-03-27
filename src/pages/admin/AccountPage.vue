<template>
  <q-page padding>
    <div class="row">
      <div class="text-h4 col-6 q-pa-md">Account Management</div>
      <div class="col-6 q-pa-md text-right">
        <q-btn-dropdown icon="add" label="Create Account" flat>
          <q-list class="text-center">
            <q-item clickable v-close-popup @click="whichType = 1; password = ''">
              <q-item-section><q-item-label>Student Account</q-item-label></q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="whichType = 2; password = ''">
              <q-item-section><q-item-label>Teacher Account</q-item-label></q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="whichType = 3; password = ''">
              <q-item-section><q-item-label>Staff Account</q-item-label></q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div v-if="whichType === 1">
      <q-form class="row q-ma-sm">
        <div class="col-12 text-h5 q-ml-sm">Student Creator</div>
        <q-input class="col-6 q-pa-sm" value="" label="Name" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Student Id" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Dept" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Hall" outlined></q-input>
        <q-input class="col-6 q-pa-sm" v-model="password" label="Password" outlined>
          <template v-slot:append>
            <q-btn label="generate" flat dense color="primary" @click="password = 'H8rF45&ggTiG'"></q-btn>
          </template>
        </q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Privileges" outlined>
          <template v-slot:append>
            <q-btn icon="add" flat dense></q-btn>
            <q-btn icon="keyboard_arrow_down" flat dense></q-btn>
          </template>
        </q-input>
        <div class="col-12 q-pa-sm">
          <q-btn label="Create" color="primary" unelevated></q-btn>
          <q-btn label="Cancel" color="primary" flat @click="whichType = 0"></q-btn>
        </div>
      </q-form>
    </div>
    <div v-else-if="whichType === 2">
      <q-form class="row q-ma-sm">
        <div class="col-12 text-h5 q-ml-sm">Teacher Creator</div>
        <q-input class="col-6 q-pa-sm" value="" label="Name" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Dept" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Teacher Id" outlined></q-input>
        <q-input class="col-6 q-pa-sm" v-model="password" label="Password" outlined>
          <template v-slot:append>
            <q-btn label="generate" flat dense color="primary" @click="password = 'H8rF45&ggTiG'"></q-btn>
          </template>
        </q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Privileges" outlined>
          <template v-slot:append>
            <q-btn icon="add" flat dense></q-btn>
            <q-btn icon="keyboard_arrow_down" flat dense></q-btn>
          </template>
        </q-input>
        <div class="col-12 q-pa-sm">
          <q-btn label="Create" color="primary" unelevated></q-btn>
          <q-btn label="Cancel" color="primary" flat @click="whichType = 0"></q-btn>
        </div>
      </q-form>
    </div>
    <div v-else-if="whichType === 3">
      <q-form class="row q-ma-sm">
        <div class="col-12 text-h5 q-ml-sm">Staff Creator</div>
        <q-input class="col-6 q-pa-sm" value="" label="Name" outlined></q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Staff Id" outlined></q-input>
        <q-input class="col-6 q-pa-sm" v-model="password" label="Password" outlined>
          <template v-slot:append>
            <q-btn label="generate" flat dense color="primary" @click="password = 'H8rF45&ggTiG'"></q-btn>
          </template>
        </q-input>
        <q-input class="col-6 q-pa-sm" value="" label="Privileges" outlined>
          <template v-slot:append>
            <q-btn icon="add" flat dense></q-btn>
            <q-btn icon="keyboard_arrow_down" flat dense></q-btn>
          </template>
        </q-input>
        <div class="col-12 q-pa-sm">
          <q-btn label="Create" color="primary" unelevated></q-btn>
          <q-btn label="Cancel" color="primary" flat @click="whichType = 0"></q-btn>
        </div>
      </q-form>
    </div>
    <div class="row q-ma-md">
      <div class="text-h5 col-6 q-pt-md text-left">Student List</div>
      <div class="text-h5 col-4 q-mb-md" style="position: relative; right: 0"></div>
      <div class="text-h5 col-2 q-mb-md" style="position: relative; right: 0">
        <q-input value="" label="search">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <q-markup-table class="col-12">
        <thead>
        <tr>
          <th class="text-left" style="font-size: 1.2em;">Course</th>
          <th style="font-size: 1.2em; width: 10%">Credit</th>
          <th style="font-size: 1.2em; width: 15%">Intended For</th>
          <th style="font-size: 1.2em; width: 10%" class="text-right"><span class="q-pr-md">Edit</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(course, i) in courseList" :key="i" class="text-center">
          <td class="text-left" style="font-size: 1.1em">
            <router-link :to="{ name: 'AdminCoursePage' }" style="text-decoration: none; color: black">
              {{course.course}}
            </router-link>
          </td>
          <td style="font-size: 1.1em">{{course.credit.toFixed(2)}}</td>
          <td style="font-size: 1.1em">{{course.intendedFor}}</td>
          <td class="text-right">
            <q-btn
              flat
              icon="edit"
              @click="showEditCourse = !showEditCourse"
            ></q-btn>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
      <q-btn class="q-mt-sm" label="Load More" color="primary" unelevated></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CoursePage',
  data () {
    return {
      tab: 'mails',
      whichType: 0,
      password: '',
      intendedList: [
        'Level-1 / Term-I',
        'Level-1 / Term-II',
        'Level-2 / Term-I',
        'Level-2 / Term-II',
        'Level-3 / Term-I',
        'Level-3 / Term-II',
        'Level-4 / Term-I',
        'Level-4 / Term-II',
      ],
      courseList: [
        {course: 'CSE321: Computer Networks', credit: 3.00, intendedFor: 'L4-T1'},
        {course: 'CSE325: Information System Design', credit: 3.00, intendedFor: 'L3-T2'},
        {course: 'CSE321: Computer Networks', credit: 3.00, intendedFor: 'L4-T1'},
        {course: 'CSE321: Computer Neworks', credit: 3.00, intendedFor: 'L4-T1'},
        {course: 'CSE325: Informatin System Design', credit: 3.00, intendedFor: 'L3-T2'},
        {course: 'CSE321: Computer Networs', credit: 3.00, intendedFor: 'L4-T1'},
        {course: 'CSE325: Information System Deign', credit: 3.00, intendedFor: 'L3-T2'},
        {course: 'CSE325: Infrmation System Design', credit: 3.00, intendedFor: 'L3-T2'},
      ],
      courseAssign: '',
      teacher: '',
      teacherList: [
        'NBH: Nabil Bin Hasan',
        'AB: Abdul Baki',
        'KD: Kadir Doyan',
        'NBH: Nabil Bin Haan',
        'AB: Abdul Bai',
        'KD: Kadir Doya',
      ]
    }
  },
  computed: {
    courseOptions () {
      const options = []
      for (const course of this.courseList) {
        options.push(course.course)
      }
      return options
    }
  }
}
</script>
