<template>
    <div id="app">
      <button @click="sub">클릭</button>
      <TabCom/>

      <router-view/>
    </div>
</template>

<script>

import TabCom from './components/basic/TabCom.vue'
import axios from 'axios';

export default {
  name: 'App',
  components:{
    TabCom,
    
  },
  

  data: () => ({
    
  }),
  
  methods: {
			async sub() {
          try {
              const av = await axios.post('http://localhost:3000/auth/signup')
              console.log(av)
          } catch (err) {
              console.log(err);
          }
			}
		}
	}

</script>

