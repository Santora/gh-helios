
<style>
.dataTable:nth-child(odd) {
    background-color: aquamarine;
}

html {
    font-size: 14px;
}

#app {
    max-width: max-content;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: .1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: .1rem;
}

.card {
    /* margin-top: .1px;
    max-width: .1px; 
    margin-bottom: .1px; */
    padding: 1px;
}

tr:nth-of-type(odd) {
    background-color: #ccc;
}

tr:nth-child(even) {
    background-color: darkkhaki;
}

tr:nth-child(2n) {
    background-color: #0f0101;
}

DataRow:nth-child(odd) {
    background-color: aqua;
}

tr:nth-child(2n + 1) {
    background-color: #ccc;
}
</style>
<template>
    <div class="card">
        <DataTable class="dataTable p-datatable-sm" :flex="true" :showGridlines="true" scrollable scrollHeight="700px" :value=products
            :reorderableColumns="true" @columnReorder="onColReorder" resizableColumns columnResizeMode="expand"
            tableStyle="min-width: +50rem" paginator :rows="15" :rowsPerPageOptions="[5, 10, 20, 50, 100, 500]"
            stateStorage="session" stateKey="dt-state-demo-session">
            <Column field="type" header="Typ" sortable></Column>
            <Column field="purchaseDate" header="Nákup" sortable></Column>
            <Column field="code" header="Kód" sortable></Column>
            <Column field="purity" header="Ryzost" sortable></Column>
            <Column field="purchasePrice" header="Nákup" sortable></Column>
            <Column field="weight" header="Váha" sortable></Column>
            <Column field="salePrice" header="Prodej" sortable></Column>
            <Column field="saleDate" header="Prodej" sortable></Column>
            <Column field="saleOnePiece" header="1 kus" sortable></Column>
            <Column field="noteComplaint" header="Pozn." sortable></Column>
            <Column field="inventoryDate" header="Inv." sortable></Column>
            <Column field="productId" header="ID" sortable></Column>
            <Column field="note" header="Pozn." sortable></Column>
            <Column field="alterPrice" header="Alt. cena" sortable></Column>
            <Column field="dimension" header="Rozměr" sortable></Column>
            <Column field="supplierId" header="Dodavatel" sortable></Column>
            <Column field="customerId" header="Zákazník" sortable></Column>
            <template #footer> Celkem {{ products ? products.length : 0 }} výrobků. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import { KeditService } from '../service/KeditService';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast'
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// import "@/index.css";
// import "@/flags.css";


onMounted(() => {
    console.log('starting mount')
    KeditService.getKeditRaw().then((data) => (products.value = data));
    console.log('Mounted');
    // toast.add({ severity: 'success', summary: 'Mounted', life: 5000 })
});
onBeforeMount(() => {
    console.log('Before mount')
})
// const toast = useToast();
const products = ref();
const onColReorder = () => {
    console.log('Column reordered')
    // toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 });
};

const exportCSV = () => {
    dt.value.exportCSV();
};
const value = ref(null);
const options = ref([
    { name: 'Antes', value: 1 },
    { name: 'Helios', value: 2 },
    { name: 'Kedit', value: 3 }
]);
</script>

