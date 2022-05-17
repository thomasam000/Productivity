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
            dailyAgenda['id'] = 'kjashdfjlkhsa' + Math.random()
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
        },
        updateDailyAgendaItem(context, {dailyAgendaId, dailyAgendaItem}) {
            console.log('dailyAgendaItem.result')
            console.log(dailyAgendaItem)
            context.commit('setDailyAgendaItem', {dailyAgendaId, dailyAgendaItem})
        }
    },
    mutations: {
        setDailyAgenda(state, {dailyAgenda}) {
            state.dailyAgenda.push(dailyAgenda)
        },
        setDailyAgendaItem(state, {dailyAgendaId, dailyAgendaItem}) {
            console.log(dailyAgendaItem.result)
            var dailyAgendaIndex = state.dailyAgenda.findIndex((agenda) => agenda.id == dailyAgendaId)
            var agendaItemIndex = state.dailyAgenda[dailyAgendaIndex].dailyAgendaItems.findIndex(item => item.taskID == dailyAgendaItem.taskID)
            state.dailyAgenda[dailyAgendaIndex].dailyAgendaItems[agendaItemIndex].result = dailyAgendaItem.result
        }
    }
})