<template>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">         
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">CE-UIT</h1>
              </div>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="auth.username" label="Enter username" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                  <v-text-field v-model="auth.password" label="Enter password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                  <v-btn @click="login" class="rounded-0" color="black" x-large block dark>Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  
  export default {
   data: () => ({
    auth: {
        username: "",
        password: "",
        error: null
      }
  }),
    methods: {
    login() {
      if (this.auth.username == "18520651" && this.auth.password == "18520651"){
        localStorage.setItem('user', JSON.stringify(true));
        this.$router.push("/");
      }else{
        console.log(this.auth.username)
        console.log(this.auth.password)
        console.log("login faild");
      }
      
    },
  },
  }
</script>