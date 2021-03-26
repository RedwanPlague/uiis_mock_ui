<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h5 q-mb-md">Script List</div>
      <q-list>
        <q-expansion-item :label="courses[0] + (isOpen1 ? ' *' : '')" v-model="isOpen1">
          <q-markup-table>
            <thead>
            <tr>
              <th class="text-left" style="font-size: 1.1em">Script</th>
              <th style="width: 20%; font-size: 1.1em">Marks</th>
              <th style="font-size: 1.1em">Scrutinization Comment</th>
              <th style="font-size: 1.1em">Save</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="i in 15" :key="i">
              <td class="text-left">
                <a href="../../../public/script.pdf" download>
                  {{i+1605000}}
                </a>
              </td>
              <td class="text-center">{{90+(i%5)}}</td>
              <td class="text-center">
                <q-input type="text" autogrow v-model="comments[i-1]" dense></q-input>
              </td>
              <td class="text-center">
                <q-btn label="save" flat color="green"></q-btn>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-center">
                <q-btn label="Done" color="green" unelevated @click="isOpen1 = !isOpen1; clearBadge(4)"></q-btn>
              </td>
            </tr>
            </tbody>
          </q-markup-table>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ScrutinizingScriptsPage',
  data () {
    return {
      courses: [
        'CSE301: Security (Term Final)',
      ],
      comments: [null, null, null, null, null],
      isOpen1: true,
    }
  },
  methods: {
    ...mapActions([
      'clearBadge'
    ])
  }
}
</script>
