<template>
  <q-page>
    <div style="max-width: 50%; margin-left: auto; margin-right: auto; margin-top: 5%">
      <q-form
        @submit="setUser(tempUser); $router.push({ name: 'AdminAccountPage' })"
        @reset="tempUser = ''; password = ''"
        class="q-gutter-md"
      >
        <q-input v-model="tempUser" label="UserName" outlined></q-input>
        <q-input type="password" v-model="password" label="Password" outlined>
          <template v-slot:append>
            <q-icon
              name="visibility_off"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <div style="float: right">
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      tempUser: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'setUser'
    ])
  }
}
</script>
