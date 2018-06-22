<template>
  <div class="container"
       v-infinite-scroll="loadMore"
       infinite-scroll-distance="720"
       infinite-scroll-throttle-delay="100"
       infinite-scroll-disabled="busy"
       :items="items">
    <div class="waterfall">
      <div class="img-cell" v-for="item in items">
        <!--<img src="http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg">-->
        <img :src="urlPrefix+item.imgSrc">
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'InfiniteImg',

    props: {},

    data () {
      return {
        all: [],
        items: [],
        urlPrefix: "https://raw.githubusercontent.com/chenjiandongx/mmjpg/master/yummy/",
        count: 10000
      }
    },

    created(){
      this.fetchJson();
    },


    components: {},

    mounted () {

    },
    computed: {},

    filters: {},

    methods: {
      fetchJson(){
        this.$http.get("https://raw.githubusercontent.com/chenjiandongx/mmjpg/master/yummy.json").then(response => {
          this.all = response.data;
          console.log(this.all);
          this.count = this.all.length;
          this.loadMore();
        }).catch(error => {
          console.log(error);
        })
      },
      loadMore(){
        if (this.all.length > 0) {
          try {
            for (let i = 0; i < 6; i++) {
              this.items.push(this.all[Math.floor(Math.random() * this.count)])
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
</script>

<style >
  body{
    padding: 12px 0 0 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
  }

  .container{
    width: 96%;
    margin: 0 auto;
  }

  .waterfall{
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
    -moz-column-width: 24em;
    -webkit-column-width: 24em;
    column-width: 24em;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
  }

  .img-cell:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
  }
  .img-cell img {
    width: 100%;
  }


</style>
