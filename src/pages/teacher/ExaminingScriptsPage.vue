<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h5 q-mb-md">Script List</div>
      <q-list>
        <q-expansion-item :label="courses[0]" v-model="isOpen1">
          <q-markup-table>
            <thead>
            <tr>
              <th class="text-left" style="font-size: 1.1em">Script</th>
              <th style="width: 20%; font-size: 1.1em">Marks</th>
              <th style="font-size: 1.1em">Save</th>
              <th style="font-size: 1.1em">Scrutinized Result</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="i in 15" :key="i">
              <td class="text-left">
                <a href="/files/script.pdf" download>
                  {{i+1605000}}
                </a>
              </td>
              <td class="text-center"><q-input v-model="marks[i-1]" type="number" class="absolute-center q-pb-sm"></q-input></td>
              <td class="text-center">
                <q-btn label="save" flat color="green"></q-btn>
              </td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-center">
                <q-btn
                  label="Done"
                  color="green"
                  unelevated
                  @click="isOpen1 = !isOpen1; addBadge(4);"
                ></q-btn>
              </td>
              <td></td>
            </tr>
            </tbody>
          </q-markup-table>
        </q-expansion-item>
        <q-expansion-item :label="courses[1]" v-model="isOpen2">
          <q-markup-table>
            <thead>
            <tr>
              <th class="text-left" style="font-size: 1.1em">Script</th>
              <th style="width: 20%; font-size: 1.1em">Marks</th>
              <th style="font-size: 1.1em">Save</th>
              <th style="font-size: 1.1em">Scrutinized Result</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="text-left">s55d3344</td>
              <td class="text-center">90</td>
              <td class="text-center">
<!--                <q-btn label="save" flat color="green"></q-btn>-->
              </td>
              <td class="text-center" style="color: green">&#x2714;</td>
            </tr>
            <tr>
              <td class="text-left">s56d3443</td>
              <td class="text-center"><q-input value="78" type="number" class="absolute-center q-pb-sm"></q-input></td>
              <td class="text-center">
                <q-btn label="save" flat color="green"></q-btn>
              </td>
              <td class="text-center" style="color: red">One answer not examined</td>
            </tr>
            <tr v-for="i in 3" :key="i">
              <td class="text-left">{{'s43d'+(i+7855)}}</td>
              <td class="text-center">{{90+i}}</td>
              <td class="text-center">
<!--                <q-btn label="save" flat color="green"></q-btn>-->
              </td>
              <td class="text-center" style="color: green">&#x2714;</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-center">
                <q-btn label="Done" color="green" unelevated @click="isOpen2 = !isOpen2"></q-btn>
              </td>
              <td></td>
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
  name: 'ExaminingScriptsPage',
  data () {
    return {
      courses: [
        'CSE409: Computer Graphics (CT 1)',
        'CSE405: Computer Security (Term Final)',
      ],
      marks: [null, null, null, null, null],
      isOpen1: false,
      isOpen2: false,
    }
  },
  methods: {
    ...mapActions([
      'addBadge'
    ])
  }
}
</script>
