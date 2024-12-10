<script setup lang="ts">
    import { PropType } from 'vue';
    import { addressDataType } from './AddressCardTypes';
    import { ElIcon } from 'element-plus'
import { FolderOpened } from '@element-plus/icons-vue';

    defineProps({
        addressData: {
            type: Object as PropType<addressDataType>,
            required: true
        }
    })

    const addressData = {
    firstName: "Marvin",
    lastName: "Dietermann",
    birthday: new Date("1997-03-25"),
    address: {
        private: [{ street: "Straße", number: "Hnr", city: "Stadt", postal: 12345 }],
        work: [{ street: "Straße", number: "Hnr", city: "Stadt", postal: 12345 }],
        other: [{ street: "Straße", number: "Hnr", city: "Stadt", postal: 12345 }]
    },
    phoneNumber: {
        private: [{ prefix: 6002, number: 939776 }],
        work: [{ prefix: 6002, number: 939776 }],
        other: [{ prefix: 6002, number: 939776 }]
    }
}

const firstCharToUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

</script>

<template>
    <div class="w-64 h-fit rounded-md m-2 p-2 flex flex-col justify-between shadow-md bg-gray-100">
        <div>
            <h2 class="text-2xl w-fit mx-auto font-bold">{{ addressData.lastName }}, {{ addressData.firstName }}</h2>
            <hr class="my-2">
        </div>

        <div>
            <p class="text-lg w-fit mx-auto font-semibold"><el-icon><Calendar /></el-icon> Geburtstag:</p>
            <p class="w-fit mx-auto">{{ addressData.birthday.toLocaleDateString() }}</p>
            <hr class="my-2">
        </div>

        <div class="flex flex-row justify-center w-full">
            <button class="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition w-full align-middle content-center flex justify-between">
                Öffnen
                <el-icon class="ml-2" size="18"><FolderOpened /></el-icon>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
