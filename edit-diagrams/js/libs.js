export class Controller{
    name=[];
    results=[];
    context=null;
    source="data/data.json";
    colors=[
        'red','green','blue','purple','orange','gray',
        'darkcyan','bisque','silver','lavender','navy'
    ];
    loadData(){
        $.getJson(this.source,(data)=>{
            console.log(data);
        })
    }
}