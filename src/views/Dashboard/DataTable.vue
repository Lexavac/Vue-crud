<template>
    <div>
        <TableVue />
    </div>
</template>


<script >

import TableVue from '../../components/TableVue.vue'


export default {
  name: 'App',
  data(){
    return {

        url : 'http://127.0.0.1:8000/api/siswa',
        students : []

      
    }
  },

  components: {
    TableVue, 
  }
}



</script>