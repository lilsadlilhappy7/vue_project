<template>
  <div class="login-page" style="min-height: 466px">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Username"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': message }"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
              <span class="error invalid-feedback">{{ message }}</span>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <!-- <div class="social-auth-links text-center mt-2 mb-3">
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div> -->
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center">Register a new membership</a>
          </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useStore();
const profile = computed(() => store.state.profile);

const username = ref("");
const password = ref("");
const message = ref("");
async function login() {
  try {
    const result = await axios.post("https://dummyjson.com/auth/login", {
      username: username.value,
      password: password.value,
      expiresInMins: 30, // optional, defaults to 60
    });

    localStorage.setItem("refreshToken", result.data.refreshToken);
    store.commit("refreshProfile", result.data);

    const path = localStorage.getItem("Requested-Path");
    if (path) {
      router.replace({ path: path });
      localStorage.removeItem("Requested-Path");
    } else {
      router.replace({ name: "dashboard" });
    }
  } catch (error) {
    message.value = error.response.data.message;
  }
}
</script>