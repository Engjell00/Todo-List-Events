<template>
    <div class="notification-container">
        <NotificationBar
            v-for="notification in notifications"
            :key="notification.id"
            :notification = "notification"
        ></NotificationBar>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import NotificationBar from '@/components/NotificationBar.vue'

  @Component({
    components: {NotificationBar},
    computed: mapState('notification',['notifications'])
  })
  export default class NotificationContainer extends Vue {

  }
</script>

<style scoped>
.notification-container{
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 40px;
}
</style>
