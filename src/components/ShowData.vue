<template>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  <div class="main-content mb-5 mt-5">
    <div class="container mt-7">
      <!-- Table -->
      <h2 class="mb-5">Tables Example</h2>
      <div class="form-group mb-3">
        <button @click="change" class="btn btn-primary" type="submit">Dark </button>
        
        <router-link to="/create">
          <button class="btn btn-primary" type="submit">Create </button>
        </router-link>
        
      </div>
      <!-- <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="value" placeholder="search"> -->

      <div class="row">

        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
            </div>
            <div class="table-responsive">
              <table :class=" table ">
                <thead>
                  <tr scope="col">
                    <th scope="row">Name</th>
                    <th scope="row">Class</th>
                    <th scope="row">Desc</th>
                    <th scope="row">Users</th>
                  </tr>
                </thead>

                <div class="container mt-3 mb-3">
                  <input type="text" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="value" placeholder="search">
                </div>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                       
                          <!-- <img class="avatar rounded-circle mr-3"
                            :src=" data.images ">
                         -->
                        <div class="media-body">
                          <span class="mb-0 text-sm">{{ data.name }}</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      {{ data.clsname }}
                    </td>
                    <td>
                      {{ data.desc }}
                    </td>

                    <td>
                      <div class="d-flex align-items-center">
                        <span class="mr-2">60%</span>
                        <div>
                          <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                              aria-valuemax="100" style="width: 60%;"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-header border-0 mb-3">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>
<script>
  import axios from 'axios'
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';


  export default {
    name: 'TableVue',

    data() {
      return {

        value: '',
        theme: 'thead-light',
        table: 'table align-items-center table-hover',
        mode: 'data-bs-theme="dark"',
        users : null,



      }
    },

    setup() {
      let data = ref([])
      let route = useRoute()
      
      onMounted(() => {
        axios.get(`http://127.0.0.1:8000/api/siswa/${route.params.id}`).then(response => {
          data.value = response.data.data
        })
      })

        return {
        data,
        route
      }

    },

    methods: 
    {      
      change() {
        this.theme = 'thead-dark';
        this.table = 'table align-items-center table-dark';
      },
 
    },

    
    






  }
</script>