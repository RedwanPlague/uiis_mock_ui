<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h4 q-mb-sm">Routine Management</div>
      <q-separator/>
      <div class="text-h5 q-mt-lg q-mb-md">Upload Routine</div>
      <q-form class="row">
        <q-select class="col-3 q-pr-sm" v-model="dept" :options="departments" label="Department" outlined></q-select>
        <q-select class="col-2 q-pr-sm" v-model="forWhich" :options="forOptions" outlined label="For"></q-select>
        <div class="col-3 q-pr-sm">
          <q-select
            v-if="forWhich === 'Student'"
            v-model="group"
            label="Student Group"
            :options="studentOptions"
            outlined
          ></q-select>
          <q-input
            v-else-if="forWhich === 'Teacher'"
            value=""
            label="Teacher Id"
            outlined
          ></q-input>
        </div>
        <q-file class="col-4 q-pr-sm" v-model="file" outlined label="Routine File">
          <template v-slot:prepend>
            <q-icon name="attach_file"></q-icon>
          </template>
        </q-file>
        <div class="col-12 q-pt-sm">
          <q-btn label="Upload" color="primary" icon="upload" unelevated dense class="q-pr-sm"></q-btn>
          <q-btn label="Cancel" color="primary" flat></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ClassRoutinePage',
  data () {
    return {
      forWhich: '',
      dept: '',
      departments: ['CSE', 'EEE', 'ME', 'CE', 'IPE', 'WRE', 'NAME', 'CHE'],
      forOptions: [ 'Student', 'Teacher' ],
      studentOptions: [
        'L4-T1 A1',
        'L4-T1 A2',
        'L4-T1 B1',
        'L4-T1 B2',
        'L3-T1 A1',
        'L3-T1 A2',
        'L3-T1 B1',
        'L3-T1 B2',
      ],
      group: '',
      file: null
    }
  }
}
</script>
