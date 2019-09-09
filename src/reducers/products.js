var initialState = [
    {
        id : 1,
        name : "Samsung S10 plus 2 sim mới fullbox quốc tế chip Snapdargon",
        image : "https://thinhmobile.com/uploads/25-08-2019/thumbs/500/samsung-s10-plus-my-512gb-moi-05-08-2019-gwoor-25-08-2019-d4drd.png",
        description: "Sản phẩm do Samsung sản xuất",
        price : 1000,
        inventory : 35,
        rating : 5
    },
    {
        id : 2,
        name : "Iphone 7 Plus",
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: "Sản phẩm do Apple sản xuất",
        price : 1000,
        inventory :25,
        rating : 4
    },
    {
        id : 3,
        name : "Nokia 6.1 Plus",
        image : "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636737264632684088_nokia6plus-trang-1.jpg",
        description: "Sản phẩm do Nokia sản xuất",
        price : 500,
        inventory : 15,
        rating : 3
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default reducer;