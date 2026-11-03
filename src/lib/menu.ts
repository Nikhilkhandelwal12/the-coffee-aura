export type MenuItem={id:string;name:string;description:string;category:string;price:number;originalPrice?:number;kind:'veg'|'nonveg';image:string;featured?:boolean;available:boolean};
export const sampleMenu:MenuItem[]=[
{id:'c1',name:'Aura Cappuccino',description:'Velvety espresso, steamed milk and a soft cloud of foam.',category:'Hot Coffee',price:149,kind:'veg',image:'https://images.unsplash.com/photo-153477 sering?auto=format&fit=crop&w=900&q=80',featured:true,available:true},
{id:'c2',name:'Caramel Cold Coffee',description:'Chilled coffee, caramel swirl and a little everyday magic.',category:'Cold Coffee',price:189,kind:'veg',image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',featured:true,available:true},
{id:'c3',name:'Chocolate Frappe',description:'A creamy chocolate shake with a coffee kick.',category:'Shakes',price:199,kind:'veg',image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',featured:true,available:true},
{id:'c4',name:'Garden Fresh Sandwich',description:'Toasted bread, crisp vegetables and house-made spread.',category:'Sandwiches',price:159,kind:'veg',image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80',available:true},
{id:'c5',name:'Aura Brownie',description:'Warm chocolate brownie, rich and wonderfully fudgy.',category:'Desserts',price:129,kind:'veg',image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',featured:true,available:true},
{id:'c6',name:'Masala Chai',description:'A comforting cup brewed with warming Indian spices.',category:'Tea',price:79,kind:'veg',image:'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80',available:true}
];
export const categories=['All','Hot Coffee','Cold Coffee','Tea','Shakes','Mocktails','Snacks','Sandwiches','Burgers','Pizza','Desserts','Combos'];
