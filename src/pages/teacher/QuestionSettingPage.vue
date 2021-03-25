<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0; margin-bottom: 0.5em">Pending</h4>
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left" style="font-size: 1.2em; width: 50%">Course</th>
            <th style="font-size: 1.2em">Session</th>
            <th style="font-size: 1.2em">Type</th>
            <th style="font-size: 1.2em">File</th>
            <th style="font-size: 1.2em" class="text-right"><span class="q-pr-md">Submit</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, i) in questions" :key="i" class="text-center">
            <td class="text-left" style="font-size: 1.1em">{{question.course}}</td>
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
          <th style="font-size: 1.2em">Session</th>
          <th style="font-size: 1.2em">Type</th>
          <th style="font-size: 1.2em">File</th>
          <th style="font-size: 1.2em" class="text-right"><span class="q-pr-md">Date</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(question, i) in submitted" :key="i" class="text-center">
          <td class="text-left" style="font-size: 1.1em">{{question.course}}</td>
          <td style="font-size: 1.1em">{{question.session}}</td>
          <td style="font-size: 1.1em">{{question.type}}</td>
          <td>
            <q-file v-model="question.file">
              <template v-slot:prepend>
                <q-icon name="attach_file"/>
              </template>
            </q-file>
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
          course: 'Graphics',
          session: '2017-18',
          type: 'CT (20 marks)',
          file: null
        },
        {
          course: 'Security',
          session: '2018-19',
          type: 'Quiz (30 marks)',
          file: null
        },
        {
          course: 'HPDS',
          session: '2018-19',
          type: 'Quiz (30 marks)',
          file: null
        },
      ],
      submitted: []
    }
  }
}
</script>
