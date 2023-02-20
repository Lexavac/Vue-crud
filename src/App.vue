
<template>
  
  <!-- <img alt="Vue logo" :src=" iconOne "> <br> <br> <br>
  <TestingVue msg="Welcome To Game Sigma"/>
  <h1>{{ name }}</h1>
  
  <button class="btn btn-primary " @click="change">Change Data</button> 
  <hr>
  <br>
  
  <a :href=" url " class="text-decoration-none"> {{ link }} </a>
  <br> <br>
  <hr>

  <div class="mb-5">
  
    <input type="text" placeholder="Type Some Text Or Number" class="form-control mb-5" v-model="value"> 
      <h5>{{ value }}</h5>
  </div> <hr>

  
  <div v-if="product.length">

    <ul>
      
      <li class="mb-5 mt-5" v-for="item in findData" :key="item.id">
        <h5> {{ item.title }} - {{ item.price }} </h5>
      </li>
    </ul>

  </div>

  <div v-else>
    <h4>No Data Found</h4>
  </div> -->

    <header class="header sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div class="container"><a class="navbar-brand" href="#">
              <strong class="h6 mb-0 font-weight-bold text-uppercase">Vueh</strong></a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item active"><router-link to="/" class="nav-link"> Home </router-link><span class="sr-only"></span></li>
                      <li class="nav-item"><router-link to="/create" class="nav-link"> Create </router-link></li>
                      <li class="nav-item"><router-link to="/create" disabled class="nav-link"> Trash </router-link></li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>

  <router-view />

</template>

<script >

import axios from 'axios'




export default {
  name: 'App',
  data(){
    return {

        url : 'http://127.0.0.1:8000/api/siswa',
        students : []

      
    }
  },

  methods: {
    
    getStudent(){
      axios.get(this.url).then(data => {
        this.students = data.data
      })
    }
  },

  created() {
    this.getStudent();
  },
  
  components: {
 
  }
}



</script>



