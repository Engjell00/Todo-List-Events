<template>
    <div class="field">
        <label v-if="label">{{label}}</label>
        <select v-on="filteredListeners" :value='value' @input="updateValue" v-bind="$attrs">
            <option
                    v-for="option in options"
                    :value="option"
                    :selected="option === value"
                    :key="option">{{ option }}

            </option>
        </select>
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
      type: Array
    }) options!: [];
  }
</script>

<style scoped>

</style>
