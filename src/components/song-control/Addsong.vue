<template>
    <div>


    </div>
</template>

<script>
import Videos from '@/components/VideoPlayer';
export default {
    data(){
        return{
        Videos
        }
    },
    methods: {
        addSong(index) {
            try {
                this.Videos.splice(index + 1, 0, {});
            } catch(e)
            {
                console.log(e);
            }
        }
    }

}
</script>

<style scoped>

</style>
