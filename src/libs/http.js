
class Http {
 static instance = new Http();

get = async (url)=>{
try{
let req = await fetch(url);
let resp = await req.json();
return resp;
}catch(err){
throw Error (err);

}
}
post = async (url , body)=>{
try{
let req = await fetch(url,{
    method:"POST",
    body
});
let res = await req.json();
return res;
}catch(err){
throw new Error(err);
}
}
}
export default Http;