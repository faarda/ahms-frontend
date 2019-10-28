<template>
<auth>
    <h4 class="fw-300 c-grey-900 mB-40">Register</h4>
    <form @submit.prevent="registerUser">
        <div class="form-group">
            <label class="text-normal text-dark">Full name</label>
            <input type="text" v-model="formData.name" class="form-control" required Placeholder='John Doe'>
        </div>
        <div class="form-group">
            <label class="text-normal text-dark">Email Address</label>
            <input type="email" v-model="formData.email" class="form-control" required Placeholder='name@email.com'>
        </div>
        <div class="form-group">
            <label class="text-normal text-dark">Password</label>
            <input type="password" v-model="formData.password" class="form-control" required placeholder="Password">
        </div>
        <div class="form-group">
            <label class="text-normal text-dark">Confirm Password</label>
            <input type="password" v-model="password_confirmation" class="form-control" required placeholder="Password">
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Register</button>
        </div>
        <div class="form-group">
                      <p>Already have an account ? <router-link to="/login" class="text-primary">Login</router-link></p>

        </div>
    </form>
</auth>
</template>

<script>
import auth from "@/layouts/Auth.vue"
export default {
    components: {
        auth
    },
    data: function () {
        return {
            formData: {
                name: "",
                email: "",
                password: ""
            },
            password_confirmation: ""
        }
    },
    methods: {
        registerUser() {
            let formData = this.formData;
            Object.entries(formData).forEach(function (val, index) {
                if (val[1] == "") {
                    alert(`${val[0]} cannot be empty`);
                    return;
                }
            });

            var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var realEmail = emailRegex.test(formData.email);
            
            if(!realEmail){
              alert("Email is not valid");
              return;
            }

            if(formData.password !== this.password_confirmation){
              alert("Password confirmation does not match")
              return;
            }

            this.$store.dispatch('createUser', formData);
        }
    }
}
</script>

<style>

</style>
