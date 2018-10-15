<template>
  <div id="editor">
    <mavon-editor style="height: 100%" @save="publish"/>
    <button @click="publish">发布</button>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'Editor',
  components: {
    mavonEditor
  },
  data() {
    return {
      htmlSting: ''
    }
  },
  methods: {
    publish(value, render) {
      console.log(render)
    }
  }
}
</script>
<style>
  #editor {
    margin: auto;
    width: 90%;
    /* height: 600px; */
    margin-top: 20px;
  }
</style>
