<template>
  <div class="error-msg">
    <div class="logo">error</div>
    <div class="msg">页面尚待开发~~</div>
  </div>
</template>

<script>

export default {
  name: 'error-msg',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.error-msg {
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  .logo {
    font-size: 70px;
    color: rgb(54, 54, 54);
  }
  .msg {
    text-align: center;
    font-size: 22px;
    color: rgb(97, 93, 93);
  }
}
</style>
