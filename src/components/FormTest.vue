<template>


    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
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
  
          <input id="image" @change="onFileChange" class="form-control" type="file" name="image" placeholder="Your desc">
          <input id="image" class="form-control" type="hidden" name="image" v-model="image" placeholder="Your desc">
  
        </div>
  
  
        <div class="form-group mb-3">
          <label for="image"></label>
          <FilePond @change="handleFile" id="image" name="image" label-idle="Drop files here..." accepted-file-types="image/png, image/jpeg"
            v-bind:server="{
                    url: 'http://127.0.0.1:8000/api/uploads',
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                      },
            }"  v-on:init="handleFilePondInit">
          </FilePond>
          
         
        </div>
  
  
        <div class="form-group mb-3">
          <button :form="form" class="btn btn-primary" type="submit" @click="onSubmit()" >Submit </button>
        </div>
      </div>
  
    </form>
  
      
  
  
  </template>
  
  
  <script>
    // import { ref } from "vue";
    // import { useRoute, useRouter } from "vue-router";
    import Form from 'vform'
    import axios from 'axios';
    import vueFilePond from "vue-filepond";
    import "filepond/dist/filepond.min.css";
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
  
    const FilePond = vueFilePond(FilePondPluginImagePreview);
  
    export default {
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

methods: {
    handleFile (event) {
      const file = event.target.files[0]
      this.form.image = file
      },

      load: function () {
      axios
      .get(`http://127.0.0.1:8000/api/siswa/${this.$route.params.id}`)
      .then((response) => {
                this.form.name = response.data.data.name;
                this.form.class_id = response.data.data.class_id;
                this.form.desc = response.data.data.desc;
                this.form.image = response.data.data.images;
              })
              .catch((error) => {
              console.log(error.response.data);
              });
      },

      async onSubmit () {
      if (!this.form.name) {
          alert("Please fill the field");
      } else {
      Form.axios = this.$axios
      const formData = new FormData();
      formData.append("image", this.form.image);
      const res = await this.form.put(
        `http://127.0.0.1:8000/api/siswa/update/${this.$route.params.id}`, 
        formData
      );
      if (res) { 
        alert("image update successfully");
        this.$router.push("/");
      }
    }
  },
  },
      mounted() {
        this.load();
      },

      components: {
      FilePond,
      },
}
  </script>
  