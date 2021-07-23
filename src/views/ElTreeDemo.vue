<template>
  <div class="">
    <el-button @click="onClick">确定</el-button>
    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      node-key ='id'
    ref="elTreeRef"
      show-checkbox
      :expand-on-click-node="false"
      @current-change="onCurrentChange"
    >
    </el-tree>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'ElTreeDemo',
  setup() {
    const currentNode = ref({id: null})
    const elTreeRef = ref()
    watch(currentNode, (val) => {
      console.log(val)
    })

    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      elTreeRef,
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region', id: 'region' }]);
        }
        if (node.level > 5) return resolve([]);

        setTimeout(() => {
          const data = [{
            id: 'leaf-' + node.level,
            name: 'leaf-' + node.level,
            leaf: true
          }, {
            id: 'zone-' + node.level,
            name: 'zone-' + node.level,
          }];

          resolve(data);
        }, 500);
      },
      onCurrentChange(data: any) {
        currentNode.value = data
      },
      onClick() {
        const n = {
          id: 'zone-2',
          name: 'zone-2222222222',
        }
        const id = currentNode.value?.id
        console.log(id)
        const node = elTreeRef.value.getNode(id)
        console.log(node)
        elTreeRef.value.insertAfter(n, node)
        elTreeRef.value.remove(node)
      }
    };
  },
})
</script>
<style lang="scss" scoped>
</style>
