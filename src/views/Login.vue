<template>
  <div class="login">
    <div class="block">
      <h4 class="title">Hello, 屁哥！</h4>
      <div class="form">
        <input type="text" placeholder="Account">
        <input type="password" placeholder="Password">
      </div>
      <div class="login">Log In</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
    > .title {
      margin: 0 0 40px 0;
      font-size: 32px;
      font-weight: 500;
      letter-spacing: 2px;
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
        &:focus {
          border: 1px solid color(blue);
        }
      }
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
