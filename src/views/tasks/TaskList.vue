<template>

    <div class="col-12">
        <h3>Task list</h3>
        <v-data-table
            :headers="headers"
            :items="tasksList"
            :server-items-length="2"
            class="elevation-1"
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
                    text:'id',
                    value:'id',
                },
                {
                    text:'username',
                    value:'username'
                },
                {
                    text:'text',
                    value:'text'
                },
                {
                    text:'email',
                    value:'email'
                },
                {
                    text:'status',
                    value:'status'
                }
            ]
        }
    },
    name: "TaskList",
    methods: {
        ...mapActions(['getTasks'])
    },
    computed: {
        ...mapState(['tasksList']),
    },
    created() {
        this.getTasks()
    }
}
</script>

<style scoped>

</style>