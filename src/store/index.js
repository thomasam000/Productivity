import { createStore } from "vuex";
import sourceData from '@/data'
import moment from 'moment'

  
export default createStore({ 
    state: sourceData,
    getters: {
        dailyAgenda(state) {
            var startOfDay = moment().startOf('day').unix()
            return state.dailyAgenda.find(agenda => agenda.date == startOfDay)
        },
        weeklyAgenda(state) {
            var startOfWeek = moment().startOf('week').unix()
            return state.weeklyAgenda.find(agenda => agenda.date == startOfWeek)
        },
        monthlyAgenda(state) {
            var startOfMonth = moment().startOf('month').unix()
            return state.monthlyAgenda.find(agenda => agenda.date == startOfMonth)
        }
    },
    actions: {
        saveTask(context, task) {
            task.id = 'adfasfhjwe' + Math.random()
            task.userID = "ALXhxjwgY9PinwNGHpfai6OWyDu2"
            task.createdOn = moment().startOf(task.duration).unix()
            task.slug = this.name
            if (task.type == "boolean") {
                task.goal = true
            }   
            context.commit('createTask', {task})            
        },
        createAgenda(context, agendaTypeString) {
            var agenda = {};
            var day_week_or_month = ''
            if (agendaTypeString == 'daily') {
                day_week_or_month = 'day'
            } else if (agendaTypeString == 'weekly') {
                day_week_or_month = 'week'
            } else if (agendaTypeString == 'monthly') {
                day_week_or_month = 'month'
            }

            agenda['date'] = moment().startOf(day_week_or_month).unix()
            agenda['endDate'] = moment().startOf(day_week_or_month).unix()

            agenda['userID'] = 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
            agenda['agendaItems'] = []
            agenda['id'] = 'kjashdfjlkhsa' + Math.random()
            context.state.tasks.forEach((task) => {
                if (task.duration == day_week_or_month) {
                    var AgendaItem = {}
                    AgendaItem['taskID'] = task.id
                    if (task.type == 'boolean') {
                        AgendaItem['result'] = false
                    } else if (task.type == 'minutes') {
                        AgendaItem['result'] = 0
                    }
                    agenda['agendaItems'].push(AgendaItem)
                }
            })
            context.commit('setAgenda', {agenda, agendaTypeString})            
        },

        updateAgendaItem(context, {agendaId, agendaItem, agendaTypeString}) {
            context.commit('setAgendaItem', {agendaId, agendaItem, agendaTypeString})
        }
    },
    mutations: {
        setAgenda(state, {agenda, agendaTypeString}) {
            state[agendaTypeString + 'Agenda'].push(agenda)
        },
        setAgendaItem(state, {agendaId, agendaItem, agendaTypeString}) {
            var agendaIndex = state[agendaTypeString + 'Agenda'].findIndex((agenda) => agenda.id == agendaId)
            var agendaItemIndex = state[agendaTypeString + 'Agenda'][agendaIndex].agendaItems.findIndex(item => item.taskID == agendaItem.taskID)
            state[agendaTypeString + 'Agenda'][agendaIndex].agendaItems[agendaItemIndex].result = agendaItem.result
        },
        createTask(state, {task}) {
            state.tasks.push(task)
        }

    }
})