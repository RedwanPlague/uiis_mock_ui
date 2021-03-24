<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    style="color: black"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
<!--      <q-item-label caption>-->
<!--        {{ caption }}-->
<!--      </q-item-label>-->
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
    },

    link: {
      type: Object,
      default() {
        return {
          name: 'TeacherClassesPage'
        }
      }
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
