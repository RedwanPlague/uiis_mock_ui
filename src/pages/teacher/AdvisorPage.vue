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
      <q-tab name="mails" label="Advisees" />
      <q-tab name="alarms" label="Special Care" />
      <q-tab name="movies" label="Registrations" />
      <q-tab name="add" label="Adds/Drops" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="row">
          <div class="text-h5 col-6 q-pt-sm text-left">All Advisees</div>
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
            v-for="(advisee, i) in advisees"
            :key="i"
            style="width: 33.33%; cursor: pointer"
            :to="{ name: 'StudentPage' }"
          >
            <q-card class="q-pa-sm col-4 q-ma-xs">
              <img src="../../assets/images.jpeg" alt="this" style="width: 60px; display: inline-block"/>
              <div class="q-ml-md" style="display: inline-block; position: absolute; top: 10%;">
                <span style="font-size: 1.2em">{{advisee.name}}</span><br/>
                {{advisee.stdId}}
              </div>
            </q-card>
          </router-link>
        </div>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="row">
          <div class="text-h5 col-6 q-pt-sm text-left">Special Care</div>
          <div class="text-h5 col-4 q-mb-md" style="position: relative; right: 0"></div>
          <div class="text-h5 col-2 q-mb-md" style="position: relative; right: 0">
            <q-input value="" label="add">
              <template v-slot:prepend>
                <q-icon name="add" />
              </template>
            </q-input>
          </div>
          <router-link
            tag="div"
            v-for="(advisee, i) in specialCare"
            :key="i"
            style="width: 50%; cursor: pointer"
            :to="{ name: 'StudentPage' }"
          >
            <q-card class="q-pa-sm q-ma-xs">
              <img src="../../assets/images.jpeg" alt="this" style="width: 60px; display: inline-block"/>
              <div class="q-ml-md" style="display: inline-block; position: absolute; top: 10%;">
                <span style="font-size: 1.2em">{{advisee.name}}</span><br/>
                {{advisee.stdId}}
              </div>
            </q-card>
          </router-link>
        </div>
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
              <q-btn label="Forward" color="green" v-close-popup unelevated
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

      <q-tab-panel name="add">
        <div class="row">
          <div class="text-h5 col-6 q-pt-sm text-left">Pending Add/Drops</div>
          <div class="text-h5 col-4 q-mb-md" style="position: relative; right: 0"></div>
          <div class="text-h5 col-2 q-mb-md" style="position: relative; right: 0">
            <q-input value="" label="search">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div
            v-for="(advisee, i) in addDrops"
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
                @click="dialogOpen2 = !dialogOpen2"
              ></q-btn>
            </q-card>
          </div>
        </div>
        <q-dialog v-model="dialogOpen2" style="width: 800px">
          <q-card>
            <q-card-section>
              <q-markup-table flat wrap-cells>
                <thead>
                <tr>
                  <th class="text-left" style="font-size: 1.2em; width: 50%">Course</th>
                  <th style="font-size: 1.2em">Credit</th>
                  <th style="font-size: 1.2em">Offered In</th>
                  <th style="font-size: 1.2em">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(course, i) in drop" :key="i" class="text-center">
                  <td class="text-left" style="font-size: 1.1em">{{course.name}}</td>
                  <td style="font-size: 1.1em">{{course.credit.toFixed(2)}}</td>
                  <td style="font-size: 1.1em">{{course.offeredIn}}</td>
                  <td style="font-size: 1.1em">
                    <span :style="{color: course.action === 'drop' ? 'red' : 'green'}">{{course.action}}</span>
                  </td>
                </tr>
                </tbody>
              </q-markup-table>
            </q-card-section>
            <q-card-actions class="q-pr-md" align="right">
              <q-btn label="Approve" color="green" v-close-popup unelevated
                     @click="addDrops.splice(0, 1)"
              ></q-btn>
              <q-btn label="Reject" color="red" v-close-popup unelevated
                     @click="addDrops.splice(0, 1)"
              ></q-btn>
              <q-btn label="Close" flat v-close-popup unelevated></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
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
      dialogOpen: false,
      dialogOpen2: false,
      registration: [
        { name: 'CSE463: Introduction to Bioinformatics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
        { name: 'Graphics', credit: 3.00, offeredIn: 'L4-T1' },
      ],
      addDrops: [
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
        {
          name: 'Bishwajit Bhattacharjee',
          stdId: 1605003
        },
      ],
      drop: [
        { name: 'CSE463: Introduction to Bioinformatics', credit: 3.00, action: 'drop', offeredIn: 'L4-T1' },
      ]
    }
  }
}
</script>
