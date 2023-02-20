<template>
    <div>
        <FormVue />
    </div>
</template>


<script >

import FormVue from '../../components/FormV.vue'


export default {
  name: 'App',
  data(){
    return {

        url : 'http://127.0.0.1:8000/api/siswa',
        students : []

      
    }
  },

  components: {
    FormVue, 
  }
}



</script>