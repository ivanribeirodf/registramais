<template>

  <form>

    <h3>Sing Up</h3>

    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" placeholder="First Name" />
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" placeholder="Last Name" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" placeholder="Email" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="text" class="form-control" placeholder="Password" />
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input type="text" class="form-control" placeholder="Confirm Password" />
    </div>

    <button class="btn btn-primary btn-block">Sign Up</button>

  </form>  
  
</template>

<script>
  export default {
    name: 'Register'
  }
</script>