<template>
  <div>
    <div v-for="(module,index) in modules" :key="index">
      <input v-model="module.text" :type="module.type" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{'text': 'xxx', 'type':'text'}, {'text':'yyy', 'type': 'radio'}, {'text':'zzz', 'type':'select'}],
      modules: [{
        text: 'test'
      }],
      aaa: [
        // {
			// 	"title": "WGCNA analysis",
      //   "id": "1",
      //   "type": "select",
      //   "children": [
      //     {
      //       "title": "one",
      //       "id": "11",
      //       "type": "text",
      //       "isRequired": true
      //     },
      //     {
      //       "title": "two",
      //       "id": "12",
      //       "type": "text",
      //       "isRequired": true
      //     },
      //     {
      //       "title": "three",
      //       "id": "13",
      //       "type": "text",
      //       "isRequired": true
      //     },
      //     {
      //       "title": "four",
      //       "id": "14",
      //       "type": "text",
      //       "isRequired": true
      //     }
      //   ]
			// }, {
			// 	"title": "WGCNA Preprocess",
			// 	"content": "Check sample expression profile distribution of all samples and detect abnormal samples.",
      //   "id": "2",
      //   "type": "text",
      //   "isRequired": true
			// }, {
      //   "title": "Banana",
			// 	"content": "BANANA",
      //   "id": "3",
      //   "type": "text",
      //   "isRequired": true
      // }
      ]
    }
  },
  mounted() {
   for(var item of this.list) {
     this.modules.push({item});
   } 
  }
}
</script>