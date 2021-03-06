import Vue from "vue";
import {
     Button, 
     FormItem, 
     Form, 
     Input,
     Message,
     Container,
     Header,
     Main,
     Aside,
     Menu,
     Submenu,
     MenuItemGroup,
     MenuItem,
     Breadcrumb,
     BreadcrumbItem,
     Card,
     Row,
     Col,
     Table,
     TableColumn,
     Tooltip,
     Pagination,
     Select,
     Option,
     DatePicker,
     Dialog,
     MessageBox,
     Tag,

    
    } from "element-ui";

Vue.prototype.$ELEMENT = { size: "mini" };
Vue.use(Button);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Tag)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
