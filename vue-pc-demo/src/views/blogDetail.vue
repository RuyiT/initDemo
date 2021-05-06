<template>
  <div>
    <div>详情页</div>
    <div>
      <el-input
        class="input"
        type="text"
        placeholder="请输入"
        v-model="blogDetail.title"
      />
    </div>
    <el-input
      class="textarea"
      type="textarea"
      placeholder="请输入内容"
      v-model="blogDetail.content"
    />
    <div class="btn">
      <el-button @click="handlerSave">保存</el-button>
    </div>
  </div>
</template>

<script>
import * as adminService from '@/services/home.services'
export default {
  name: '',
  data() {
    return {
      blogDetail: {
        id: '',
        content: '',
      },
    }
  },
  methods: {
    handlerSave() {
      console.log('save', this.blogDetail)
    },
    getBlogDetail() {
      let id = this.$route.query.id
      console.log(id)
      adminService.getBlogDetail(id).then(res => {
        console.log({ res })
        this.blogDetail = res.data
      })
    },
  },
  mounted() {
    this.getBlogDetail()
  },
}
</script>

<style lang="less" scoped>
.input {
  margin-top: 20px;
  width: 240px;
}
.textarea {
  margin-top: 20px;
  width: 500px;
}
.btn {
  margin-top: 20px;
  width: 500px;
  display: flex;
  justify-content: flex-end;
}
</style>
