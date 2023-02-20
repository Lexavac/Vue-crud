import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/siswa';

export default function useStudent() {
    const student = ref([]);
    const students = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getStudents = async () => {

        const response = await axios.get('students');
        students.value = response.data.data;

    } 
    const getStudent = async (id) => {

        const response = await axios.get('student' + id);
        student.value = response.data.data;

    } 

    const storeStudent = async (data) => {

        try {
            await axios.post('students', data);
            await router.push({name: 'StudentIndex'});

        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateStudent = async (id) => {

        try {
            await axios.put('students/' + id, student.value);    
            await router.push({name: 'StudentIndex'});
        } catch (error) {

            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyStudent = async (id) => {

        if (!window.confirm('Are you sure , you want to destroy ? ')){
            return;
        }
        await axios.delete('students/' + id);
        await getStudents();
    }

    return {
        student,
        students,
        getStudent,
        getStudents,
        storeStudent,
        updateStudent,
        destroyStudent,
        errors,
    };
}