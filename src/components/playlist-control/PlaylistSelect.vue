<template>
    <div>
         <b-form-select v-model="selected" :options="options" class="mb-3" />
    </div>
</template>

<script>
export default {
    name: 'PlaylistSelect',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Select playlist' },
        { value: 'a', text: 'Rock' },
        { value: 'b', text: 'Hip Hop' },
        { value: 'c', text: 'Pop' },
      ]    
    }
  }
}
</script>

<style scoped>
select{
    margin-top: 7%;
    width: 40%;
    margin-left: 10px;
}
</style>
