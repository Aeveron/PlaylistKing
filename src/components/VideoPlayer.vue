<template>
  <div class="video-list">
    <div class="video-container">
      <iframe width="640" height="360" :src="this.activeVideo.youtubeURL" frameborder="0" allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
   <h3 style="margin-top: 10px;">{{this.activeVideo.title}}</h3>
   <hr>
    </div>
    <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail">     
  <b-button size="md" type="submit" @click="removeSong(video)">X</b-button>
        <div class="thumbnail-img"> 
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3>{{video.title}}</h3>
          <p>{{video.creator}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
        </div>
    </div>
  </div>
</template>

<script>
import Removesong from '@/components/song-control/Removesong';

let videos = [
  {
    id: 1,
    title: "Phil Collins - Another Day In Paradise (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/Qt2mbGP6vFI/hqdefault.jpg",
    youtubeURL: "https://www.youtube.com/embed/Qt2mbGP6vFI?autoplay=1",
    creator: "Phil Collins",
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: "Eminem - Fall",
    thumbnail: "https://i.ytimg.com/vi/MfTbHITdhEI/hqdefault.jpg",
    youtubeURL: "https://www.youtube.com/embed/MfTbHITdhEI?autoplay=1",
    creator: "Eminem",
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Ed Sheeran - Perfect (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    youtubeURL: "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1",
    creator: "Ed Sheeran",
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: "Slipknot - Duality [OFFICIAL VIDEO]",
    thumbnail: "https://i.ytimg.com/vi/6fVE8kSM43I/hqdefault.jpg",
    youtubeURL: "https://www.youtube.com/embed/6fVE8kSM43I?autoplay=1",
    creator: "Slipknot",
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: "Sum 41 - Over My Head (Better Off Dead) (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/AOTjtt9de9A/hqdefault.jpg",
    youtubeURL: "https://www.youtube.com/embed/AOTjtt9de9A?autoplay=1",
    creator: "Sum 41",
    likes: 0,
    views: 0
  }
];

export default {
  name: "VideoPlayer",
  data() {
    return {
      videos,
      myStyle: {
        width: "300px",
        height: "200px"
      },
      activeVideo: videos[0]
    }
  },
  methods: {
      chooseVideo(video){
          this.activeVideo = video;
          video.views += 1;
      },
       removeSong: function(index) {
      this.videos.splice(index, 1);
      console.log("You removed an element");
      
    }
  }
}
</script>

<style scoped>
.video-list {
  margin-top: 7%;
}
.thumbnail {
  display: flex;
  width: 45%;
  float: left;
}
.thumbnail img{
    width:168px;
    margin: 10px 10px;
    
}

.thumbnail-info{
    margin-left:10px;
}

.thumbnail h3{
    font-size:16px;
    margin-top: 10px;
}

h3,
p{
    margin:0;
    padding:0;
}

.thumbnail-views{
    font-size:14px;
}

.video-player{
    display:flex;
    width:1200px;
    margin:auto;
}

.video-container{
    margin-right:40px;
    margin-left:10px;
}

.row{
    display:flex;
    justify-content:space-between;
}
hr{
    border: 1.5px solid black;
}
button{
  margin: 10px;
  width: 10%;
  height: 5%;
}
</style>
