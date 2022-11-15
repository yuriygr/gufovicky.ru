<template>
    <div class="logo"  :style="{ backgroundImage: `url(${require('@/assets/logo.jpg')})` }" />
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
.logo {
    width: 220px;
    height: 220px;
    background-size: cover;
    margin: 0 auto;
    user-select: none;
}
</style>