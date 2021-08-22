<template>
    <a-layout class="layout">
        <a-layout-sider theme="light">
            <Aside></Aside>
        </a-layout-sider>
        <a-layout>
            <!-- <a-layout-header class="header">Header</a-layout-header> -->
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
            <!-- <a-layout-footer>Footer</a-layout-footer> -->
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Aside from '../components/layout/Aside.vue'
export default defineComponent({
    components:{
        Aside
    },
});
</script>
<style scoped>
.layout {
    height: 100vh;
}
.header{
    background-color: white;
}
</style>
