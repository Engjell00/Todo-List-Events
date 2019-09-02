<template>
    <div>
        <h1>OOops!</h1>
        <p>The {{resource}} you are looking for is not here</p>
        <router-link :to="{name:'event-list'}">Back to the home page</router-link>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import {Prop} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {
    @Prop({
      type:  String
    }) resource!: string;
  }
</script>

<style scoped>

</style>
