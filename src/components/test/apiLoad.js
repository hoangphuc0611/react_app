import axios from "axios";
axios.defaults.timeout = 1000;
export const chatLoad = () => {
    let body = {
        name: "",
        price: "",
        district: ""
    };

    const url = "http://127.0.0.1:8000/view/";
    
    axios.post(url, body).then((res) => {
        botResponse(res.data);
        console.log(res.data)
    });

};


const botResponse = (res) => {
    let selec = document.querySelector('#chats')
    while (selec.firstChild) {
        selec.removeChild(selec.lastChild);
    }
    res.forEach(element => {
        let card = document.createElement('div')
        var att = document.createAttribute("class");       
        att.value = "card";                           
        card.setAttributeNode(att);
        let row = document.createElement('div')
        var att1 = document.createAttribute("class"); 
        att1.value = "row justify-content-start";                           
        row.setAttributeNode(att1);
        let col1 = document.createElement('div')
        var att2 = document.createAttribute("class"); 
        att2.value = "col";                           
        col1.setAttributeNode(att2);
        let col2 = document.createElement('div')
        var att3 = document.createAttribute("class"); 
        att3.value = "col";                           
        col2.setAttributeNode(att3);
        let cardbody = document.createElement('div')
        var att4 = document.createAttribute("class"); 
        att4.value = "card-body";                           
        cardbody.setAttributeNode(att4);
        let cardtext = document.createElement('div')
        var att5 = document.createAttribute("class"); 
        att5.value = "card-text";                           
        cardtext.setAttributeNode(att5);

        cardtext.innerHTML=`<strong>Giá bán căn hộ:</strong>`+element.name+`</br>` +
                            `<strong>Address:</strong>`+element.price+`</br>` +
                            `<strong>Bàn giao:</strong>`+element.address+`</br>` +
                            `<strong>Loại hình:</strong>`+element.ban_giao+`</br>` +
                            `<strong>Quy mô:</strong>`+element.loai_hinh+`</br>` +
                            `<strong>Số tầng:</strong>`+element.quy_mo+`</br>` +
                            'Số tầng:'+element.so_tang+`</br>` +
                            `<strong>Diện tích:</strong>`+element.dien_tich +`</br>` +
                            `<a href="http://127.0.0.1:8000/vitri${element.stt}" class='btn btn-primary'>Bản đồ</a>`
        let anh  = document.createElement('img')
        var att6 = document.createAttribute("src"); 
        att6.value = element.image;                           
        anh.setAttributeNode(att6);
        col1.appendChild(anh)
        selec.appendChild(card);
        card.appendChild(row);
        row.appendChild(col1);
        row.appendChild(col2);
        col2.appendChild(cardbody);
        cardbody.appendChild(cardtext)
    });
};