<template>

            
    <!-- <span v-if="validation.message" class="px-2 py-2 mb-4 text-red-600 rounded shadow">
        {{ validation.message }}
    </span> -->

    <form @submit.prevent="onSubmits" @keydown="form.onKeydown($event)" >
        <div class="container mt-5  ">
          <h2 class="mb-5">Forms Edit</h2>
    
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
            <label for="image"></label>
            <FilePond @change="handleFile" id="image" name="image" v-model="form.image" label-idle="Drop files here..." accepted-file-types="image/png, image/jpeg"
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
            <button :form="form" class="btn btn-primary" type="submit" @click="onSubmits()" >Submit </button>
          </div>
        </div>
    
      </form>
    
        
         
  
  
  
  
  
  </template>
 

<script>
    import { reactive, ref, onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import axios from 'axios';

     // Import Vue FilePond
    import vueFilePond from "vue-filepond";

    // Import FilePond styles
    import "filepond/dist/filepond.min.css";

    // Import image preview plugin styles
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

    // Create FilePond component
    const FilePond = vueFilePond(FilePondPluginImagePreview);

    export default {
    data() {
        return {
           
            
                name: '',
                class_id: '',
                desc: '',
                image: '',

        }
    },

    
     setup() {
       const form = reactive({
            name: '',
            class_id: '',
            desc: '',
            image: '',
        });

        function handleFile (event) {
        const file = event.target.files[0]
        form.image = file
        }

        const validation = ref([]);
        const router = useRouter();
        const route = useRoute();
        
        onMounted(() => {
     
        axios
            .get(`http://127.0.0.1:8000/api/siswa/${route.params.id}`)
            .then((response) => {
              form.name = response.data.data.name;
              form.class_id = response.data.data.class_id;
              form.desc = response.data.data.desc;
              form.image = response.data.data.image;
            })
            .catch((error) => {
            console.log(error.response.data);
            });
        });
        
       const onSubmit = async () => {
            let name = form.name;
            let class_id = form.class_id;
            let desc = form.desc;
            let image = form.image;
      
                const response = await axios.put(`http://127.0.0.1:8000/api/siswa/update/${route.params.id}`, {
                    onUploadProgress: e => console.log(e), 
                    name: name,
                    class_id: class_id,
                    desc: desc,
                    image: image,
                },
                )
                .then(() => {
                    router.push({
                        path: '/',
                    });
                })
                .catch((error) => {
                    validation.value = error.response.data;
                });
                console.log(response)
            }
            return {
            handleFile,
            form,
            validation,
            router,
            onSubmit,

        };
    },

    methods: {

        onProcessFile(error, file) {
        console.log("file processed", {
            error,
            file
        });
        },
        onAddFile(error, file) {
        console.log("file added", {
            error,
            file
        });
        },

        handleFile (event) {
        // We'll grab just the first file...
        // You can also do some client side validation here.
        const file = event.target.files[0]

        // Set the file object onto the form...
        this.form.image = file
    },
       

    },
    
    components: {
        FilePond,

        },
    };
</script>
  