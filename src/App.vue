<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/navBar"
export default {
  name: 'App',
  components:{navbar}
}
</script>