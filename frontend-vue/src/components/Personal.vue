<template>
  <div>
    <p>User</p>
  </div>
</template>

<script>
import apiConsumer from './apiConsumer'
export default {
  name: "Users",
  mixins: [apiConsumer],
  created(){
    this.get()
  }
};
</script>
