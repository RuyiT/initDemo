<template>
  <div>
    <div class="nav">管理中心</div>
    <el-button class="add">新建博客</el-button>
    <div class="input">
      <input
        type="text"
        v-model="searchWord"
        placeholder="请输入"
        @keyup.enter="handleSearch"
      />
      <img src="@/assets/imgs/search.svg" @click="handleSearch" />
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="博客表题"></el-table-column>
        <el-table-column width="180">
          <template slot-scope="{ row }">
            <div>
              <el-button type="text" @click="handleEdit(row.id)"
                >编辑</el-button
              >
              <el-button type="text" @click="handleDelete(row.id)"
                >删除</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import * as adminService from '@/services/home.services'
export default {
  name: 'blog',
  data() {
    return {
      searchWord: '',
      tableData: [],
    }
  },
  methods: {
    handleSearch() {
      console.log('search')
      adminService.getBlogDetail(22).then(res => {
        console.log({ res })
        this.blogDetail = res.data
      })
    },
    handleEdit(id) {
      this.$router.push({
        name: 'blogDetail',
        query: {
          id,
        },
      })
    },
    handleDelete(id) {
      console.log(id)
    },
    getTableData() {
      adminService.getTableData(32).then(res => {
        console.log({ res })
        this.tableData = res.data
      })
    },
  },
  mounted() {
    this.getTableData()
  },
}
</script>

<style lang="less" scoped>
.nav {
  font-size: 24px;
  font-weight: 800;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #c0c0c0;
}
.add {
  margin-top: 50px;
}
.table {
  width: 800px;
}
.input {
  margin-top: 30px;
  width: 240px;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  img {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
  input {
    width: 196px;
    height: 100%;
    // line-height: 36px;
    background: none;
    outline: none;
    color: #545454;
    font-size: 16px;
    border: 0px;
  }
  input::placeholder,
  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  input::-ms-input-placeholder,
  textarea::placeholder,
  textarea::-webkit-input-placeholder,
  textarea::-moz-placeholder,
  textarea::-ms-input-placeholder {
    color: #c0c4cc !important;
  }
  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
  }
}
</style>
