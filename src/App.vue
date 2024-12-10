<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import AddressCard from "./components/AddressCard/AddressCard.vue";

const greetMsg = ref("");
const name = ref("");

async function greet() {
    greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
    <div class="w-full h-full flex flex-wrap">
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        <AddressCard/>
    </div>
</template>

<style scoped>

</style>
