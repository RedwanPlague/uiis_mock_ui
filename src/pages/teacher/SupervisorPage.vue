<template>
  <q-page padding>
    <div class="row">
      <div class="text-h5 col-6 q-pt-sm text-left">All Attendees</div>
      <div class="text-h5 col-4 q-mb-md" style="position: relative; right: 0"></div>
      <div class="text-h5 col-2 q-mb-md" style="position: relative; right: 0">
        <q-input value="" label="search">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <router-link
        tag="div"
        v-for="(attendee, i) in attendees"
        :key="i"
        style="width: 33.33%; cursor: pointer"
        :to="{ name: 'StudentPage' }"
      >
        <q-card class="q-pa-sm col-4 q-ma-xs">
          <img src="../../assets/images.jpeg" alt="this" style="width: 60px; display: inline-block"/>
          <div class="q-ml-md" style="display: inline-block; position: absolute; top: 10%;">
            <span style="font-size: 1.2em">{{attendee.name}}</span><br/>
            {{attendee.stdId}}
          </div>
        </q-card>
      </router-link>
      <q-input value="" label="clear" class="col-6 q-mt-md">
        <template v-slot:prepend>
          <q-icon name="check" />
        </template>
        <template v-slot:append>
          <q-btn label="Clear" flat color="primary"></q-btn>
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SupervisorPage',
  data () {
    return {
      attendees: [
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Md. Redwanul Haque',
          stdId: 1605004
        },
        {
          name: 'Md. Rakibul Hasan Sarkar',
          stdId: 1605010
        },
        {
          name: 'Md. Ajmain Yasar Sahil',
          stdId: 1605023
        },
        {
          name: 'Md. Zawad Abdullah',
          stdId: 1605002
        },
        {
          name: 'Md. Mahir Shahriyar Sezan',
          stdId: 1605024
        },
      ],
    }
  }
}
</script>
