<template>
    <div>
        <FormEdit />
    </div>
</template>


<script >

import FormEdit from '../../components/FormmFoo.vue'


export default {
  name: 'App',
  data(){
    return {

        url : 'http://127.0.0.1:8000/api/siswa',
        students : []

      
    }
  },

  components: {
    FormEdit, 
  }
}



</script>