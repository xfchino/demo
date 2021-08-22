<template>
    <a-modal
        :visible="isvisible"
        title="新增分类"
        @ok="handleOk"
        @cancel="closeModal"
        :footer="null"
    >
        <a-form
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-item ref="name" label="作品名字" name="name">
                <a-input v-model:value="formState.name" />
            </a-form-item>
            <a-form-item label="作品类型" required name="cateGory">
                <a-select
                    v-model:value="formState.cateGory"
                    placeholder="请输入分类"
                >
                    <a-select-option value="love">纯爱</a-select-option>
                    <a-select-option value="boyGirl">女装</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="发售日期" required name="release">
                <a-date-picker
                    v-model:value="formState.release"
                    show-time
                    type="date"
                    placeholder="选择发售日期"
                    style="width: 100%"
                />
            </a-form-item>
            <a-form-item label="是否汉化" name="ischinese">
                <a-switch v-model:checked="formState.ischinese" />
            </a-form-item>
            <a-form-item label="游戏类型" name="type">
                <a-checkbox-group v-model:value="formState.type">
                    <a-checkbox value="1" name="type">猎奇</a-checkbox>
                    <a-checkbox value="2" name="type">纯爱</a-checkbox>
                    <a-checkbox value="3" name="type">NTR</a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item label="备注" name="desc">
                <a-textarea v-model:value="formState.desc" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
                <a-button type="primary" @click="onSubmit">新增</a-button>
                <a-button style="margin-left: 10px" @click="resetForm"
                    >重置</a-button
                >
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { Moment } from "moment";
interface FormState {
    name: string;
    cateGory: string | undefined;
    release: Moment | undefined;
    ischinese: boolean;
    type: string[];
    resource: string;
    desc: string;
}
export default defineComponent({
    props: {
        isvisible: Boolean,
    },
    emits: ["closeModal"],
    setup(props, {emit}) {
        const formRef = ref();
        const formState: UnwrapRef<FormState> = reactive({
            name: "",
            cateGory: undefined,
            release: undefined,
            ischinese: false,
            type: [],
            resource: "",
            desc: "",
        });
        const rules = {
            name: [
                {
                    required: true,
                    message: "请输入",
                    trigger: "blur",
                }
            ],
            cateGory: [
                {
                    required: true,
                    message: "请选择",
                    trigger: "change",
                },
            ],
            release: [
                {
                    required: true,
                    message: "请选择时间",
                    trigger: "change",
                    type: "object",
                },
            ],
            type: [
                {
                    type: "array",
                    required: true,
                    message: "请选择",
                    trigger: "change",
                },
            ],
            resource: [
                {
                    required: true,
                    message: "请输入",
                    trigger: "change",
                },
            ]
        };
        const onSubmit = () => {
            formRef.value
                .validate()
                .then(() => {
                    //新增内容
                    console.log(formState);
                    // 请求成功关闭窗口
                    emit("closeModal");
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    console.log("error", error);
                });
        };
        const resetForm = () => {
            formRef.value.resetFields();
        };
        const closeModal = () => {
            emit("closeModal");
        };
        const handleOk = (e: MouseEvent) => {
            console.log(e);
            emit("closeModal");
        };
        return {
            formRef,
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
            other: "",
            formState,
            rules,
            onSubmit,
            resetForm,
            closeModal,
            handleOk,
        };
    },
});
</script>

<style>
</style>