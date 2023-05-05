<style>
body {
    padding: 1px;
}
.dataTable:nth-child(odd){
background-color: aquamarine;

}
.card {
    /* margin-top: .1px;
    max-width: .1px; 
    margin-bottom: .1px; */
    padding: 1px;
}
tr:nth-of-type(odd) {
      background-color:#ccc;
    }
tr:nth-child(even){
    background-color: darkkhaki;
}
tr:nth-child(2n) {
    background-color: #0f0101;
}
DataRow:nth-child(odd){
    background-color: aqua;
}
tr:nth-child(2n + 1) {
    background-color: #ccc;
}
</style>
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" @onClick="onClick" :options="options" optionLabel="name" style="margin-top: auto; max-height:min-content"
        />
    </div>
    <div class="card flex">
        <!-- <DataTable :reorderableColumns="true" @columnReorder="onColReorder" resizableColumns columnResizeMode="expand" scrollable scrollHeight="flex" :value="products" tableStyle="min-width: +50rem" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"> -->
        <DataTable class="dataTable" style="size:small" flex showGridlines scrollable scrollHeight="700px" :value=products :reorderableColumns="true"
            @columnReorder="onColReorder" resizableColumns columnResizeMode="expand" tableStyle="min-width: +50rem"
            paginator :rows="15" :rowsPerPageOptions="[5, 10, 20, 50,100,500]">
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
import { ref, onMounted} from 'vue';
import { KeditService } from '../service/KeditService';
import { useToast } from 'primevue/usetoast';

const onClick = (()=>{
    console.log('OnClick');
    this.$router.push('/kedit');
});

onMounted(() => {
    KeditService.getKeditRaw().then((data) => (products.value = data));
    console.log('Mounted');
    toast.add({ severity: 'success', summary: 'Mounted', life: 5000 })
});
const toast = useToast();
const products = ref();
const onColReorder = () => {
    console.log('Column reordered')
    toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 });
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

