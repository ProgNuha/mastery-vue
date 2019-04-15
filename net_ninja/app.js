var app = new Vue({
    el: '#app',
    data: {
        name:"",
        number: 10,
        website: 'https://www.thenetninja.co.uk/',
        websiteTag: '<a href="https://www.thenetninja.co.uk/">Net Ninja 2</a>',
        x:0,
        y:0
    },
    methods:{
        calculate(num){
            this.number+=num
        },
        click(){
           alert("Clicked!");
        },
        updateXY(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
    
})