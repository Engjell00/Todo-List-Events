<template>
    <div class="icon-wrapper">
        <svg class="icon" :width="width" :height="height">
            <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}"></use>
        </svg>
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import {Prop} from "vue-property-decorator";

  @Component
  export default class BaseIcon extends Vue {
    @Prop({
      type: String,
      required: true
    }) name!: string
    width: number|string =  24
    height: number|string = 24
  }
</script>

<style scoped>
    .icon-wrapper {
        display: inline-flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.4);
        font-size: 1rem;
        font-weight: 600;
    }
    .icon {
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        margin-right: 6px;
    }
</style>
