<template>
  <q-page padding>
    <q-form class="row">
      <div class="col-12 text-h5 q-ma-sm">Schedule Exam</div>
      <q-input class="col-6 q-pa-sm" value="" label="Course" outlined></q-input>
      <q-input class="col-6 q-pa-sm" value="" label="Session" outlined></q-input>
      <q-input class="q-pa-sm col-6" v-model="date" label="Date" outlined>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="date" mask="YYYY-MM-DD">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input class="q-pa-sm col-6" v-model="time" label="Time" outlined>
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="time" mask="hh:mm A">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-select class="col-6 q-pa-sm" v-model="setter" :options="teacherList" label="Setters" outlined multiple use-chips></q-select>
      <q-select class="col-6 q-pa-sm" v-model="invigilator" :options="teacherList" label="Invigilators" outlined multiple use-chips></q-select>
      <div class="col-12 q-pa-sm">
        <q-btn label="Schedule" color="primary" unelevated></q-btn>
        <q-btn label="Cancel" color="primary" flat></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'ExamPage',
  data () {
    return {
      date: null,
      time: null,
      setter: [],
      teacherList: [
        'NBH: Nabil Bin Hasan',
        'AB: Abdul Baki',
        'KD: Kadir Doyan',
        'NBH: Nabil Bin Haan',
        'AB: Abdul Bai',
        'KD: Kadir Doya',
        'TM: Tauqir Mahim',
      ],
      invigilator: [],
    }
  }
}
</script>
