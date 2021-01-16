 <template>
    
    <div class="container card-body">
        <form>
          <input class="" v-model="formTodo.title" type="text" /><br>
          <input class="" v-model="formTodo.desc" type="text"  /><br>
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

<style scoped>
    input {
      margin-bottom: 3px;
    }
</style>