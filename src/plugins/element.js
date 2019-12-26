import Vue from "vue";
import { Button,FormItem,Form,Input } from "element-ui";

Vue.prototype.$ELEMENT = { size: 'mini' };
Vue.use(Button);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
