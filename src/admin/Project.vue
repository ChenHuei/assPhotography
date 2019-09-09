<template>
  <div class="project">
    <div class="left">
      <div class="title">
        <div class="name">相簿名稱</div>
        <input type="text" class="input" v-model.trim="project.name" />
      </div>
      <div class="cover" v-for="item in ADMIN_PROJECT_INFO" :key="item.value">
        <div class="name">{{item.name}}</div>
        <Upload :url="project[item.value]" @urlChange="changeUrl($event, item.value)" />
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
import { ADMIN_PROJECT_INFO } from "../constants";
import { Upload } from "../components/index";
export default {
  name: "AdminProject",
  components: {
    Upload
  },
  data() {
    return {
      project: {},
      ADMIN_PROJECT_INFO
    };
  },
  methods: {
    changeUrl(value, target) {
      this.$set(this.project, target, value);
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
  align-items: flex-start;
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
