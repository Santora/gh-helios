<template>
    <div class="wrapper">
        <Image src="gif.gif"></Image>
        <UnderConstruction v-if="!warehouses" />
        <RouterLink v-else :to="{ name: warehouse.name }" v-for="warehouse in warehouses" :key="warehouse.abbreviation"
            class="warehouse">
            <p>{{ warehouse.abbreviation }}</p>
            <p>{{ warehouse.name }}</p>
            <p>{{ warehouse.city }}, {{ warehouse.state }}</p>
        </RouterLink>
        <!-- <router-link to="/warehouse/kedit" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                <a :href="href" @click="Click">{{ route.fullPath }}</a>
            </li>
        </router-link> -->
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import allWarehouses from '../data/warehouse'
import { useToast } from "primevue/usetoast";
import UnderConstruction from './UnderConstruction.vue';
import Toast from 'primevue/toast';
import warehouse from '../data/warehouse';

const warehouses = ref(allWarehouses);

const { addToast } = useToast();
const Click = () => {
    console.log('Clicked', warehouse.name)
}
const showToast = () => {
    addToast({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
}
</script>

<style >
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body{
    background-color: black;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    max-width: 1760px;
    margin: 0 auto;
    position: initial;
}

.warehouse {
    border: 3px solid;
    border-radius: 2.5rem;
    padding: 7rem;
}

.warehouse p:first-child {
    font-weight: bold;
    font-size: 2.5rem;
    margin: 1rem 0;
}

.warehouse p:last-child {
    font-style: italic;
    font-size: .8rem;
}
</style>