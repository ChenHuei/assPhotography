<template>
  <div class="project">
    <div class="top">
      <div class="title">{{project.name}}</div>
      <!-- <div
        class="back"
        @click="goAblubms">
        <div class="icon"></div>
        Back
      </div>-->
    </div>
    <figure class="photo" v-for="photo in project.photos" :key="photo.id">
      <img :src="photo.url" />
    </figure>
    <div class="button" @click="navigateHandler">
      <div class="icon"></div>
      <span>back to top</span>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
export default {
  name: "Project",
  data() {
    return {
      nowLocation: 0,
      project: {}
    };
  },
  methods: {
    onScroll() {
      this.nowLocation = window.pageYOffset;
    },
    navigateHandler() {
      const diff = Math.floor(this.nowLocation * 0.1);
      if (diff === 0) {
        window.scroll(0, diff);
      } else {
        this.nowLocation -= diff;
        window.scroll(0, this.nowLocation);
        window.requestAnimationFrame(this.navigateHandler);
      }
    },
    goAblubms() {
      this.$router.push({ name: "project" });
    }
  },
  mounted() {
    db.collection("albums")
      .doc(this.$route.params.id)
      .get()
      .then(res => {
        this.project = res.data();
      });
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/import";
.project {
  @include size(100%, auto);
  @include flexCenter;
  flex-direction: column;
  padding: 0 25%;
  cursor: pointer;
  > .top {
    @include size(100%, auto);
    @include flexCenter;
    position: relative;
    margin-bottom: 28px;
    line-height: 40px;
    letter-spacing: 2px;
    > .title {
      font-size: 32px;
      font-weight: 900;
    }
    > .back {
      position: absolute;
      left: 0;
      top: 50%;
      display: flex;
      font-size: 20px;
      font-weight: 500;
      transform: translate(0, -50%);
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      > .icon {
        @include size(16px);
        @include backgroundImage("../assets/back-to-top.svg");
        margin: 12px 12px 0 0;
        transform: rotate(180deg);
      }
    }
  }
  > .photo {
    @include size(100%, auto);
    position: relative;
    &:hover {
      > img {
        opacity: 0.6;
      }
    }
    > img {
      @include size(100%);
      transition: 0.5s;
    }
    > span {
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translatex(-50%) translateY(-50%);
      color: color(grey);
      font-size: 20px;
      letter-spacing: 1px;
      opacity: 0;
      transition: 0.5s;
    }
  }
  > .button {
    @include size(calc(100% + 40%), 80px);
    @include flexCenter;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    > .icon {
      @include size(40px);
      @include backgroundImage("../assets/back-to-top.svg");
      transform: rotate(-90deg);
    }
    > span {
      margin-left: 16px;
      text-transform: capitalize;
    }
  }
}
</style>
