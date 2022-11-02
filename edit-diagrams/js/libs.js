export class Controller{
    names=[];
    results=[];
    context=null;
    source="data/data.json";
    colors=[
        'red','green','blue','purple','orange','gray',
        'darkcyan','bisque','silver','lavender','navy'
    ]; 
    constructor(){
        console.log('Controller->Ok')
    }
    loadData(){
        $.getJSON(this.source,(data)=>{
            console.log(data);  
            let out=``;
            let name='';
            let result='';

            for(let item of data.results){
                name=item.name;
                result=item.result;
                this.names.push(name);
                this.results.push(result);
                out +=`
                <tr>
                    <td>${name}</td>
                    <td>${result}</td>
                </tr>
                `;
            }
            $('tbody').html(out);
            console.log(this.names);
            console.log(this.results);
        })
    }
}