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
              const av = await axios.post('mongodb+srv://abcd:1234@Cluster0.two3o.mongodb.net/Cluster0?retryWrites=true&w=majority')
              console.log(av)
          } catch (err) {
              console.log(err);
          }
			}
		}
	}

</script>

