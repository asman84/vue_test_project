<template>
    <v-app>
        <div class="col-12">
            <v-card>
                <v-card-title>
                    <v-row>
                        <div class="d-flex align-center">
                            <h1>task list</h1>


                            <div class="ml-auto" >
                                <CreateTask/>
                            </div>
                        </div>
                    </v-row>
                    <v-spacer></v-spacer>
                </v-card-title>

                <v-data-table
                    :headers="headers"
                    :items="tasksList"
                    :loading="loading"
                    :options.sync="options"
                    @update:options=""
                    :server-items-length="getTaskCount"

                    :footer-props="{
                    'items-per-page-options': [3]
                     }"
                ></v-data-table>
            </v-card>
        </div>
    </v-app>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
import getters from "@/store/tasks/getters";
import CreateTask from "@/views/pages/tasks/CreateTask";

const {mapState, mapActions, mapGetters} = createNamespacedHelpers('taskStore');

export default {
    components: {CreateTask},
    mounted() {
        // this.getTasks()
    },
    data() {
        return {
            headers: [
                {
                    text: 'id',
                    value: 'id',
                    sortable: true
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
            ],
            options: {},

        }
    },
    watch: {
        options: {
            handler() {
                this.getTasks(this.options.page)
            },
            deep: true,
        },
    },
    name: "TaskList",
    methods: {
        ...mapActions(['getTasks'])
    },
    computed: {
        ...mapState(['tasksList', 'loading']),
        ...mapGetters(['getTaskCount'])
    }
}
</script>

<style scoped>

</style>