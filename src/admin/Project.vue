<template>
  <div class="project">
    <div class="left">
      <div class="title">
        <div class="name">相簿名稱</div>
        <input type="text" class="input" v-model.trim="project.name" />
      </div>
      <div class="cover">
        <div class="name">相簿封面(主)</div>
        <Upload />
        <div class="name">相簿封面(副)</div>
        <Upload />
      </div>
    </div>
    <div class="right">
      <div class="photos">
        <div class="name">照片</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
import { Upload } from "../components/index";
export default {
  name: "AdminProject",
  components: {
    Upload
  },
  data() {
    return {
      photoURL: "",
      project: {}
    };
  },
  methods: {
    fileHandler(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.photoURL = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  mounted() {
    db.collection("albums")
      .doc(this.$route.params.id)
      .get()
      .then(res => {
        this.project = res.data();
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/import";
.project {
  @include size(100%, auto);
  @include flexCenter;
  justify-content: space-between;
  > .left,
  > .right {
    @include flexCenter;
    @include size(50%, auto);
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 5vw;
  }
  > .left {
    > .title,
    > .cover {
      @include size(100%, auto);
    }
    > .title {
      @include flexCenter;
      justify-content: flex-start;
      margin-bottom: 24px;
      > .input {
        @include size(calc(100% - 164px), auto);
        padding: 8px 12px;
        font-size: 18px;
        color: color(blue);
        border: 1px solid color(grey);
        border-radius: 4px;
        outline: none;
        &:focus {
          border: 1px solid color(primary);
        }
      }
    }
  }
}

.name {
  @include size(128px, auto);
  @include flexCenter;
  padding: 6px 12px;
  margin-right: 36px;
  color: color(white);
  background-color: color(blue);
  border: 1px solid color(blue);
  border-radius: 8px;
  letter-spacing: 1px;
}
</style>
