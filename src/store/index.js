import { createStore } from "vuex";
import sourceData from '@/data'

export default createStore({ 
    state: sourceData,
    actions: {
        createDailyAgenda(context) {
            console.log(context)
            var dailyAgenda = {};
            dailyAgenda['date'] = Math.floor(Date.now() / 1000);
            dailyAgenda['userID'] = 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
            dailyAgenda['dailyAgendaItems'] = []
            context.state.tasks.forEach((task) => {
                var dailyAgendaItem = {}
                dailyAgendaItem['taskID'] = task.id
                if (task.type == 'boolean') {
                    dailyAgendaItem['result'] = false
                } else if (task.type == 'minutes') {
                    dailyAgendaItem['result'] = 0
                }
                dailyAgenda['dailyAgendaItems'].push(dailyAgendaItem)
            })
            context.commit('setDailyAgenda', {dailyAgenda})
        }
    },
    mutations: {
        setDailyAgenda(state, {dailyAgenda}) {
            state.dailyAgenda.push(dailyAgenda)
        }
    }
})