<template>
    <div>
    <form @submit.prevent="register">
        <label for="name">
            Name:
        </label>
        <input v-model="userregister.name" type="text" name="name" value>

        <label for="email">
            Email:
        </label>
        <input v-model="userregister.email" type="email" name="email" value>

        <label for="password">
            Password:
        </label>
        <input v-model="userregister.password" type="password" name value>

        <button type="submit" name="button">
            Register
        </button>
    </form>
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import UserRegister from '@/models/UserRegister.ts'
  import store from  '@/store/store.ts'
  @Component({
  })
  export default class RegisterUser extends Vue {
    userregister: UserRegister[] =[{
      name: '',
      email: '',
      password: ''
    }];

    register(){
      store.dispatch('registeruser/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
    }
  }
</script>

<style scoped>

</style>
