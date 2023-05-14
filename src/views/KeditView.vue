<style>
.DataTable:nth-child(odd) {
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

DataTable {
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
        <DataTable id="DataTable" class="dataTable p-datatable-sm" :flex="true" :showGridlines="true" 
            scrollable
            editMode="cell" tableClass="editable-cells-table" 
            scrollHeight="700px" :value=products
            :reorderableColumns="true" @columnReorder="onColReorder" 
            resizableColumns columnResizeMode="expand"
            tableStyle="min-width: +50rem" 
            paginator :rows="50" :rowsPerPageOptions="[5, 10, 20, 50, 100, 500]"
            stateStorage="session" statekey="dt-state-demo-session" removableSort stripedRows rowHover
            @value-change="onValueChange" v-model:filters="filters" :globalFilterFields="['type', 'code', 'productid']"
            :customSort="sort" @sort="sort" >
            <template #header>
                <div class="flex justify-content-start">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="keyword search" />
                    </span>
                </div>
            </template>
            <template #empty> nenalezeno. </template>
            <template #loading> loading data. please wait. </template>
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">
                    {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'price'">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                    </template>
                </template>
            </Column>
            <Column field="type" header="Typ" sortable></Column>
            <template #body="{ products }">
                {{ products.type }}
            </template>
            <template #filter="{ filtermodel, filtercallback }">
                <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-column-filter"
                    placeholder="search by name" />
            </template>
            <Column field="purchaseDate" header="Nákup" sortable>
                <!-- <template #body="{ products }">
                    {{ products.purchasedate }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="date" @input="filtercallback()" class="p-column-filter"
                        placeholder="search by date" />
                </template> -->
            </Column>
            <Column field="code" header="Kód" sortable>
                <!-- <template #body="{ products }">
                    {{ products.code }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="purity" header="Ryzost" sortable>
                <!-- <template #body="{ products }">
                    {{ products.purity }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="purchaseprice" header="Nákup" sortable>
                <!-- <template #body="{ products }">
                    {{ products.purchaseprice }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="weight" header="Váha" sortable>
                <!-- <template #body="{ products }">
                    {{ products.weight }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="saleprice" header="Prodej" sortable>
                <!-- <template #body="{ products }">
                    {{ products.saleprice }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="saledate" header="Prodej" sortable>
                <!-- <template #body="{ products }">
                    {{ products.saledate }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="saleonepiece" header="1 kus" sortable>
                <!-- <template #body="{ products }">
                    {{ products.saleonepiece }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="notecomplaint" header="Pozn." sortable>
                <!-- <template #body="{ products }">
                    {{ products.notecomplaint }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="inventorydate" header="Inv." sortable>
                <!-- <template #body="{ products }">
                    {{ products.inventorydate }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="productid" header="Id" sortable>
                <!-- <template #body="{ products }">
                    {{ products.productid }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="note" header="Pozn." sortable>
                <!-- <template #body="{ products }">
                    {{ products.note }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="alterprice" header="Alt. cena" sortable>
                <!-- <template #body="{ products }">
                    {{ products.alterprice }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="dimension" header="Rozměr" sortable>
                <!-- <template #body="{ products }">
                    {{ products.dimension }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="supplierid" header="Dodavatel" sortable>
                <!-- <template #body="{ products }">
                    {{ products.supplierid }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <Column field="customerid" header="Zákazník" sortable>
                <!-- <template #body="{ products }">
                    {{ products.customerid }}
                </template>
                <template #filter="{ filtermodel, filtercallback }">
                    <InputText v-model="filtermodel.value" type="text" @input="filtercallback()" class="p-Column-filter"
                        placeholder="search by name" />
                </template> -->
            </Column>
            <template #footer> celkem {{ products ? products.length : 0 }} výrobků. </template>
        </DataTable>
        <!-- <Button @click="AddRow">Add row</Button> -->
        <Toast />
        <Toast position="bottom-right" group="br" />
        <Toast position="top-right" group="tr" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import { KeditService } from '../service/KeditService';
import { useToast } from 'primevue/usetoast';
import 'primeicons/primeicons.css';
// import Toast from 'primevue/toast'
// import InputText from 'primevue/InputText'
import { FilterMatchMode } from 'primevue/api';
// import   InputNumber  from 'primevue/inputnumber'
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// import "@/index.css";
// import "@/flags.css";
const loading = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    purchaseDate: { value: null, matchMode: FilterMatchMode.DATE_IS },
    type: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    productId: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
function AddRow() {
    const newRow = { productId: DataTable.products.length + 1, type: 'XXX', code: 10 };
    DataTable.products.push(newRow);
}
function onValueChange() {
    toast.add({ severity: 'success', summary: 'Table changed', life: 3000, group: 'br' })
};

function sort(items) {
    console.log('custom sort');
    console.log(items);
    console.log(items.sortField);
    //return items.sort();
}
function beforeSort(items) {
    console.log('custom sort before');
    console.log(items);
    console.log(items.sortField);
    //return items.sort();
}
function afterSort(items) {
    console.log('custom sort after');
    console.log(items);
    console.log(items.sortField);
    //return items.sort();
}
const getProducts = (data) => {
    return [...(data || [])].map((d) => {
        // // // d.purchasedate = '2000-01-01';
        // // // console.log('date - ', d.purchasedate);
        // // //return d;
        try {
            var dateString = d.purchaseDate;
            var dateArray = dateString.split(".");
            var c = dateArray[2].concat("-", dateArray[1]).concat("-", dateArray[0]);
            console.log('id-', d.id, ' date - ', c);
            d.purchaseDate = c;//new Date(c).toLocaleDateString();
        }
        catch (err) {
            console.log('date error', err);
        }

        return d;
    });
};
onMounted(() => {
    console.log('starting mount');
    KeditService.getKeditRaw().then((data) => {
        products.value = getProducts(data);
        loading.value = false;
    });

    // products.foreach(setpurchaseDate)

    console.table(products)
    const element = document.getElementById("test") || null;
    if (element) {
        var rect = element.getBoundingClientRect();
        const el = document.getElementById("table");
        element.remove();
        if (!element) {
            console.log(('element table removed'))
        }
        console.log(rect.bottom, rect.left, rect.right, rect.top)
        // move(el, "up", 100);
        // move(el, "left", rect.right, "5s");
    }
    console.log('Mounted');
    console.log(products);
    toast.add({ severity: 'success', summary: 'Mounted', life: 5000, group: 'br' })
});

onBeforeMount(() => {
    console.log('Before mount')
})
const products = ref();

const onColReorder = () => {
    console.log('Column reordered')
    toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 });
};
const toast = useToast();

const columns=ref(
    { field: 'code', header: 'Code' },
    { field: 'purchase Date', header: 'Nakup' },
    { field: 'type', header: 'Typ' });



</script>

