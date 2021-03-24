<template>
  <q-page padding>
    <div class="q-pa-md">
      <h4 style="margin-top: 0">Submit Feedback</h4>
      <q-form @submit="onSubmit" class="q-gutter-md">
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
      feedbackText: ''
    }
  },
  methods: {
    onSubmit() {
      this.feedbackText = ''
    }
  }
}
</script>
