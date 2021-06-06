<template>

    <div class="col-12">
        <h3>Task list</h3>
        <h4>computed: {{ ch_computed }}</h4>
        <h4>computed 2 {{ ch_computed2 }}</h4>
        <v-data-table
            :headers="headers"
            :items="tasksList"
            :server-items-length="2"
            class="elevation-1"
            :loading="loading"
        ></v-data-table>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
import getters from "@/store/tasks/getters";

const {mapState, mapActions, mapGetters} = createNamespacedHelpers('taskStore');

export default {
    data() {
        return {
            headers: [
                {
                    text: 'id',
                    value: 'id',
                },
                {
                    text: 'username',
                    value: 'username'
                },
                {
                    text: 'text',
                    value: 'text'
                },
                {
                    text: 'email',
                    value: 'email'
                },
                {
                    text: 'status',
                    value: 'status'
                }
            ]
        }
    },
    name: "TaskList",
    methods: {
        ...mapActions(['getTasks'])
    },
    computed: {
        ch_computed() {
            console.log('computed 1')
            return "computed "
        },
        ...mapState(['tasksList','loading']),
        ch_computed2() {
            console.log('computed 2',this.tasksList)
            return "computed 2 "
        },
    },
    created() {
        console.log('created 1')
        this.getTasks()
        console.log('created 2')
    }
}
</script>

<style scoped>

</style>