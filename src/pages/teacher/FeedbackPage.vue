<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0">Submit Feedback</h4>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="row">
          <q-input class="col-8" placeholder="Subject" v-model="subject" outlined dense></q-input>
          <div class="col-1"></div>
          <q-select class="col-3" v-model="anonymity" :options="options" outlined dense></q-select>
        </div>
        <q-input
          v-model="feedbackText"
          outlined
          type="textarea"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'FeedbackPage',
  data() {
    return {
      subject: '',
      feedbackText: '',
      anonymity: 'Anonymous',
      options: ['Anonymous', 'Identified'],
    }
  },
  methods: {
    onSubmit() {
      this.subject = ''
      this.feedbackText = ''
    }
  }
}
</script>
