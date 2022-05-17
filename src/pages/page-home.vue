<template>
<div>
    <!-- <el-switch v-model="value1" /> -->
    <div v-if="dailyAgenda">
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
           <daily-task-item :dailyAgendaItem="item" @saveAgendaItem="saveAgendaItem"></daily-task-item>
        </div>
    </div>

    visual DB
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
            {{item.result}}
        </div>
</div>
</template>

<script>
import dailyTaskItem from '@/components/daily-task-item.vue'

export default { 
    components: {'daily-task-item':dailyTaskItem} ,  
    data () {
        return {
            today: Math.floor(Date.now() / 1000),
            value1: true
        }
    },
    computed: {
        dailyAgenda() {
            let agendaObject = this.$store.state.dailyAgenda.find(agenda => 
                new Date(agenda.date * 1000).getFullYear() === new Date(this.today * 1000).getFullYear() &&
                new Date(agenda.date * 1000).getMonth() === new Date(this.today * 1000).getMonth() &&
                new Date(agenda.date * 1000).getDate() === new Date(this.today * 1000).getDate()
            )
            if (agendaObject) {
                agendaObject.dailyAgendaItems.forEach(item => {
                    item.task = this.$store.state.tasks.find(task => task.id === item.taskID)
                });
                return {... agendaObject}
            } else {
                return null
            }
        }
    },
    methods: {
        async saveAgendaItem(dailyAgendaItem) {
            console.log(dailyAgendaItem.result)
            await this.$store.dispatch('updateDailyAgendaItem', {dailyAgendaId: this.dailyAgenda.id, dailyAgendaItem})
        }
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
        } 
    }
}
</script>

<style scoped>

</style>