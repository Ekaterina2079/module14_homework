const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const img = document.querySelector('.picture')
const reg = /^([1-9]|10)$/;
function takePicture(limit, funcIm) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list/?limit=1`);
    xhr.onload = function() {
        if (xhr.status != 200) {
            img.innerHTML = '<p>Ошибка! Попробуй еще раз</p>';
        } else {
            const result = JSON.parse(xhr.response);
            if (funcIm) {
                funcIm(result);
            } else {
                img.innerHTML = '<p>Ошибка! Попробуй еще раз</p>';
            }
        }
    };
    xhr.onerror = function() {
        img.innerHTML = '<p>Ошибка! Попробуй еще раз</p>'
    };
    xhr.send();
}

function showPicture(data) {
    let pics = '';
    data.forEach(item => {
        const picture = `
          <div class="card">
            <img src="${item.download_url}" class="card-image"/>
          </div>`;
        pics = pics + picture;
    });
    img.innerHTML = pics;
}
btn.addEventListener('click',function (e){
    e.preventDefault();
    if (!reg.test(input.value)){
        img.innerHTML = '<p>Введите число</p>'
    } else {
        takePicture(input.value, showPicture)
    }
})