const nhap_ttintimkiem = document.getElementById("timkiem");
const xacnhan = document.getElementById("xacnhan");
const chuanhap = document.getElementById("chuanhap");

chuanhap.style.display = "none";


xacnhan.addEventListener("click",() =>{
    const ok = nhap_ttintimkiem.value.trim();
if(ok === ''){
    setTimeout(function(){
        chuanhap.style.display = "block";
    }, 300);
}
// Tạo phần tử <li>
const liElement = document.createElement("li");
liElement.textContent = ok;
const xoa = document.createElement("input");
xoa.type = "button";
xoa.id = "xoa";
xoa.value="Xoá";
liElement.setAttribute("id", "list");
// Thêm vào <ul>
xoa.addEventListener("click", () => {
    liElement.remove();
   
  });
  liElement.appendChild(xoa);
  document.getElementById("datimkiem").appendChild(liElement);
  nhap_ttintimkiem.value = "";
});