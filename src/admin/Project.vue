<template>
  <div class="project">
    <Loading v-if="isLoading" />
    <Message v-if="isMessage" :message="messageHandler" />
    <div class="save" @click="saveHandler">
      <Title :title="buttonTitleHandler" />
    </div>
    <div class="left">
      <div class="name">
        <Title :title="'相簿名稱'" />
        <input type="text" class="input" v-model.trim="project.name" />
      </div>
      <div class="cover" v-for="item in ADMIN_PROJECT_INFO" :key="item.value">
        <Title :title="item.name" />
        <Upload :url="project[item.value]" @urlChange="changeCover($event, item.value)" />
      </div>
    </div>
    <div class="right">
      <div class="album">
        <Title :title="'照片'" />
        <div class="photos">
          <div class="photo" v-for="(photo, index) in project.photos" :key="photo.url">
            <div class="images" :style="imagesHandler(photo.url)"></div>
            <div class="remove" @click="removeHandler(index)">X</div>
          </div>
        </div>
        <Upload :isPreview="false" @urlChange="changePhoto" />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
import { ADMIN_PROJECT_INFO, ID_NUMBERS, ID_FACTORS } from "../constants";
import { Upload, Loading, Message, Title } from "../components/index";
export default {
  name: "AdminProject",
  components: {
    Upload,
    Loading,
    Message,
    Title
  },
  data() {
    return {
      isCreate: false,
      isLoading: false,
      isMessage: false,
      project: {
        photos: []
      },
      ADMIN_PROJECT_INFO,
      ID_FACTORS,
      ID_NUMBERS
    };
  },
  computed: {
    messageHandler() {
      return `${this.buttonTitleHandler}成功！`;
    },
    buttonTitleHandler() {
      return this.isCreate ? "新增" : "儲存";
    },
    getRandomID() {
      return [...Array(this.ID_NUMBERS)].reduce((acc, item) => {
        return (acc += this.ID_FACTORS[
          Math.round(Math.random() * (this.ID_FACTORS.length - 1))
        ]);
      }, "");
    }
  },
  methods: {
    changeCover(value, target) {
      this.$set(this.project, target, value);
    },
    changePhoto(url) {
      this.project.photos.push({
        url
      });
    },
    imagesHandler(url) {
      return {
        backgroundImage: `url(${url})`
      };
    },
    removeHandler(index) {
      this.project.photos.splice(index, 1);
    },
    saveHandler() {
      this.isLoading = true;
      if (this.isCreate) this.project.id = this.getRandomID;
      db.collection("albums")
        .doc(this.project.id)
        .set(this.project)
        .then(res => {
          this.isMessage = true;
          setTimeout(() => {
            this.isMessage = false;
            if (this.isCreate) this.$router.go(-1);
          }, 1200);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.isLoading = true;
    const id = this.$route.params.id;
    if (id === "create") {
      this.isCreate = true;
      this.isLoading = false;
      return;
    }
    db.collection("albums")
      .doc(id)
      .get()
      .then(res => {
        this.project = res.data();
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/import";
.project {
  @include size(100%, auto);
  position: relative;
  display: flex;
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
}

.save {
  position: absolute;
  top: -40px;
  right: 5vw;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  > .title {
    margin: 0;
  }
}

.name,
.cover {
  @include size(100%, auto);
}
.name {
  @include flexCenter;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
  > .input {
    @include size(100%, 40px);
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

.album {
  @include size(100%, auto);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  > .photos {
    @include flexCenter;
    @include size(100%, auto);
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.photo {
  @include size(auto);
  position: relative;
  margin: 0 12px 12px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    > .remove {
      opacity: 1;
    }
  }
  > .images {
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

@media screen and (max-width: 1024px) {
  .project {
    flex-direction: column;
    > .left,
    > .right {
      @include size(100%, auto);
    }
    > .right {
      padding: 0 5vw 5vw;
    }
  }
}
</style>
