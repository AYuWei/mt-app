需要再main.js引入，然后在全局上使用
`import mySelect from "./select/";` 
`Vue.use(mySelect);`

<!-- 使用时传递的参数 -->
`<my-select :title="province.title" :value="province.value" :list='province.lists'></my-select>`