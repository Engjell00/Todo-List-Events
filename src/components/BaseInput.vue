<template>
    <div class="field">
       <label v-if="label">{{label}}</label>
        <input :value='value' @input="updateValue" v-bind="$attrs" v-on="filteredListeners">
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import {Prop} from 'vue-property-decorator';
  import {FormFieldMixin} from "@/mixins/FormFieldMixin";

  @Component({
    mixins: [FormFieldMixin]
  })
  export default class BaseInput extends Vue {
    @Prop({
      type: String
    }) label!: string;
  }
</script>

<style scoped>

</style>
