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
      <div class="album">
        <div class="name">照片</div>
        <div class="photos">
          <div class="photo" v-for="(photo, index) in project.photos" :key="photo.url">
            <div class="img" :style="imgHandler(photo.url)"></div>
            <div class="remove" @click="removeHandler(index)">X</div>
          </div>
        </div>
        <label class="label">
          <input
            class="file"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            @change="fileHandler"
          />
          <div class="placeholder">
            <font-awesome-icon icon="image" />
            <span>上傳圖片</span>
          </div>
        </label>
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
    },
    imgHandler(url) {
      return {
        backgroundImage: `url(${url})`
      };
    },
    fileHandler(evt) {
      const file = evt.target.files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.project.photos.push({
          url: e.target.result
        });
      };
      reader.readAsDataURL(file);
    },
    removeHandler(index) {
      this.project.photos.splice(index, 1);
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
  > .right {
    > .album {
      @include size(100%, auto);
      @include flexCenter;
      justify-content: flex-start;
      flex-wrap: wrap;
      > .photos {
        @include flexCenter;
        justify-content: flex-start;
        flex-wrap: wrap;
        > .photo {
          @include size(auto);
          position: relative;
          margin: 12px 12px 12px 0;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
            > .remove {
              opacity: 1;
            }
          }
          > .img {
            @include size(120px);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          > .remove {
            @include size(20px);
            @include flexCenter;
            position: absolute;
            top: 4px;
            right: 4px;
            font-size: 12px;
            color: color(white);
            background-color: color(red);
            border-radius: 50%;
            opacity: 0;
            transition: 0.5s;
          }
        }
      }
      > .label {
        @include size(100%, auto);
        > .file {
          display: none;
        }
        > .placeholder {
          @include size(100%, 40px);
          @include flexCenter;
          margin-bottom: 12px;
          font-size: 28px;
          border: 1px solid color(primary);
          border-radius: 8px;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
          > span {
            margin-left: 12px;
            font-size: 20px;
          }
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
