<template>
  <div>
    <navbar/>
    <playlist-select></playlist-select>
    <b-button class="btnpos" size="md" style="margin: 30px 10px;" type="submit" variant="warning">Create New playlist</b-button>
    <search></search>
   
    <video-player></video-player>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PlaylistSelect from "@/components/playlist-control/PlaylistSelect";
import VideoPlayer from "@/components/VideoPlayer";
import Removesong from '@/components/song-control/Removesong';
import Search from '@/components/song-control/Search';
import Login from '@/components/login-pages/Login';

export default {
  data() {
    return {};
  },
  components: { Navbar: Navbar, PlaylistSelect, VideoPlayer, Removesong, Search, }
};
</script>

<style scoped>
.btnpos{
  position: absolute;
  left: 45%;
  top: 20%;
}
</style>
