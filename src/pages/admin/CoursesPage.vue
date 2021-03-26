<template>
  <q-page padding>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="mails" label="Management" />
      <q-tab name="movies" label="Assignment" />
    </q-tabs>

    <q-separator/>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="row">
          <div class="text-h4 col-6 q-mb-lg">Course Management</div>
          <div class="col-6 text-right">
            <q-btn icon="add" label="add course" unelevated @click="showAddCourse = !showAddCourse"></q-btn>
          </div>
        </div>
        <q-slide-transition>
          <div v-if="showAddCourse">
            <q-form class="row">
              <div class="col-12 text-h5 q-ml-sm">Course Creator</div>
              <q-input class="col-6 q-pa-sm" value="" label="Name" outlined></q-input>
              <q-input class="col-6 q-pa-sm" value="" label="Dept" outlined></q-input>
              <q-input class="col-6 q-pa-sm" value="" label="Credit" type="Number" outlined></q-input>
              <q-select class="col-6 q-pa-sm" value="" :options="intendedList" label="Intended For" outlined></q-select>
              <q-input class="col-6 q-pa-sm" value="" label="Prerequisite" outlined>
                <template v-slot:append>
                  <q-btn icon="add" flat dense></q-btn>
                  <q-btn icon="keyboard_arrow_down" flat dense></q-btn>
                </template>
              </q-input>
              <q-input class="col-12 q-pa-sm" value="" label="Description" type="textarea" outlined></q-input>
              <div class="col-12 q-pa-sm">
                <q-btn label="Add" color="primary" unelevated></q-btn>
                <q-btn label="Cancel" color="primary" flat></q-btn>
              </div>
            </q-form>
          </div>
        </q-slide-transition>
        <div class="row q-ma-md">
          <div class="text-h5 col-6 q-pt-md text-left">Course List</div>
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
      </q-tab-panel>
      <q-tab-panel name="movies">
        <div class="text-h4 q-ma-sm">Course Assignment</div>
        <q-form class="row q-mt-lg">
          <q-select class="col-6 q-pa-sm" v-model="courseAssign" :options="courseOptions" label="Course" outlined></q-select>
          <q-select class="col-6 q-pa-sm" v-model="teacher" :options="teacherList" label="Teacher" outlined></q-select>
          <div class="col-12 q-pa-sm">
            <q-btn label="Assign" color="primary" unelevated></q-btn>
            <q-btn label="Cancel" color="primary" flat></q-btn>
          </div>
        </q-form>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'CoursePage',
  data () {
    return {
      tab: 'mails',
      showAddCourse: false,
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
