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
                    <th scope="row">Action</th>
                  </tr>
                </thead>

                <div class="container mt-3 mb-3">
                  <input type="text" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="value" placeholder="search">
                </div>




                <tbody>
                  <tr v-for="(data, index) in data" :key="index">

                    <th scope="row">
                      <div class="media align-items-center">
                        <a :href="data.images" target="blank" class="avatar rounded-circle mr-3">
                          <img v-html="img" alt="Image placeholder" 
                            :src=" data.images ">
                        </a>
                        <div class="media-body">
                          <span class="mb-0 text-sm">{{ data.name }}</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      {{ data.classes.name }}
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
                    <td class="text-right">
                      <div class="dropdown">
                        <router-link :to="{ name: 'editData', params: { id: data.id } }" class="btn btn-sm btn-warning text-light">
                          <i class="uil uil-edit"></i>
                        </router-link>

                        <router-link :to="{ name: 'showData', params: { id: data.id } }" class="btn btn-sm btn-warning text-light">
                          <i class="uil uil-eye"></i>
                        </router-link>

                        <button class="btn btn-sm btn-danger text-light" @click="deleteData(data.id,index)"  >
                          <i class="uil uil-trash-alt"></i>
                        </button>
                    
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
  import Swal from 'sweetalert2'


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

    methods: 
    {      
      change() {
        this.theme = 'thead-dark';
        this.table = 'table align-items-center table-dark';
      },
 
    },

    computed: {

      findData() {
        return this.data.filter((data) => {
          return data.name.match(this.value);
        });
      },
    },

    setup() {
      let data = ref([])
      
      onMounted(() => {
        axios.get('http://127.0.0.1:8000/api/siswa').then(response => {
          data.value = response.data.data

        })
      })

      function deleteData(id,index){
        if(confirm('Are you sure you want to delete')){
          const res = axios.delete(`http://127.0.0.1:8000/api/siswa/${id}`)
          .then(()=>{
            data.value.splice(index,2);
          })
          .catch((error) =>{
            console.log(error.response.data);
          })
          if(res){
            Swal.fire({
              tittle: "sucess",
              text: 'Success delete data!',
              icon: 'warning'
            })
          }
        }
      }




        return {
        data,
        deleteData
      }


    },
    






  }
</script>