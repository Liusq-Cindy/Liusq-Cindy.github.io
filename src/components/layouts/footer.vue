<template>
  <div class="we-footer">
    <div class="footer-left">
     <span>Keep热情~~</span>
     <span>联系方式： 306749392@qq.com</span>
    </div>
    <div class="footer-right">
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.we-footer {
  position: absolute;
  bottom: 0;
  background: #fff;
  opacity: 0.7;
  width: 100%;
  height: 96px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 0 5px #ccc;
  .footer-left {
    text-align: left;
    span {
      display: block;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      color: rgb(53, 51, 51);
    }
  }
  .footer-right {
  }
}
</style>
