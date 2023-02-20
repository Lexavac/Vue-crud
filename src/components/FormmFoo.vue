<script setup>
    import { onMounted,ref } from "vue";
    import { useRoute,useRouter } from "vue-router";
    import axios from "axios";
    import Swal from 'sweetalert2'
    const name = ref("");
    const class_id = ref("");
    const desc = ref("");
    const image = ref("");
    const router = useRouter();
    const route = useRoute();
    const onFileChange = (e) => {
        image.value = e.target.files[0];
    };
    const getImage = async () => {
        const res = await axios.patch(
            `http://127.0.0.1:8000/api/siswa/edit/${route.params.id}`
        );
        name.value = res.data.data.name;
        class_id.value = res.data.data.class_id;
        desc.value = res.data.data.desc;
        image.value = res.data.data.images;
    };

    const onSubmits = async () => {
        if (!name.value) {
            alert("Please fill the field");
        } else {
            const formData = new FormData();
            formData.append("name", name.value);
            formData.append("class_id", class_id.value);
            formData.append("desc", desc.value);
            formData.append("image", image.value);
            const res = await axios.post(
                `http://127.0.0.1:8000/api/siswa/update/${route.params.id}`,
                formData
            );
            if (res) {
                Swal.fire({
                    title: 'Success',
                    text:   "Your Update Has Been Save!",
                    icon: 'success',
                });
                router.push("/");
            }
        }
    };
    onMounted(() => {
        getImage();
    });
</script>

<template>
    <form @submit.prevent="onSubmits" @keydown="form.onKeydown($event)" >
        <div class="container mt-5  ">
          <h2 class="mb-5">Forms Edit</h2>
          <div class="form-group mb-3">
            <input id="name" class="form-control" type="text" name="name" v-model="name" placeholder="Your name">
          </div>
          <div class="form-group mb-3">
            <input id="class_id" class="form-control" type="number" name="class_id" v-model="class_id" placeholder="Your class">
          </div>
          <div class="form-group mb-3">
            <input id="desc" class="form-control" type="text" name="desc" v-model="desc" placeholder="Your desc">
          </div>
          <div class="form-group mb-3">
            <label for="image"></label>
            <FilePond @change="onFileChange" id="image" name="image" label-idle="Drop files here..." accepted-file-types="image/png, image/jpeg"
              v-bind:server="{
                      url: 'http://127.0.0.1:8000/api/uploads',
                      method: 'POST',
                      headers: {
                          'X-CSRF-TOKEN': '{{ csrf_token() }}'
                          
                        },
              }" v-bind:files="myFiles" v-on:init="handleFilePondInit">
            </FilePond>

            <input type="hidden" v-model="image">
    
          </div>
          <div class="form-group mb-3">
            <button :form="form" class="btn btn-primary" type="submit" @click="onSubmits()" >Submit </button>
          </div>
        </div>
    
      </form>
</template>
<script>
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
        name: "UpdateView",
        components: {
        FilePond,
        },
    };
</script>
<style>
</style>