 <template>
    <div class="container">
        <form
            @click="$emit('addItem')"
          ><input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
    </div>
 </template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style>
</style>