<template>

  <form @submit.prevent="handleSubmit">

    <h3>Sing Up</h3>

    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="firstname" placeholder="First Name" />
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="lastname" placeholder="Last Name" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="email" placeholder="Email" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>
    <button class="btn btn-primary btn-block">Sign Up</button>

  </form>  

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Register',
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirm: ''

      }
    },
    methods: {
      async handleSubmit(){        
        await axios.post('users', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        });        
        this.$router.push('/login');
      }

    }
  }
</script>