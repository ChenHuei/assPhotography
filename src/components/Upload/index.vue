<template>
  <div class="upload">
    <img v-if="isPreview" class="preview" :src="url" />
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
</template>

<script>
export default {
  name: "Upload",
  props: {
    url: {
      type: String,
      default: ""
    },
    isPreview: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    fileHandler(evt) {
      const file = evt.target.files.item(0);
      const reader = new FileReader();
      reader.onload = e => {
        this.$emit("urlChange", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";

.upload {
  @include size(100%, auto);
  margin: 12px 0 24px;
  > .label {
    @include size(100%, auto);
    > .file {
      display: none;
    }
    > .placeholder {
      @include size(100%, 40px);
      @include flexCenter;
      margin-top: 12px;
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
  > .preview {
    @include size(auto, 200px);
  }
}
</style>