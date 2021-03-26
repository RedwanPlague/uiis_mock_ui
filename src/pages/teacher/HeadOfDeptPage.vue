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
      <q-tab name="mails" label="Scholarships" />
      <q-tab name="movies" label="Registrations" />
      <q-tab name="alarms" label="Term Results" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="text-h5 q-pt-sm q-mb-md">Pending Scholarships</div>
        <q-markup-table>
          <thead>
          <tr>
            <th style="font-size: 1.1em" class="text-left">Student</th>
            <th style="font-size: 1.1em">Type</th>
            <th style="font-size: 1.1em">Details</th>
            <th style="font-size: 1.1em">Approve</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(student, i) in pendings" :key="i">
            <td style="font-size: 1.05em">{{student.name}}({{student.stdId}})</td>
            <td style="font-size: 1.05em" class="text-center">{{student.type}}</td>
            <td style="font-size: 1.05em" class="text-center">
              <q-btn label="View" flat color="primary" @click="dialogOpen = !dialogOpen"></q-btn>

            </td>
            <td style="font-size: 1.05em" class="text-center">
              <q-btn label="Approve" flat color="green"></q-btn>
            </td>
          </tr>
          </tbody>
        </q-markup-table>
        <q-dialog v-model="dialogOpen">
          <q-card>
            <q-card-section class="text-h5">
              Details
            </q-card-section>
            <q-card-section class="q-mx-md">
              <q-markup-table flat separator="none" dense class="q-mb-sm">
                <tbody>
                <tr>
                  <td style="font-size: 1.2em">{{pendings[0].name}}({{pendings[0].stdId}})</td>
                  <td style="font-size: 1.2em">Dean's List</td>
                </tr>
                <tr>
                  <td style="font-size: 1.2em" class="text-right">Amount</td>
                  <td style="font-size: 1.2em">3000</td>
                </tr>
                <tr>
                  <td style="font-size: 1.2em" class="text-right">Deduction</td>
                  <td style="font-size: 1.2em">1000</td>
                </tr>
                <tr>
                  <td style="font-size: 1.2em" class="text-right">Total</td>
                  <td style="font-size: 1.2em">2000</td>
                </tr>
                </tbody>
              </q-markup-table>
            </q-card-section>
            <q-card-actions class="q-pr-md" align="right">
              <q-btn label="Approve" color="green" v-close-popup unelevated
                     @click="pendings.splice(0, 1)"
              ></q-btn>
              <q-btn label="Close" flat v-close-popup unelevated></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="row">
          <div class="text-h5 col-6 q-pt-sm text-left">Pending Requests</div>
          <div class="text-h5 col-4 q-mb-md" style="position: relative; right: 0"></div>
          <div class="text-h5 col-2 q-mb-md" style="position: relative; right: 0">
            <q-input value="" label="search">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div
            v-for="(advisee, i) in pendings"
            :key="i"
            style="width: 50%; cursor: pointer"
          >
            <q-card class="q-pa-sm q-ma-xs row">
              <img class="col-2" src="../../assets/images.jpeg" alt="this" style="width: 60px;"/>
              <div class="col-8 q-ml-md">
                <span style="font-size: 1.2em">{{advisee.name}}</span><br/>
                {{advisee.stdId}}
              </div>
              <q-btn
                label="View"
                style="height: 35px"
                class="q-mt-sm" unelevated color="primary"
                @click="dialogOpen = !dialogOpen"
              ></q-btn>
            </q-card>
          </div>
        </div>
        <q-dialog v-model="dialogOpen">
          <q-card>
            <q-card-section>
              <q-markup-table flat>
                <thead>
                <tr>
                  <th class="text-left" style="font-size: 1.2em; width: 50%">Course</th>
                  <th style="font-size: 1.2em">Credit</th>
                  <th style="font-size: 1.2em">Offered In</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(course, i) in registration" :key="i" class="text-center">
                  <td class="text-left" style="font-size: 1.1em">{{course.name}}</td>
                  <td style="font-size: 1.1em">{{course.credit.toFixed(2)}}</td>
                  <td style="font-size: 1.1em">{{course.offeredIn}}</td>
                </tr>
                <tr>
                  <td class="text-right" style="font-size: 1.1em">Total</td>
                  <td class="text-center" style="font-size: 1.1em">
                    {{registration.reduce((sum, course) => sum + course.credit, 0).toFixed(2)}}
                  </td>
                  <td></td>
                </tr>
                </tbody>
              </q-markup-table>
            </q-card-section>
            <q-card-actions class="q-pr-md" align="right">
              <q-btn label="Approve" color="green" v-close-popup unelevated
                     @click="pendings.splice(0, 1)"
              ></q-btn>
              <q-btn label="Reject" color="red" v-close-popup unelevated
                     @click="pendings.splice(0, 1)"
              ></q-btn>
              <q-btn label="Close" flat v-close-popup unelevated></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="row">
          <div class="text-h5 col-6 q-pt-sm text-left">Statistics</div>
          <div class="col-6"></div>
          <div class="col-3"></div>
          <q-img src="../../assets/barchart.png" width="400px" class="q-mt-md col-6"></q-img>
          <div class="col-3"></div>
          <div class="col-12 q-ma-lg"></div>
          <div class="col-4"></div>
          <div class="col-2 q-mt-lg">
            <q-btn label="Approve" color="green" unelevated
                   @click="pendings.splice(0, 1)"
            ></q-btn>
          </div>
          <div class="col-2 q-mt-lg">
            <q-btn label="Reject" color="red" unelevated
                   @click="pendings.splice(0, 1)"
            ></q-btn>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'AdvisorPage',
  data () {
    return {
      tab: 'mails',
      filterSelected: null,
      filterOptions: ['cg', 'age', 'regular'],
      advisees: [
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
      ],
      specialCare: [
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
      ],
      pendings: [
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003,
          type: 'Dean\'s List'
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
      ],
      dialogOpen: false,
      registration: [
        { name: 'CSE463: Introduction to Bioinformatics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
      ]
    }
  }
}
</script>
