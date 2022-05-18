<template>
<div>
    <div v-if="dailyAgenda">
        <div v-for="item in dailyAgenda.agendaItems" :key="item.id">
           <daily-task-item :agendaItem="item" @saveAgendaItem="saveDailyAgendaItem"></daily-task-item>
        </div>
    </div>

    <div v-if="weeklyAgenda">
        <div v-for="item in weeklyAgenda.agendaItems" :key="item.id">
           <daily-task-item :agendaItem="item" @saveAgendaItem="saveWeeklyAgendaItem"></daily-task-item>
        </div>
    </div>

    <div v-if="monthlyAgenda">
        <div v-for="item in monthlyAgenda.agendaItems" :key="item.id">
           <daily-task-item :agendaItem="item" @saveAgendaItem="saveMonthlyAgendaItem"></daily-task-item>
        </div>
    </div>

        <!-- virtual DataBase
        <div v-for="item in dailyAgenda.agendaItems" :key="item.id">
            {{item.result}}
        </div> -->


</div>
</template>

<script>
import dailyTaskItem from '@/components/daily-task-item.vue'

export default { 
    components: {'daily-task-item':dailyTaskItem} ,  
    data () {
        return {

        }
    },
    computed: {
        dailyAgenda() {
            let agendaObject = this.$store.getters.dailyAgenda
            if (agendaObject) {
                return agendaObject
            } else {
                return null
            }
        },
        weeklyAgenda() {
            let agendaObject = this.$store.getters.weeklyAgenda
            if (agendaObject) {
                return agendaObject
            } else {
                return null
            }
        },
        monthlyAgenda() {
            let agendaObject = this.$store.getters.monthlyAgenda
            if (agendaObject) {
                return agendaObject
            } else {
                return null
            }
        }
    },
    methods: {
        async saveDailyAgendaItem(agendaItem) {
            await this.$store.dispatch('updateAgendaItem', {agendaId: this.dailyAgenda.id, agendaItem, agendaTypeString:'daily'})
        },
        async saveWeeklyAgendaItem(agendaItem) {
            await this.$store.dispatch('updateAgendaItem', {agendaId: this.weeklyAgenda.id, agendaItem, agendaTypeString:'weekly'})
        },
        async saveMonthlyAgendaItem(agendaItem) {
            await this.$store.dispatch('updateAgendaItem', {agendaId: this.monthlyAgenda.id, agendaItem, agendaTypeString:'monthly'})
        }
    },
    async created() {
        let dailyAgendaObject = this.$store.getters.dailyAgenda
        if (dailyAgendaObject === undefined) {
            await this.$store.dispatch('createAgenda', 'daily')
        } 
        let weeklyAgendaObject = this.$store.getters.weeklyAgenda
        if (weeklyAgendaObject === undefined) {
            await this.$store.dispatch('createAgenda', 'weekly')
        } 
        let monthlyAgendaObject = this.$store.getters.monthlyAgenda
        if (monthlyAgendaObject === undefined) {
            await this.$store.dispatch('createAgenda', 'monthly')
        } 
    }
}
</script>

<style scoped>

</style>