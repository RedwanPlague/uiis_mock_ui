<template>
  <q-page padding>
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
  </q-page>
</template>

<script>
export default {
  name: 'ProvostPage',
  data () {
    return {
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
    }
  }
}
</script>
