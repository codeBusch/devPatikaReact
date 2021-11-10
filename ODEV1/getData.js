import axios from "axios"

const  getData = async(id) =>{
    var arrayList=[];
    if(!id || typeof id != "number" ){
        console.log("bir hata oluştu")
    }
    else if (typeof id == "number" && id == parseInt(id)){
        const {data : users} = await axios.get("https://jsonplaceholder.typicode.com/users/"+ id);
        const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ id);
        arrayList.push(users) //users added
        arrayList.push(post) //post added
        return  arrayList.map((item)=>{console.log(item);})
    
    }
   
}
export default  getData;



