 <template>
    
    <div class="container">
        <form>
          <input v-model="formTodo.title" type="text" />
          <input v-model="formTodo.desc" type="text" />
          <button @click.prevent="submit">Submit</button>
        </form>
    </div>
 </template>

<script>
    export default {
        props: {
            todoForEdit: Object
        },
        data() {
            return {
                todo: {
                    title: "",
                    desc: ""
                }
            }
        },
        methods: {
            submit() {
                if(typeof this.formTodo.id == "undefined") {
                    this.createTodo()
                } else {
                    this.updateTodo()
                }
            },
            createTodo() {
                this.$emit('addItem', this.formTodo)
            },
            updateTodo() {
                this.$emit('itemEdited', this.formTodo)
            }
        },
        computed: {
            formTodo() {
                return this.todoForEdit ? this.todoForEdit : this.todo
            }
        }
    }
</script>

<style>
</style>