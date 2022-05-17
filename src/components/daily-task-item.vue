<template>
    <div>
        {{item.task.name}}: {{item.task.description}}
        <div v-if="item.task.type == 'boolean'">
            <div>goal: {{item.task.goal}}</div>
            <input type="checkbox" v-model="item.result">
            <div v-if="item.result"> Complete </div>
        </div>
        <div v-if="item.task.type == 'minutes'">
            <div>goal: {{item.task.goal}}</div>
            <input type="number" v-model="item.result">
            <div v-if="item.result >= item.task.goal"> Complete </div>
        </div>
        <button @click="save">Save</button>
    </div>
</template>

<script>

export default { 
    props: ['dailyAgendaItem'],
    data () {
        return {
            item: {... this.dailyAgendaItem}
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
