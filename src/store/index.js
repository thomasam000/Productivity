import { createStore } from "vuex";
import sourceData from '@/data'
import moment from 'moment'


  
export default createStore({ 
    state: sourceData,
    getters: {
        // dailyAgenda: (state, getters, rootState) => {
        //     return (id) => {
        //         const user = findById(state.items, id)
        //         if (!user) return null
        //         return {
        //             ...user,
        //             get posts () {
        //             return rootState.posts.items.filter(post => post.userId === user.id)
        //             },
        //             get postsCount () {
        //             return user.postsCount || 0
        //             },
        //             get threads () {
        //             return rootState.threads.items.filter(post => post.userId === user.id)
        //             },
        //             get threadIds () {
        //             return user.threads
        //             },
        //             get threadsCount () {
        //             return user.threads?.length || 0
        //             }
        //         }
        //     }
        //   }
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
        createAgenda(context, agendaTypeString) {
            var agenda = {};
            if (agendaTypeString == 'daily') {
                agenda['date'] = moment().startOf('day').unix()
                agenda['endDate'] = moment().startOf('day').unix()
            } else if (agendaTypeString == 'weekly') {
                agenda['date'] = moment().startOf('week').unix()
                agenda['endDate'] = moment().startOf('week').unix()
            } else if (agendaTypeString == 'monthly') {
                agenda['date'] = moment().startOf('month').unix()
                agenda['endDate'] = moment().startOf('month').unix()
            }
            agenda['userID'] = 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
            agenda[agendaTypeString + 'AgendaItems'] = []
            agenda['id'] = 'kjashdfjlkhsa' + Math.random()
            context.state.tasks.forEach((task) => {
                if (task.duration == 'day') {
                    var AgendaItem = {}
                    AgendaItem['taskID'] = task.id
                    if (task.type == 'boolean') {
                        AgendaItem['result'] = false
                    } else if (task.type == 'minutes') {
                        AgendaItem['result'] = 0
                    }
                    agenda[agendaTypeString + 'AgendaItems'].push(AgendaItem)
                }
            })
            context.commit('setAgenda', {agenda, agendaTypeString})            
        },

        updateDailyAgendaItem(context, {dailyAgendaId, dailyAgendaItem}) {
            context.commit('setDailyAgendaItem', {dailyAgendaId, dailyAgendaItem})
        }
    },
    mutations: {
        setAgenda(state, {agenda, agendaTypeString}) {
            state[agendaTypeString + 'Agenda'].push(agenda)
        },
        setDailyAgendaItem(state, {dailyAgendaId, dailyAgendaItem}) {
            var dailyAgendaIndex = state.dailyAgenda.findIndex((agenda) => agenda.id == dailyAgendaId)
            var agendaItemIndex = state.dailyAgenda[dailyAgendaIndex].dailyAgendaItems.findIndex(item => item.taskID == dailyAgendaItem.taskID)
            state.dailyAgenda[dailyAgendaIndex].dailyAgendaItems[agendaItemIndex].result = dailyAgendaItem.result
        }
    }
})