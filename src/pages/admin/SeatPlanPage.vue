<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h4 q-mb-sm">Seat Plan Management</div>
      <q-separator/>
      <div class="text-h5 q-mt-lg q-mb-md">Upload Seat Plan</div>
      <q-form class="row">
        <q-select class="col-3 q-pr-sm" v-model="dept" :options="departments" label="Department" outlined></q-select>
        <q-select class="col-2 q-pr-sm" v-model="op" :options="studentOptions" outlined label="Group"></q-select>
        <q-file class="col-4" v-model="file" outlined label="Seat Plan File">
          <template v-slot:prepend>
            <q-icon name="attach_file"></q-icon>
          </template>
        </q-file>
        <div class="col-2"></div>
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
  name: 'SeatPlanPage',
  data () {
    return {
      file: null,
      dept: '',
      departments: ['CSE', 'EEE', 'ME', 'CE', 'IPE', 'WRE', 'NAME', 'CHE'],
      op: '',
      studentOptions: [
        'L4-T1',
        'L3-T1',
        'L2-T1',
        'L1-T1'
      ],
    }
  }
}
</script>
