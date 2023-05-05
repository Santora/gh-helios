<script>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import warehouses from '../data/warehouse'
import router from '@/router'
import PageNotFound from '../views/PageNotFound.vue'
import UnderConstruction from './UnderConstruction.vue'

export default {
    components: { PageNotFound },
    setup() {
        const route = useRoute();
        const warehouse = computed(() => {
            return warehouses.filter(a => a.name === route.params.code.toUpperCase())[0];
        });

        const navigateToPageNotFound = () => {
            console.log('Not found page');
            router.push({ name: 'PageNotFound' });
        }

        onMounted(() => {
            if (!warehouse.value) {
                navigateToPageNotFound();
            }
        });
        onUnmounted(() => {
            console.log('WH details Unmounted')
            return;
        })
        // console.log('warehouse -  export')
        // console.log(warehouse.value)
        return { warehouse };
    },
}
</script>
<template></template>
<!-- <template>
    <PageNotFound v-if="isNotFound" />
    <div v-else>
      <p>Warehouse details:</p>
      <p>{{ warehouse.value.name }}</p>
      <p>{{ warehouse.value.address }}</p>
      <p>{{ warehouse.value.phone }}</p>
    </div>
  </template>
  
  <script>
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import warehouses from '../data/warehouse';
  import router from '@/router';
  import PageNotFound from '../views/PageNotFound.vue';
  
  export default {
    components: { PageNotFound },
    setup() {
      const route = useRoute();
  
      const warehouse = ref(null);
      const isNotFound = ref(false);
  
      const navigateToPageNotFound = () => {
        console.log('Not found page');
        isNotFound.value = true;
      };
  
      onMounted(() => {
        warehouse.value = warehouses.filter(a => a.name === route.params.code.toUpperCase())[0];
        if (!warehouse.value) {
          navigateToPageNotFound();
        }
      });
  
      console.log('warehouse - export');
      console.log(warehouse.value);
  
      return { warehouse, isNotFound };
    },
  };
  </script>
   -->