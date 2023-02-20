<template>
    <div>
        <ShowData />
    </div>
</template>


<script >

import ShowData from '../../components/ShowData.vue'


export default {
  name: 'App',
  data(){
    return {

        url : 'http://127.0.0.1:8000/api/siswa',
        students : []

      
    }
  },

  components: {
    ShowData, 
  }
}



</script>