<template>
    <div>
        <h1>Create an event</h1>
        <form @submit.prevent="createEvent">
            <BaseSelect
                    label="Select a category"
                    :options="categories"
                    v-model="event.category"
                    :class="{ error: $v.event.category.$error}"
                    @blur="$v.event.category.$touch()"/>
            <template v-if="$v.event.category.$error">
                <p v-if="!$v.event.category.required" class="errorMessage">Category is required.</p>
            </template>

            <h3>Name & describe your event</h3>
            <BaseInput
                    label="Title"
                    v-model="event.title"
                    type="text"
                    placeholder="title"
                    @blur="$v.event.title.$touch()" >
            </BaseInput>
            <template v-if="$v.event.title.$error">
                <p v-if="!$v.event.title.required" class="errorMessage">title is required.</p>
            </template>

                <br>
            <BaseInput
                    label="Description"
                    v-model="event.description"
                    type="text"
                    placeholder="description"
                    @blur="$v.event.description.$touch()">
            </BaseInput>
            <template v-if="$v.event.description.$error">
                <p v-if="!$v.event.description.required" class="errorMessage">description is required.</p>
            </template>

            <h3>Where is your event?</h3>
            <BaseInput
                    label="Location"
                    v-model="event.location"
                    type="text"
                    placeholder="location"
                    @blur="$v.event.location.$touch()">

            </BaseInput>
            <template v-if="$v.event.location.$error">
                <p v-if="!$v.event.location.required" class="errorMessage">location is required.</p>
            </template>


            <h3>When is your event?</h3>
            <div class="field">
                <label>Date</label>
                <datepicker
                        v-model="event.date"
                        placeholder="Select a date"
                        @opened="$v.event.date.$touch()"/>
            </div>
            <template v-if="$v.event.date.$error">
                <p v-if="!$v.event.date.required" class="errorMessage">location is required.</p>
            </template>

            <BaseSelect
                    label="Select a time"
                    :options="times"
                    v-model="event.time"
                    class="field"
                    :class="{ error: $v.event.time.$error }"
                    @blur="$v.event.time.$touch()"
            />
            <template v-if="$v.event.time.$error">
                <p v-if="!$v.event.time.required" class="errorMessage">Time is required.</p>
            </template>


            <BaseButton
                    type="submit"
                    buttonClass="-fill-gradient"
                    :disabled="$v.$anyError"
            >Submit</BaseButton>
            <p v-if="$v.$anyError">Please fill the required fields</p>
        </form>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import {Prop} from 'vue-property-decorator';
  import {mapState, mapGetters} from 'vuex'
  // @ts-ignore
  import Datepicker from 'vuejs-datepicker'
  import Nprogress from 'nprogress'
  import BaseInput from "@/components/BaseInput.vue"
  import BaseSelect from "@/components/BaseSelect.vue";
  import BaseButton from "@/components/BaseButton.vue";

  import { required } from 'vuelidate/lib/validators'

  @Component({
    components: {BaseButton, BaseSelect, BaseInput, Datepicker},
    computed: {
      catLength(){
       return this.$store.getters.catLength
     }/*,
     ...mapGetters(['getEventById']),
     ...mapState(['categories', 'user'])*/
    },
    validations:{
      event: {
        category: { required },
        title: { required },
        description: { required },
        location: { required },
        date: { required },
        time: { required }
      }
    }
  })
  export default class EventCreate extends Vue {
    data(){
      const times = [];
      for(let i = 1; i <=24; i++){
        times.push(i+ ':00')
      }
      return{
        times,
        categories: this.$store.state.categories,
        event:  this.createFreshEventObject()

      }
    }
    createEvent(){
      this.$v.$touch()
      if(!this.$v.$invalid){
        Nprogress.start()
        this.$store
          .dispatch('event/createEvent',this.event)
          .then(() =>{
            this.$router.push({
              name: 'event-show',
              params:{id: this.event.id}
            })
            this.event = this.createFreshEventObject()
          })
          .catch(() => {
            Nprogress.done()
          })
      }
    }
    createFreshEventObject(){
      const user = this.$store.state.user.user
      const id  =  Math.floor(Math.random() * 1000000)
      return{
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
</script>

<style scoped>
.field{
    margin-bottom: 24px;
}
</style>
