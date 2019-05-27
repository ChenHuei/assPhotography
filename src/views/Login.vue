<template>
  <div class="login">
    <div class="block">
      <h4 class="title">Hello, 屁哥！</h4>
      <div
        class="google"
        @click="googleLogin">
        <div class="icon"></div>
        <span>
          Log in with Google
        </span>
      </div>
      <div class="hr"></div>
      <div class="form">
        <input
          :class="inputClassHandler"
          type="text"
          placeholder="Email"
          v-model.trim="email">
        <input
          :class="inputClassHandler"
          type="password"
          placeholder="Password"
          v-model="password">
      </div>
      <div
          v-if="isWarning"
          class="warning">
          帳號密碼有誤
        </div>
      <div
        class="login"
        @click="login">
        Log In
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      isWarning: false,
      email: '',
      password: ''
    }
  },
  computed: {
    inputClassHandler () {
      return {
        warning: this.isWarning
      }
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(({ user }) => {
        window.localStorage.setItem('uid', user.uid)
        this.$router.replace('admin')
      }).catch(() => {
        this.isWarning = true
      })
    },
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        this.$router.replace('admin')
      }).catch(() => {
        this.isWarning = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.login {
  @include size(100%);
  @include flexCenter;
  color: color(black);
  > .block {
    @include size(376px, auto);
    @include flexCenter;
    flex-direction: column;
    position: relative;
    > .title {
      margin: 0 0 40px 0;
      font-size: 32px;
      font-weight: 500;
      letter-spacing: 2px;
    }
    > .google {
      @include size(280px, 60px);
      @include flexCenter;
      position: relative;
      justify-content: space-between;
      padding: 0 20px;
      border: none;
      box-shadow: 0 4px 16px 0 color(blue_light);
      overflow: hidden;
      cursor: pointer;
      > .icon {
        @include size(32px);
        background: center center url('../assets/google-plus.svg') no-repeat color(red);
        background-size: cover;
        z-index: 1;
      }
      > span {
        margin-right: 20px;
        letter-spacing: .6px;
      }
      &::before {
        content: '';
        @include size(140px);
        position: absolute;
        left: 0;
        top: 50%;
        background-color: color(red);
        border-radius: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition: .5s;
        z-index: -1;
      }
      &:hover {
        color: color(white);
        &::before {
          @include size(600px);
        }
      }
    }
    > .hr {
      @include size(100%, 20px);
      position: relative;
      margin: 40px 0 32px;
      background: center center url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAU0lEQVR4AWL8////k3cfvggDOhAHA4CBGIq+2t1/z7OVfCvjCSlzbAv/e7KmnA8b0hnbOAHLsnCfJ7OxgdTGMsaZfVuaT6xSW5dztkAbZ459pV8F6/Yk2x+LrW8AAAAASUVORK5CYII=') repeat-x;
      &::before {
        content: 'or';
        @include size(40px);
        @include flexCenter;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: color(white);
        transform: translateX(-50%) translateY(-50%);
      }
    }
    > .form {
      @include size(100%, auto);
      @include flexCenter;
      flex-direction: column;
      padding: 0 20px;
      > input {
        @include size(100%, 64px);
        padding: 20px;
        margin-bottom: 16px;
        font-size: 18px;
        border: 1px solid color(grey);
        border-radius: 4px;
        background-color: color(white);
        outline: none;
        &.warning {
          border: 1px solid color(red);
        }
        &:focus {
          border: 1px solid color(blue);
        }
      }
    }
    > .warning {
      position: absolute;
      left: 50%;
      bottom: 64px;
      color: color(red);
      transform: translateX(-50%) translateY(-50%);
      letter-spacing: 1px;
      transition: .5s;
    }
    > .login {
      @include size(calc(100% - 40px), auto);
      @include flexCenter;
      padding: 20px;
      margin-top: 28px;
      font-size: 18px;
      color: color(white);
      background-color: color(blue);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
