<template>
    <a-menu
        id="dddddd"
        
        :selectedKeys="[$route.path]"
        mode="inline"
        @click="handleClick"
    >
        <a-menu-item key="/home">
            <template #icon>
                <MailOutlined />
            </template>
            <router-link to="/home">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/addcategory" >
            <template #icon>
                <MailOutlined />
            </template>
            <router-link to="/addcategory">分类</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
            <template #icon>
                <AppstoreOutlined />
            </template>
            <template #title>管理</template>
            <a-menu-item key="/management/list">
                <router-link to="/management/list">管理列表</router-link>
            </a-menu-item>
            <a-menu-item key="/management/setting">
                <router-link to="/management/setting">管理设置</router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script lang="ts">
import { onMounted, defineComponent, toRefs, reactive, VNodeChild } from "vue";
import {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";
interface MenuInfo {
    key: string;
    keyPath: string[];
    item: VNodeChild;
    domEvent: MouseEvent;
}
export default defineComponent({
    components: {
        MailOutlined,
        QqOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
    setup() {
        const state = reactive({
            selectedKeys: [],
            openKeys: [],
        });
        const handleClick = (e: MenuInfo) => {
            // console.log("click ", e);
            // console.log(state.selectedKeys);
            
        };
        return {
            ...toRefs(state),
            handleClick,
        };
    },
});
</script>

<style>
</style>