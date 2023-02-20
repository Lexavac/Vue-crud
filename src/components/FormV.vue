<template>


    <form>
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
          <button :form="form" class="btn btn-primary" @click="onSubmit()" type="submit"  >Submit </button>
        </div>
      </div>
  
    </form>
  
      
  
  
  </template>
  
  
  <script>
    import Form from 'vform'
    import Swal from 'sweetalert2'
   
    export default {
        data(){
            return { 
                form: Form.make({
                    name: '',
                    class_id: '',
                    desc: '',
                    image: '',
                })
            }
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

    }
}
  </script>