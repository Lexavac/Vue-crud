<template>


  <form @submit.prevent="onSubmit" @keydown="form.onKeydown($event)" >
    <div class="container mt-5  ">
      <h2 class="mb-5">Forms Example</h2>

      <div class="form-group mb-3">
  
        <input id="name" class="form-control" type="text" name="name" v-model="form.name" placeholder="Your name">

      </div>

      <div class="form-group mb-3">

        <input id="class_id" class="form-control" type="number" name="class_id" v-model="form.class_id" placeholder="Your class">

      </div>

      <div class="form-group mb-3">

        <input id="desc" class="form-control" type="text" name="desc" v-model="form.desc" placeholder="Your desc">

      </div>
      <div class="form-group mb-3">

        <input id="image" @change="handleFile" class="form-control" type="file" name="image"  placeholder="Your desc">
        <input type="hidden" v-model="form.image">

      </div>


      <div class="form-group mb-3">
        <label for="image"></label>
        <FilePond @change="handleFile" id="image" name="image" label-idle="Drop files here..." accepted-file-types="image/png, image/jpeg"
          v-bind:server="{
                  url: 'http://127.0.0.1:8000/api/uploads',
                  method: 'POST',
                  headers: {
                      'X-CSRF-TOKEN': '{{ csrf_token() }}'
                      
                    },
          }" v-bind:files="myFiles" v-on:init="handleFilePondInit">
        </FilePond>

        

      </div>


      <div class="form-group mb-3">
        <button :form="form" class="btn btn-primary" type="submit" @click="onSubmit()" >Submit </button>
      </div>
    </div>

  </form>

    


</template>


<script>
  import Form from 'vform'
  import Swal from 'sweetalert2'
  import vueFilePond from "vue-filepond";
  import "filepond/dist/filepond.min.css";
  import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
  const FilePond = vueFilePond(FilePondPluginImagePreview);

  export default {

    name: 'FormVue',
    data() {
      return {
        form: Form.make({

        name: '',
        class_id: '',
        desc: '',
        image: '',
        
      }),
      }
    },

    setup() {

     
    },

    methods: {


    

      handleFile (event) {
      const file = event.target.files[0]
      this.form.image = file
    },

    async onSubmit () {
      Form.axios = this.$axios
      const res = await this.form.post('http://127.0.0.1:8000/api/siswa/create',);
      if (res) {
                Swal.fire({
                    title: 'Success',
                    text:   "Your Data Has Been Crated!",
                    icon: 'success',
                
                });
                this.$router.push("/");
            }
    }


    },
    
    components: {
      FilePond,

    },




  }
</script>