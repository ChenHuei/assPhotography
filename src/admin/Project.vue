<template>
  <div class="project">
    <div class="container">
      <div class="navbar">
        <div class="button back" @click="back">返回</div>
        <div class="button edit" @click="edit">{{editTitleHandler}}</div>
      </div>
      <div class="information">
        <div :class="itemClassHandler">
          <span>相簿名稱</span>
          <input type="text" v-model="project.name" />
        </div>
        <div :class="itemClassHandler">
          <span>相簿封面(主)</span>
          <figure>
            <img :src="project.cover" />
          </figure>
        </div>
        <div :class="itemClassHandler">
          <span>相簿封面(副)</span>
          <figure>
            <img :src="project.hover" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
export default {
  name: "AdminProject",
  data() {
    return {
      isEdit: false,
      keyword: "",
      project: {}
    };
  },
  computed: {
    editTitleHandler() {
      return this.isEdit ? "完成" : "編輯";
    },
    itemClassHandler() {
      return {
        item: true,
        edit: this.isEdit
      };
    }
  },
  methods: {
    changeKeyword(e) {
      this.keyword = e;
    },
    back() {
      this.$router.go(-1);
    },
    edit() {
      this.isEdit = !this.isEdit;
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
  > .container {
    @include size(100%, auto);
    padding: 5% 10%;
    > .navbar {
      @include size(100%, auto);
      @include flexCenter;
      justify-content: space-between;
      margin-bottom: 40px;
      > .button {
        @include size(120px, 40px);
        @include flexCenter;
        border: 1px solid color(primary);
        border-radius: 8px;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: color(white);
          background-color: color(primary);
        }
      }
    }
    > .information {
      > .item {
        @include size(100%, auto);
        @include flexCenter;
        justify-content: space-between;
        padding: 16px 0;
        > input {
          @include size(calc(25% + 16px), auto);
          padding: 8px 16px;
          border: 1px solid transparent;
          border-radius: 8px;
          outline: none;
          pointer-events: none;
        }
        > figure {
          @include size(25%, auto);
          margin: 0;
          overflow: hidden;
          > img {
            @include size(100%);
          }
        }
        &.edit {
          > input {
            border: 1px solid color(grey);
            pointer-events: auto;
            &:focus {
              border: 1px solid color(blue);
            }
          }
        }
      }
    }
  }
}
</style>
