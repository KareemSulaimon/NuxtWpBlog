<script lang="ts" setup>
const { data: posts} = await useWpApi().getPosts<any>();
</script>

<template>
   <main>
  <PageHeader >
    <div class="w-[200px] h-[200px] relative mr-5 rounded overflow-hidden shadow-md">
                <img src="~/assets/images/elon.png" alt="elom musk image "
                 class="absolute object-cover w-full h-full " 
                >

            </div>
            <!-- header text -->
            <div>
            <h1 class="text-4xl font-bold mb-2">Elon Musk</h1>
            <p class="mb-3">I build SpaceX, acquired Tesla, Twitter <br/>
                In my free  time I sh*t post on twitter.</p>
                <a class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200" href="https://twitter.com/elonmusk">
                    Let's Connect
                </a>
            </div> 
  </PageHeader>

  <!-- Blog Grid Starts -->
  <section class="container py-16">
    <div class="grid sm:grid-cols-3 gap-5">
       
      <BlogCard 
      v-for="post in posts"
      :key="post.id"
      :title="post.title.rendered"
      :excerpt="post.excerpt.rendered"
      :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      :slug="post.slug"
      />

    </div>
  </section>
  </main>
</template>