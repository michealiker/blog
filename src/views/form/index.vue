<template>
  <div class="page-form">
    <el-form ref="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="title"/>
      </el-form-item>
      <el-form-item label="内容">
        <div id="editor">
          <mavon-editor style="height: 100%" @change="editorChange"/>
        </div>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="publish">发布</el-button>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { articlePublish } from '@/api/form'
export default {
  name: 'Editor',
  components: {
    mavonEditor
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    editorChange(value, render) {
      this.content = render
    },
    publish() {
      const params = {}
      params.title = this.title
      params.contents = this.content
      articlePublish(params).then((data) => {
        console.log(data)
      }).catch()
    }
  }
}
</script>
<style lang="scss">
  #editor {
    margin: auto;
    width: 90%;
    /* height: 600px; */
    margin-top: 20px;
  }
  .page-form {
    padding-top: 15px;
    .el-form-item__content {
      margin-left: 0!important;
    }
  }
</style>
