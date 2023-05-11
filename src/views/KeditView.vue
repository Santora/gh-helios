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

/* .card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-top: .1px;
    max-width: .1px;
    margin-bottom: .1px;
    padding: 1px;
    width: 100%;
    top: 0px;
    left: 0px;

} */

datatable {
    width: 100%;
    top: 0px;
    left: 0px;
    justify-content: start;
    
}


#table {
    background-color: black;
    /* position: absolute; */
    width: 100%;
    top: 0px;
    left: 0px;
}
</style>

<template>
    <div class="card" id="table">
        <!-- <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
                </template>
            </Toolbar> -->
        <DataTable id="dataTable" class="dataTable p-datatable-sm" :flex="true" :showGridlines="true" scrollable scrollHeight="700px"
            :value=products :reorderableColumns="true" @columnReorder="onColReorder" resizableColumns
            columnResizeMode="expand" tableStyle="min-width: +50rem" paginator :rows="50"
            :rowsPerPageOptions="[5, 10, 20, 50, 100, 500]" stateStorage="session" stateKey="dt-state-demo-session"
            removableSort>
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
            <template #footer>  Celkem {{ products ? products.length : 0 }} výrobků. </template>
        </DataTable>
        <!-- <Button @click="AddRow">Add row</Button> -->
        <Toast/>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import { KeditService } from '../service/KeditService';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import Toolbar from 'primevue/toolbar'
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// import "@/index.css";
// import "@/flags.css";
function AddRow() {
  const newRow = { productId: dataTable.products.length + 1, type: 'XXX', code: 10 };
  dataTable.products.push(newRow);
}

onMounted(() => {
    console.log('starting mount')
    KeditService.getKeditRaw().then((data) => (products.value = data));
    const element = document.getElementById("test") || null;
    var rect = element.getBoundingClientRect();
    if (element) {
        const el = document.getElementById("table");
        element.remove();
        console.log(rect.bottom, rect.left, rect.right, rect.top)
        // move(el, "up", 100);
        // move(el, "left", rect.right, "5s");
    }
    console.log('Mounted');
    console.log(products);
    toast.add({ severity: 'success', summary: 'Mounted', life: 5000 })
});
onBeforeMount(() => {
    console.log('Before mount')
})
// const toast = useToast();
const products = ref();
const onColReorder = () => {
    console.log('Column reordered')
    toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 });
};
const toast = useToast();
const exportCSV = () => {
    dataTable.value.exportCSV();
};
const value = ref(null);
const options = ref([
    { name: 'Antes', value: 1 },
    { name: 'Helios', value: 2 },
    { name: 'Kedit', value: 3 }
]);
function move(element, direction, distance, duration = "1s") {
    console.log('move fired')
    console.log(element, direction, distance, duration)
    var elId = element.id;
    if (!elId) { throw ("Cannot move an element without an ID!"); }
    var elStyleSheet = document.getElementById(elId + "-movement");
    if (!elStyleSheet) {
        elStyleSheet = document.createElement("style");
        elStyleSheet.id = elId + "-movement";
        document.head.appendChild(elStyleSheet);
        console.log('style added', elStyleSheet)
    }
    var topOrLeft = (direction == "left" || direction == "right") ? "left" : "top";
    if (direction == "up" || direction == "left") { distance *= -1; }

    var elStyle = window.getComputedStyle(element);
    var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
    var destination = (Number(value) + distance) + "px";
    var oldLoc = [elStyle.getPropertyValue("left"), elStyle.getPropertyValue("top")];
    var newLoc = (topOrLeft == "left") ? [destination, oldLoc[1]] : [oldLoc[0], destination];
    elStyleSheet.innerHTML = elStyleSheet.innerHTML.replace(/\s+\#(.|\n)*?\}\s+\n/, "");
    elStyleSheet.innerHTML += `
       #` + elId + `.moved
       {
          transition: all ` + duration + ` linear;
          -webkit-transition: all ` + duration + ` linear;
          -moz-transition: all ` + duration + ` linear;
          -o-transition: all ` + duration + ` linear;
          top: ` + newLoc[1] + `;
          left: ` + newLoc[0] + `;
       }
    `;
    element.classList.add("moved");
}
</script>

