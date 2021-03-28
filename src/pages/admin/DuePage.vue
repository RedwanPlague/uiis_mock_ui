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
          <div class="col-12 text-h5 q-ma-sm">Due Creator</div>
          <q-input class="col-6 q-pa-sm q-mb-lg" value="" hint="* Separate by comma to use multiple" label="Student ID" outlined></q-input>
          <q-input class="col-6 q-pa-sm q-mb-lg" value="" label="Amount" type="Number" outlined></q-input>
          <div class="q-pa-sm col-6">
            <q-input v-model="date" label="Deadline" outlined>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <q-select class="col-6 q-pa-sm" value="" :options="dueList" label="Type" outlined></q-select>
          <div class="col-12 q-pa-sm">
            <q-btn label="Add" color="primary" unelevated></q-btn>
            <q-btn label="Cancel" color="primary" flat></q-btn>
          </div>
        </q-form>
      </q-tab-panel>
      <q-tab-panel name="alarms">
        <div>
          <q-form class="row">
            <div class="col-12 text-h5 q-ma-sm">Search Due</div>
            <q-input class="col-6 q-pa-sm" v-model="parts.title" label="By Student ID"></q-input>
            <q-input class="col-6 q-pa-sm" v-model="parts.title" label="By Type"></q-input>
            <div class="q-pa-sm col-6">
              <q-input v-model="date" label="Min Date">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="q-pa-sm col-6">
              <q-input v-model="date" label="Max Date">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
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
      showAddCourse: false,
      date: null,
      dept: '',
      departments: ['CSE', 'EEE', 'ME', 'CE', 'IPE', 'WRE', 'NAME', 'CHE'],
      prerequisites: [],
      prerequisitesSearch: [],
      preReqList: [
        'CSE 321', 'CSE 325', 'CSE 101', 'CSE 207', 'CSE 265'
      ],
      dueList: [
        'HF(Hall Fee)',
        'RF(Registration Fee)',
        'DF(Dining Fee)'
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
