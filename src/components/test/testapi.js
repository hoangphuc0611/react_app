import axios from "axios";
axios.defaults.timeout = 1000;
export const chat = () => {
    let name = document.querySelector("#name");
    let price = document.querySelector("#price");
    let district = document.querySelector("#district");
    let body = {
        name: name.value,
        price: price.value,
        district: district.value
    };

    const url = "http://127.0.0.1:8000/view/";
    
    axios.post(url, body).then((res) => {
        botResponse(res.data);
        console.log(res.data)
    });
    
    name.value = "";
    price.value = "";
    district.value = "";

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

        cardtext.innerHTML=`<strong>Gi?? b??n c??n h???:</strong>`+element.name+`</br>` +
                            `<strong>Address:</strong>`+element.price+`</br>` +
                            `<strong>B??n giao:</strong>`+element.address+`</br>` +
                            `<strong>Lo???i h??nh:</strong>`+element.ban_giao+`</br>` +
                            `<strong>Quy m??:</strong>`+element.loai_hinh+`</br>` +
                            `<strong>S??? t???ng:</strong>`+element.quy_mo+`</br>` +
                            'S??? t???ng:'+element.so_tang+`</br>` +
                            `<strong>Di???n t??ch:</strong>`+element.dien_tich +`</br>` +
                            `<a href="http://127.0.0.1:8000/vitri${element.stt}" class='btn btn-primary'>B???n ?????</a>`
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