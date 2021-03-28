<template>
  <q-page padding>
    <q-form class="q-ma-md row">
      <div class="col-12 text-h5 q-mb-md">Head Assignment</div>
      <q-select class="col-6 q-pr-lg" v-model="dept" :options="departments" label="Department" outlined></q-select>
      <q-input class="col-6 q-pr-lg" label="Head" value="" outlined></q-input>
      <div class="col-12 q-pt-md">
        <q-btn label="Assign" color="primary" icon="done" unelevated dense class="q-pr-sm"></q-btn>
        <q-btn label="Clear" color="primary" flat></q-btn>
      </div>
    </q-form>
    <br/><q-separator class="q-my-lg"/><br/>
    <q-form class="q-ma-md row">
      <div class="col-12 text-h5 q-mb-md">Provost Assignment</div>
      <q-select class="col-6 q-pr-lg" v-model="hall" :options="halls" label="Hall" outlined></q-select>
      <q-input class="col-6 q-pr-lg" label="Provost" value="" outlined></q-input>
      <div class="col-12 q-pt-md">
        <q-btn label="Assign" color="primary" icon="done" unelevated dense class="q-pr-sm"></q-btn>
        <q-btn label="Clear" color="primary" flat></q-btn>
      </div>
    </q-form>
    <br/><q-separator class="q-my-lg"/><br/>
    <q-form class="q-ma-md row">
      <div class="col-12 text-h5 q-mb-md">Supervisor Assignment</div>
      <q-input class="col-6 q-pr-lg" label="Student Id" value="" outlined></q-input>
      <q-input class="col-6 q-pr-lg" label="Supervisor" value="" outlined></q-input>
      <div class="col-12 q-pt-md">
        <q-btn label="Assign" color="primary" icon="done" unelevated dense class="q-pr-sm"></q-btn>
        <q-btn label="Clear" color="primary" flat></q-btn>
      </div>
    </q-form>
    <br/><q-separator class="q-my-lg"/><br/>
    <q-form class="q-ma-md row">
      <div class="col-12 text-h5 q-mb-md">* Results are ready</div>
      <div class="col-12 q-pt-md">
        <q-btn label="Publish" color="primary" icon="publish" unelevated dense class="q-pr-sm"></q-btn>
      </div>
    </q-form>
    <br/><br/><br/>
  </q-page>
</template>

<script>
export default {
  name: 'MiscellaneousPage',
  data () {
    return {
      dept: '',
      departments: ['CSE', 'EEE', 'ME', 'CE', 'IPE', 'WRE', 'NAME', 'CHE'],
      hall: '',
      halls: ['AH', 'SWH', 'RH'],
    }
  }
}
</script>
