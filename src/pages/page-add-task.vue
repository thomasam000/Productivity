<template>
    <div>
        <div>
            <input type="text" name="" id="" v-model="task.name">
        </div>

        <div>
            <textarea type="text" name="" id="" v-model="task.description"></textarea>
        </div>

        <div>
            <el-select v-model="task.categoryID" class="m-2" placeholder="Select" size="large">
                <el-option
                v-for="category in categories"
                :key="category.id"
                :label="category.name"
                :value="category.id"
                />
            </el-select>
        </div>

        <div>
            <el-select v-model="task.duration" class="m-2" placeholder="Select" size="large">
                <el-option
                v-for="duration in durations"
                :key="duration.value"
                :label="duration.label"
                :value="duration.value"
                />
            </el-select>
        </div>
        
        <div>
            <el-select v-model="task.type" class="m-2" placeholder="Select" size="large">
                <el-option
                v-for="type in types"
                :key="type.value"
                :label="type.label"
                :value="type.value"
                />
            </el-select>
        </div>

        <div v-if="task.type == 'minutes'">
            <input type="number" name="" id="" v-model="task.goal">
        </div>

        <button @click="saveTask"></button>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            task: {
                "categoryID": null,
                "description": "",
                "name": "",
                "type": null,
                "duration": null,
                "goal": null
            },
            durations: [
                {value:'day', label:'Daily'},
                {value:'week', label:'Weekly'},
                {value:'month', label:'Monthly'}
            ],
            types: [
                {value:'boolean', label:"Yes or No (did it or didn't)"},
                {value:'minutes', label:'Minutes Per Day'},
            ]
        }
    },
    computed: {
        categories() {
            return this.$store.state.taskCategory
        },

    },
    methods: {
        async saveTask() {
            await this.$store.dispatch('saveTask', this.task)
            this.$router.push({name: 'Tasks'})

        }
    },
    created() {

    }

}
</script>

<style scoped>

</style>