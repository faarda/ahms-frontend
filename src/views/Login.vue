<template>
<auth>
    <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
    <form @submit.prevent="loginUser">
        <div class="form-group">
            <label class="text-normal text-dark">Email</label>
            <input type="email" required v-model="formData.email" class="form-control" placeholder="yourmail@example.com">
        </div>
        <div class="form-group">
            <label class="text-normal text-dark">Password</label>
            <input type="password" required v-model="formData.password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
            <div class="peers ai-c jc-sb fxw-nw">
                <!-- <div class="peer">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed">Remember Me</span>
                        </label>
                    </div>
                </div> -->
                <div class="peer">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
            <p>New here? <router-link to="/register" class="text-primary">Register</router-link></p>
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
              email: "",
              password: ""
            }
        }
    },
    methods: {
      loginUser(){
        this.$store.dispatch('loginUser', formData);
      }
    }
}
</script>

<style>

</style>
