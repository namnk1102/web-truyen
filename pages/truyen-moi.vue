<script setup>
// const config = useRuntimeConfig()
//
// useHead({
//     title: '',
//     meta: [
//         {
//             name: 'description',
//             content: ''
//         },
//         {
//             name: 'title',
//             content: ''
//         },
//     ],
// })
//
// useSeoMeta({
//     title: '',
//     ogTitle: '',
//     description: '',
//     ogDescription: '',
//     ogImage: '',
//     ogUrl: `${config.public.SITE_URL}/`,
// })
</script>

<template>
              <div class="container">
                  <h1 class="mb-0 text-uppercase"> Truyện mới cập nhật </h1>
                  <hr>
                  <div class="row">
                    <NewComicsContent/>

                    <div class="col-lg-3 col-md-3 col-12">
                      <div class="widget-fanpage mb-3 text-center">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonkeyd.vn&amp;tabs&amp;width=340&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=439215208546321" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      </div>
                      <div class="row">
                        <NewComicsCharts/>

                        <NewComicsTopView/>

                        <NewComicsContribute/>
                      </div>
                    </div>
                  </div>
              </div>
</template>
