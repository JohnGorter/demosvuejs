export default {
    props:['current'],
    data: function() {
        return {
            filter:''
        }
    },
    created: function() {
        this.filter = this.current;
    },
    methods:{
        clearFilter() {
            this.filter = ''; 
            this.$emit('clear')
        }
    },
    template:`
        <div>
            <input type="text" v-model="filter" />
            <button @click="$emit('filter', filter)"> go </button>
            <button @click="clearFilter"> clear </button>
        </div>
    `,
}