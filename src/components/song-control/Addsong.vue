<template>
    
</template>

<script>
import Videos from '@/components/VideoPlayer';
export default {
    data(){
        return{
        newVideo: Videos[0]
        }
    },
    methods: {
        addSong(index) {
            try {
                this.newVideo.splice(index + 1, 0, {});
            } catch(e)
            {
                console.log(e);
            }
        }
    }

}
</script>

<style>

</style>
