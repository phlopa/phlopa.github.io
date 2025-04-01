var app = new Vue({
    el:'#app',
    data:{
        products:[{id:1,title:"Dill \"Alligator\"",short_text:'High-yield variety with intense aroma',image:'../img/alligator.jpg', desc:"Dill 'Alligator' is a high-yielding variety with intense aroma."},
            {id:2,title:"Dill \"Ambrozja\"",short_text:'Compact, well-leaved, great for salads',image:'../img/ambrozija.jpg', desc:"Dill 'Ambrozja' is a mid-season variety with a compact shape and abundant foliage."},
            {id:3,title:"Dill \"Bouquet\"",short_text:'Early, ideal for greens and pickling',image:'../img/bouquet.jpg', desc:"Dill 'Bouquet' is one of the best varieties for harvesting greens and flower heads."},
            {id:4,title:"Dill \"Common\"",short_text:'Classic variety with strong aroma',image:'../img/common.jpg', desc:"Dill 'Common' is a traditional variety with a strong flavor and aroma."},
            {id:5,title:"Dill \"Herkules\"",short_text:'Tall variety with large, fragrant leaves',image:'../img/herkules.jpg', desc:"Dill 'Herkules' is a tall-growing variety with large, juicy leaves."},
        ],
        product:{},
        btnVisible: false
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            console.log('addToCart called with id:', id);
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
                
            }
            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=true;

            }
        },
        checkCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=true;
            console.log('Cart IDs:', window.localStorage.getItem('cart'))
        }
    },
    mounted:function(){
        this.getProduct();
        this.checkCart();
    }

});

var app1 = new Vue({
    el: '#app1',
    data: {
        isMenuOpen: false
    },
    methods: {
        toggleMenu:function() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
});
