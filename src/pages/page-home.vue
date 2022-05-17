<template>
<div>
    test
    <div v-if="dailyAgenda">
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
            {{item.task.name}}: {{item.task.description}}
            <div v-if="item.task.type == 'boolean'">
                <div>goal: {{item.task.goal}}</div>
                <div>result: {{item.result}}</div>
                <div v-if="item.result"> Complete </div>
            </div>
            <div v-if="item.task.type == 'minutes'">
                <div>goal: {{item.task.goal}}</div>
                <div>result: {{item.result}}</div>
                <div v-if="item.result >= item.task.goal"> Complete </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
    data () {
        return {
            today: Math.floor(Date.now() / 1000)
        }
    },
    computed: {
        dailyAgenda() {
            let agendaObject = this.$store.state.dailyAgenda.find(agenda => 
                new Date(agenda.date).getFullYear() === new Date(this.today).getFullYear() &&
                new Date(agenda.date).getMonth() === new Date(this.today).getMonth() &&
                new Date(agenda.date).getDate() === new Date(this.today).getDate()
            )
            if (agendaObject != undefined) {
                agendaObject.dailyAgendaItems.forEach(item => {
                    item.task = this.$store.state.tasks.find(task => task.id === item.taskID)
                });
            }
            return agendaObject
        },

    },
    methods: {
        // ...mapActions('threads', ['createThread']),
    },
    created() {
            let agendaObject = this.$store.state.dailyAgenda.find(agenda => 
                new Date(agenda.date).getFullYear() === new Date(this.today).getFullYear() &&
                new Date(agenda.date).getMonth() === new Date(this.today).getMonth() &&
                new Date(agenda.date).getDate() === new Date(this.today).getDate()
            )
            if (agendaObject === undefined) {
                this.$store.dispatch('createDailyAgenda')
            }

        // let ms = Math.floor(Date.now() / 1000);
        // console.log(ms)
        // this.today = ms
        // console.log(ms);
        // let date_string = new Date (1594122308).toDateString()
        // console.log(date_string)
    }

    
}
</script>

<style scoped>

</style>