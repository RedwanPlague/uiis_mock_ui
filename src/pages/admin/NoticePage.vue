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
      <q-tab name="mails" label="General Notice" />
      <q-tab name="movies" label="Class Routine" />
      <q-tab name="alarms" label="Bus Route" />
      <q-tab name="add" label="Seat Plan" />
    </q-tabs>

    <q-separator/>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="q-ma-md">
          <div class="row">
            <div class="text-h4 col-6 q-mb-lg">Notice Management</div>
            <div class="col-6 text-right">
              <q-btn icon="add" label="Add Notice" unelevated @click="showAddNotice = !showAddNotice"></q-btn>
            </div>
          </div>
          <q-slide-transition>
            <div v-if="showAddNotice">
              <q-form class="row">
                <q-input class="col-6 q-pa-sm" value="" label="Subject" outlined></q-input>
                <q-input class="col-4 q-pa-sm" type="file" value=""></q-input>
                <div class="col-12 q-pa-sm">
                  <q-btn label="Upload" color="primary" icon="upload" unelevated dense class="q-pr-sm"></q-btn>
                  <q-btn label="Cancel" color="primary" flat></q-btn>
                </div>
              </q-form>
            </div>
          </q-slide-transition>
        </div>
      </q-tab-panel>
      <q-tab-panel name="movies">haha</q-tab-panel>
      <q-tab-panel name="alarms">haha</q-tab-panel>
      <q-tab-panel name="add">haha</q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'NoticePage',
  data () {
    return {
      tab: 'mails',
      showAddNotice: false,
    }
  }
}
</script>
