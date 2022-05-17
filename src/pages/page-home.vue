<template>
<div>
    <div v-if="dailyAgenda">
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
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
        </div>
    </div>
</div>
</template>

<script>

export default {
    data () {
        return {
            dailyAgenda: null,
            today: Math.floor(Date.now() / 1000)
        }
    },
    computed: {

    },
    methods: {

    },
    async created() {


        let agendaObject = this.$store.state.dailyAgenda.find(agenda => 
            new Date(agenda.date * 1000).getFullYear() === new Date(this.today * 1000).getFullYear() &&
            new Date(agenda.date * 1000).getMonth() === new Date(this.today * 1000).getMonth() &&
            new Date(agenda.date * 1000).getDate() === new Date(this.today * 1000).getDate()
        )
        if (agendaObject === undefined) {
            await this.$store.dispatch('createDailyAgenda')
            agendaObject = this.$store.state.dailyAgenda.find(agenda => 
                new Date(agenda.date * 1000).getFullYear() === new Date(this.today * 1000).getFullYear() &&
                new Date(agenda.date * 1000).getMonth() === new Date(this.today * 1000).getMonth() &&
                new Date(agenda.date * 1000).getDate() === new Date(this.today * 1000).getDate()
            )
            agendaObject.dailyAgendaItems.forEach(item => {
                item.task = this.$store.state.tasks.find(task => task.id === item.taskID)
            });
            this.dailyAgenda = {... agendaObject}

        } else {

            agendaObject.dailyAgendaItems.forEach(item => {
                item.task = this.$store.state.tasks.find(task => task.id === item.taskID)
            });
            this.dailyAgenda = {... agendaObject}

        }
    }
}
</script>

<style scoped>

</style>