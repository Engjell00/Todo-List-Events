<template>
    <div>
       <h1> Yikes!</h1>
        <h2>It seems like you're experiencing some network issues, please click back button</h2>
        <router-link :to="{name:'event-list'}">Back to the home page</router-link>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'

  @Component
  export default class NetworkIssue extends Vue {

  }
</script>

<style scoped>

</style>
