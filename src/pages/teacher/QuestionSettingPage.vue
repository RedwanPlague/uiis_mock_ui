<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Pending</h4>
      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left" style="font-size: 1.2em;">Course</th>
          <th style="font-size: 1.2em; width: 10%">Deadline</th>
          <th style="font-size: 1.2em; width: 10%">Type</th>
          <th style="font-size: 1.2em; width: 15%">File</th>
          <th style="font-size: 1.2em; width: 10%" class="text-right"><span class="q-pr-md">Submit</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(question, i) in questions" :key="i" class="text-center">
          <td class="text-left" style="font-size: 1.1em">
            <router-link :to="{ name: 'CoursePage' }" style="text-decoration: none; color: black">
              {{question.course}}
            </router-link>
          </td>
          <td style="font-size: 1.1em">{{question.session}}</td>
          <td style="font-size: 1.1em">{{question.type}}</td>
          <td>
            <q-file v-model="question.file" style="width: 130%;">
              <template v-slot:prepend>
                <q-icon name="attach_file"/>
              </template>
            </q-file>
          </td>
          <td class="text-right">
            <q-btn
              color="primary"
              flat
              @click="submitted = submitted.concat(questions.splice(i, 1))"
            >
              Submit
            </q-btn>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
    </div>
    <br/>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Submitted</h4>
      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left" style="font-size: 1.2em; width: 50%">Course</th>
          <th style="font-size: 1.2em">Type</th>
          <th style="font-size: 1.2em">File</th>
          <th style="font-size: 1.2em" class="text-right"><span class="q-pr-md">Date</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(question, i) in submitted" :key="i" class="text-center">
          <td class="text-left" style="font-size: 1.1em">{{question.course}}</td>
          <td style="font-size: 1.1em">{{question.type}}</td>
          <td>
            <q-file v-model="question.file"></q-file>
          </td>
          <td class="text-right" style="font-size: 1.1em">
            8th May, 12:38 AM
          </td>
        </tr>
        </tbody>
      </q-markup-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'QuestionSettingPage',
  data () {
    return {
      questions: [
        {
          course: 'CSE321: Computer Networks',
          session: '8th April, 9:00 AM',
          type: 'CT (20 marks)',
          file: null
        },
        {
          course: 'CSE409-Computer Graphics',
          session: '8th April, 10:00 AM',
          type: 'Quiz (30 marks)',
          file: null
        },
        {
          course: 'CSE313:Operating System',
          session: '8th April, 10:00 AM',
          type: 'Quiz (30 marks)',
          file: null
        },
      ],
      submitted: []
    }
  }
}
</script>
