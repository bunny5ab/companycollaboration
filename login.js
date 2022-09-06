let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)










// Loginpa Script

let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);
if(name!='')
{
//   alert('Please visit profile');
  window.location.href="profile.html";
}
function saveDataa()
{
let email,psw;
email=document.getElementById("email").value;

psw=document.getElementById("psw").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
{
alert("Login Successfull");
let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
localStorage.setItem('name',current_user.name);

localStorage.setItem('email',current_user.email);
window.location.href="profile.html";
}
else
{
alert('Login Failed');
}

}









// Registration Script

function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

psw=document.getElementById("psw").value;
if(email =='' || name =='' || psw == ''){
	alert("No null objects");

}else{

	let user_records=new Array();
		user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

		if(user_records.some((v)=>{return v.email==email}))
		{
		alert("duplicate data");
		}
		else
		{
		user_records.push({
		"name":name,
		"email":email,
		"psw":psw
		})
		localStorage.setItem("users",JSON.stringify(user_records));
		alert("Sign-Up Successfull")
		}


}


}