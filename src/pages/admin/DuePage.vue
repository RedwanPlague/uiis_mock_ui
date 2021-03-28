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
          <q-input class="col-6 q-pa-sm" value="" label="Student ID" outlined></q-input>
          <q-input class="col-6 q-pa-sm" value="" label="Amount" type="Number" outlined></q-input>
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
<!--            <q-input class="col-2 q-pa-sm" v-model="parts.min" label="Min Date" type="number" min="0.75" step="0.25"></q-input>-->
<!--            <q-input class="col-2 q-pa-sm" v-model="parts.max" label="Max Date" type="number" min="0.75" step="0.25"></q-input>-->
<!--            <q-input class="col-3 q-pa-sm" value="" label="For"></q-input>-->
<!--            <q-select class="col-5 q-pa-sm" label="Prerequisites"-->
<!--                      v-model="prerequisitesSearch" use-chips multiple :options="preReqList"-->
<!--            ></q-select>-->
            <div class="col-12 q-pa-sm q-mt-md">
              <q-btn label="Search" color="primary" icon="search" unelevated dense class="q-pr-sm"
                     @click="showCourses = !showCourses"
              ></q-btn>
              <q-btn label="Cancel" color="primary" flat></q-btn>
            </div>
          </q-form>
          <q-markup-table class="col-12 q-mt-lg" flat v-if="showCourses">
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
