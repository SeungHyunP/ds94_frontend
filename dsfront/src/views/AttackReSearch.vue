<template>
  <h1>Attack Research</h1>

  <b-row>
    <b-col>
      <MonsterCard></MonsterCard>
    </b-col>
    <b-col>
        <MonsterCard></MonsterCard>
    </b-col>
    <b-col>
        <MonsterCard></MonsterCard>
    </b-col>
  </b-row>
  
  
</template>

<script>

import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

  components: {
    MonsterCard
  }
}
</script>

<style>

</style>