<template>
<div>
    <!-- <el-switch v-model="value1" /> -->
    <div v-if="dailyAgenda">
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
           <daily-task-item :dailyAgendaItem="item" @saveAgendaItem="saveAgendaItem"></daily-task-item>
        </div>

        virtual DataBase
        <div v-for="item in dailyAgenda.dailyAgendaItems" :key="item.id">
            {{item.result}}
        </div>

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
        async saveAgendaItem(dailyAgendaItem) {
            console.log(dailyAgendaItem.result)
            await this.$store.dispatch('updateDailyAgendaItem', {dailyAgendaId: this.dailyAgenda.id, dailyAgendaItem})
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