<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    :style="link.name === $route.name ? {color: 'firebrick', fontWeight: 'bold'} : {color: 'black'}"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ title }}
        <sup v-if="badge > 0" style="color: white; background-color: firebrick; border-radius: 100px;">
          &nbsp;{{badge}}&nbsp;
        </sup>
      </q-item-label>
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
    },

    badge: {
      type: Number,
      default: 0
    }
  }
}
</script>
