<template>
  <div class="page-content">
   <we-header></we-header>
   <router-view></router-view>
   <first-page-content v-if="isHome"></first-page-content>
   <we-footer v-if="isHome"></we-footer>
  </div>
</template>

<script>

import WeHeader from '@/components/layouts/header.vue'
import WeFooter from '@/components/layouts/footer.vue'
import FirstPageContent from './first-page-content.vue'
export default {
  name: 'HelloWorld',
  components: {
    WeHeader,
    WeFooter,
    FirstPageContent
  },
  data () {
    return {
      isHome: this.$route.path === '/'
    }
  },
  methods: {
    clickTopage () {
      this.$router.push('/post')
    }
  },
  created () {
    console.log('this.$route.path', this.$route.path === '/')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
 height: 100%;
 display: flex;
 flex-direction: column;
}
</style>
