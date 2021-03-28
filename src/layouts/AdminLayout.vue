<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar>
        <q-btn
          :disable="!user"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Admins' UIIS
        </q-toolbar-title>

        <q-btn-dropdown v-if="user" icon="person" :label="user" flat>
          <q-list>
            <q-item clickable v-close-popup :to="{ name: 'AdminCoursesPage' }" style="color: inherit">
              <q-item-section>
                <q-item-label>
                  <q-avatar icon="account_circle"></q-avatar>
                  Account
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="setUser(null); $router.push({ name: 'Admin' })">
              <q-item-section>
                <q-item-label>
                  <q-avatar icon="logout"></q-avatar>
                  Logout
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn v-else flat :to="{ name: 'Admin' }">SIGN IN</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="user"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Admin's Options
        </q-item-label>
        <EssentialLink
          v-for="link in adminLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed: {
    ...mapGetters([
      'adminLinks',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'setUser'
    ])
  }
}
</script>
