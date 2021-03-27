<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h4 q-mb-sm">Notice Management</div>
      <q-separator/>
      <div class="text-h5 q-mt-lg q-mb-md">Upload Notice</div>
      <q-form class="row">
        <q-input class="col-8 q-pr-sm" v-model="subject" label="Subject" outlined></q-input>
        <q-file class="col-4 q-pr-sm" v-model="file" outlined label="Notice File">
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
  name: 'NoticePage',
  data () {
    return {
      subject: '',
      file: null
    }
  }
}
</script>
