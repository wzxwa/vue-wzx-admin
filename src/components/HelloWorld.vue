<script setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <el-button>Default</el-button>

  <el-button plain>Plain</el-button>
  <el-button type="danger" :icon="Delete" circle />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
