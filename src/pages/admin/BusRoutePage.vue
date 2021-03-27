<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h4 q-mb-sm">Bus Route Management</div>
      <q-separator/>
      <div class="text-h5 q-mt-lg q-mb-md">Upload Route</div>
      <q-form class="row">
        <q-select class="col-3" v-model="forWhich" :options="routeOptions" outlined label="Route"></q-select>
        <q-file class="col-4 q-pl-lg" v-model="file" outlined label="Route Details File">
          <template v-slot:prepend>
            <q-icon name="attach_file"></q-icon>
          </template>
        </q-file>
        <div class="col-2"></div>
        <q-input class="col-3" v-model="newRoute" label="Add New Route" outlined>
          <template v-slot:append>
            <q-btn icon="add" flat @click="routeOptions.push(newRoute); newRoute = ''"></q-btn>
          </template>
        </q-input>
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
  name: 'BusRoutePage',
  data () {
    return {
      forWhich: '',
      newRoute: '',
      routeOptions: [
        'Mirpur',
        'Shanarpar',
        'Mohammadpur',
        'Badda',
        'Uttara'
      ],
      file: null
    }
  }
}
</script>
