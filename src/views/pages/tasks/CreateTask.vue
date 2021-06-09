<template>
    <v-row>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Create task
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">New Task</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                    v-model="taskModel.username"
                                    label="username"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                    label="Email*"
                                    v-model="taskModel.email"
                                    hint="ewewe@mail.com"
                                    :rules="emailRules"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-text-field
                                    label="text"
                                    v-model="taskModel.text"
                                    hint="please add  text here"
                                    persistent-hint
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="createTask"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import TaskModel from '@/store/tasks/models';

export default {
    name: "CreateTask",
    data(){
        return {
            dialog: false,
            email:"",
            taskText:"",
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            taskModel: {...TaskModel}
        }
    },
    methods:{
        createTask(){
            this.$store.dispatch('taskStore/createTask',this.taskModel)
            this.dialog=false
        }
    }
}
</script>


<style scoped>

</style>