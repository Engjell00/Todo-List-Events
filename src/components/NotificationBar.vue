<template>
    <div class="notification-bar" :class="notificationTypeClass">
        <p>{{notification.message}}</p>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import {Prop} from 'vue-property-decorator';
  import {mapActions} from 'vuex'

  @Component({
    methods: mapActions('notification',['remove'])
  })
  export default class NotificationBar extends Vue {
    @Prop({
      type: Object,
      required: true
    }) notification !: []

    timeout!: null | number
    get notificationTypeClass(){
      return `-text-${this.notification.type}`
    }
    mounted(){
      this.timeout = setTimeout(() => this.remove(this.notification), 5000)
    }
    beforeDestroy(){
      clearTimeout(this.timeout)
    }
  }
</script>

<style scoped>
    .notification-bar {
        margin: 1em 0 1em;
    }
</style>
