Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: 
        `<div class="product">
            <div class="product-image">
                <img :src="image" :alt="altText"/>
            </div>

            <div class="product-info">
                <h1 v-if="onSale">{{sale}}</h1>
                <h2>{{title}}</h2>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{outOfStock:!inStock}">Out of Stock</p>
                <!-- <p>{{description}}</p> -->
                <p>User is premium : {{premium}}</p>
                <p>Shipping : {{shipping}}</p>
                
                <product-details :details="details"></product-details>
                <div class="color-box"
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)"
                    >
                </div>

                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}"
                        
                        >Add to Cart
                        <!-- <p text-></p> -->
                </button>
                <button v-on:click="removeFromCart">Remove From Cart</button>
                
                <!-- <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul> -->
                <!-- <a :href="link" target="_blank">More products like this</a> -->
                <!-- <p v-show="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p> -->
            </div>
        </div>`,

        data(){
            return {
                altText: "A pair of socks",
                brand: 'Vue Mastery',
                // description: 'A pair of warm fuzzy socks',
                // details:["80% cotton", "20% polyester", "Gender-neutral"],
                // image: "./assets/vmSocks-green.jpg",
                selectedVariant:0,
                // inStock : false,
                inventory : 3,
                link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
                onSale : true,
                product: 'Socks',
                sizes:['S','M','L','XL','XXL','XXXL'],
                variants: [
                    {
                        variantId:2234,
                        variantColor:"green",
                        variantImage:"./assets/vmSocks-green.jpg",
                        variantQuantity:10
                    },
                    {
                        variantId:2235,
                        variantColor:"blue",
                        variantImage:"./assets/vmSocks-blue.jpg",
                        variantQuantity:0
                    }
                ]
            }
        }, 
        
        methods:{
            addToCart(){
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            },
            removeFromCart(){
                this.$emit('remove-to-cart', this.variants[this.selectedVariant].variantId)
            },
            updateProduct(index){
                this.selectedVariant = index;
            }
        },
    
        computed:{
            title(){
                return this.brand + ' ' + this.product + ' '
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            sale(){
                if(this.onSale){
                    return this.title + ' are on sale!'
                }
                return this.brand + ' ' + this.product + ' are not sale!'
            },
            shipping(){
                if(this.premium){
                    return "Free"
                } else {
                    return 2.99
                }
            }
        }
    
})

Vue.component('product-details',{
    proprs: {
        details: {
            type : Array,
            required : true
        }
    },
    template: 
    `<ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>`
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart:[]
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                }
            }
        }
    }
    
})