<template>
    <div>
        <h1>Events for {{user.user.name}}</h1>
        <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
        <template v-if="page != 1">
            <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">
                Prev Page</router-link>
        </template>
        <router-link v-if="hasNextPage" :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">
            Next Page</router-link>
    </div>
</template>


<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue'
  import EventCard from "@/components/EventCard.vue";
  import {mapState} from 'vuex'
  import {Prop} from 'vue-property-decorator';
  import store from  '@/store/store.ts'


  function getPageEvents(routeTo: any, next: any){
    const currentPage = parseInt(routeTo.query.page) || 1
    store.dispatch('event/fetchEvents',{
      page: currentPage
    }).then(() => {
      routeTo.params.page = currentPage
      next()
    })
  }

  @Component({
    components: {EventCard},
    computed: {
      ...mapState(['event','user'])
    },
    beforeRouteEnter(routeTo: any, routeFrom: any, next: any){
      getPageEvents(routeTo, next)
    },
    beforeRouteUpdate(routeTo: any, routeFrom: any, next: any){
      getPageEvents(routeTo, next)
    }
  })
  export default class EventList extends Vue {
    @Prop({
      type: Number
    }) page!: number;

    get hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    }


  }
</script>

<style scoped>

</style>
