<template>
<div>
     <p>
    SORRY THIS PAGE DOES NOT EXIST
  </p>
<button @click="back()">Return Home</button>
</div>
</template>

<script>
export default {
    methods:{
        back: function(){
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>
p {
    font-weight: bold;
    font-size: 100px;
    text-align: center;
    color: #f10b0b;
}
button{
    height: 200px; 
    width: 60%;
    position: absolute;
    left: 20%;
    font-size: 100px;
    border: 10px solid green;
}

</style>
