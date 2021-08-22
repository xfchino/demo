<template>
    <a-card title="列表管理" style="width: 100%">
        <template #extra
            ><a href="#" @click="openModel">添加游戏</a></template
        >
    </a-card>
    <AddCategoryFrom :isvisible="state.isvisible" @closeModal="closeModal"></AddCategoryFrom>
</template>

<script>
import {  defineComponent, reactive } from "vue";
import AddCategoryFrom from "../../components/AddCategoryFrom.vue";
export default defineComponent({
    components: {
        AddCategoryFrom,
    },
    setup() {
        const state = reactive({ 
            isvisible: false,
        });
        // 关闭弹框
        const closeModal = () => {
            state.isvisible=false
        };
        const openModel =()=>{
            state.isvisible=true
        }
        return {
            state,
            closeModal,
            openModel
        };
    },
});
</script>

<style>
</style>