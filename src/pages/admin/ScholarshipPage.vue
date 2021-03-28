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
      <q-tab name="mails" label="Creation" />
      <q-tab name="alarms" label="View/Edit" />

    </q-tabs>

    <q-separator/>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <q-form class="row">
          <div class="col-12 text-h5 q-ma-sm">Scholarship Creator</div>
          <!--          <q-input class="col-6 q-pa-sm" value="" label="Title" outlined></q-input>-->
          <q-input class="col-6 q-pa-sm q-mb-lg" v-model="ids" hint="* Separate by comma to use multiple" label="Student ID" outlined></q-input>
          <q-select class="col-3 q-pa-sm q-mb-lg" value="" :options="scholarshipList" label="Type" outlined></q-select>
          <q-input class="col-3 q-pa-sm q-mb-lg" v-model="newType" label="New Type" outlined>
            <template v-slot:append>
              <q-btn icon="add" flat @click="scholarshipList.push(newType); newType = ''"></q-btn>
            </template>
          </q-input>
          <!--          <q-select class="col-6 q-pa-sm" v-model="dept" :options="departments" label="Department" outlined></q-select>-->
          <q-input class="col-3 q-pa-sm" value="" label="Amount" type="Number" outlined></q-input>
          <q-input class="col-3 q-pa-sm" value="" label="Deduction" type="Number" outlined></q-input>
          <q-select class="col-3 q-pa-sm" value="" :options="intendedList" label="Given For" outlined></q-select>


          <div class="col-12 q-pa-sm">
            <q-btn label="Add" color="primary" unelevated></q-btn>
            <q-btn label="Cancel" color="primary" flat></q-btn>
          </div>
        </q-form>
      </q-tab-panel>
      <q-tab-panel name="alarms">
        <div>
          <q-form class="row">
            <div class="col-12 text-h5 q-ma-sm">Search Scholarship</div>
            <q-input class="col-6 q-pa-sm" v-model="parts.title" label="By Student ID"></q-input>
            <q-input class="col-6 q-pa-sm" v-model="parts.title" label="By Type"></q-input>
            <div class="col-12 q-pa-sm q-mt-md">
              <q-btn label="Search" color="primary" icon="search" unelevated dense class="q-pr-sm"
                     @click="showCourses = !showCourses"
              ></q-btn>
              <q-btn label="Cancel" color="primary" flat></q-btn>
            </div>
          </q-form>
        </div>
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
      ids: [],
      showAddCourse: false,
      date: null,
      dept: '',
      departments: ['CSE', 'EEE', 'ME', 'CE', 'IPE', 'WRE', 'NAME', 'CHE'],
      prerequisites: [],
      prerequisitesSearch: [],
      preReqList: [
        'CSE 321', 'CSE 325', 'CSE 101', 'CSE 207', 'CSE 265'
      ],
      newType: '',
      scholarshipList: [
        'Board',
        'Technical',
        'University Merit',
      ],
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
      ],

      showCourses: false,
      parts: {
        title: '',
        name: '',
        min: '',
        max: '',
      }

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
