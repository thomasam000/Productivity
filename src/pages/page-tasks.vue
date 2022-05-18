<template>
    <div v-if="tasks">

        <div v-for="task in tasks" :key="task.id">
            <div>{{task.name}}: {{task.description}}</div>
            <div>goal: {{task.goal}}</div>
            <div>type: {{task.type}}</div>
        </div>

        <router-link :to="{name: 'addTask'}">
            Create Task
        </router-link>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
            
    },
    methods: {

    },
    created() {

    }

}
</script>

<style scoped>

</style>