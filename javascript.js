window.addEventListener('load', function () {

    open_page(1);

    Array.from(document.querySelectorAll('.paginator > .page_number')).forEach(function (pageIndex) {
        pageIndex.addEventListener('click', function (event) {
            open_page(+pageIndex.innerHTML);
        });
    });

    function open_page (page_index) {
        fetch(`page_${page_index}.html?_ijt=cda56r7tirgamrdr8dg0jeq0k1`).then(response => response.text()).then(html => {
            document.querySelector('main').innerHTML = html;
            apply_gallery();
        });
    }

    /*var galleryItems = document.querySelectorAll('.gallery > .gallery_item');
    for(var i=0;i<galleryItems.length;i++){
        var galleryItem = galleryItems[i];
        console.log(galleryItem)
    }*/


    function apply_gallery() {
        Array.from(document.querySelectorAll('.gallery > .gallery_item')).forEach(function (galleryItem) {
            var button = galleryItem.querySelector('button');
            var image = galleryItem.querySelector('img');

            button.addEventListener('click', function (event) {
                var div = document.createElement('div');
                div.innerHTML = `
<div class="layer back_layer"></div>
<div class="layer front_layer"><img src="${image.src}"/></div>
`;
                div.addEventListener('click', () => document.body.removeChild(div));
                document.body.appendChild(div);

                /*var back_layer = document.createElement('div');
                back_layer.classList.add('layer');
                back_layer.classList.add('back_layer');
                document.body.appendChild(back_layer);

                var front_layer = document.createElement('div');
                front_layer.classList.add('layer');
                front_layer.classList.add('front_layer');
                document.body.appendChild(front_layer);

                var preview = document.createElement('img');
                preview.src = image.src;
                front_layer.appendChild(preview);
                front_layer.addEventListener('click', function (event) {
                    document.body.removeChild(back_layer);
                    document.body.removeChild(front_layer);
                });*/
            });
        })
    }

})