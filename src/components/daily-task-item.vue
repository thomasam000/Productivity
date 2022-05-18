<template>
    <div v-if="task">
        {{task.name}}: {{task.description}}
        <div v-if="task.type == 'boolean'">
            <div>goal: {{task.goal}}</div>
            <input type="checkbox" v-model="item.result">
            <div v-if="agendaItem.result"> Complete </div>
        </div>
        <div v-if="task.type == 'minutes'">
            <div>goal: {{task.goal}}</div>
            <input type="number" v-model="item.result">
            <div v-if="agendaItem.result >= task.goal"> Complete </div>
        </div>
        <button @click="save">Save</button>
    </div>
</template>

<script>

export default { 
    props: ['agendaItem'],
    data () {
        return {
            item: {... this.agendaItem}
        }
    },
    computed: {
        task() {
            return this.$store.state.tasks.find(task => task.id == this.agendaItem.taskID)
        }
    },
    methods: {
        save() {
            this.$emit('saveAgendaItem', this.item)
        }
    },
    created() {

    }
}
</script>

<style scoped>

</style>
