// import numSession from "./sumSession.js";
// console.log(numSession);

// Đoạn Script 1
var text_copy_info;
var listArr = [];
// Xu ly du lieu nhap vao tra ra html
function func_Press(){
    var arr = [
        {
            link:document.getElementById('link-toa-nha').value.toString(),
            ten:document.getElementById('ten-toa-nha').value.toString(),
            diachi:document.getElementById('dia-chi-toa-nha').value.toString() + ', Tp Hồ Chí Minh',
            quan:document.getElementById('link-quan').value.toString(),
            quan_huyen:document.getElementById('quan-huyen').value.toString(),
        }
    ];
    // Kiem tra da nhap du lieu vo textbox chua
    var check_null = false;
    if(arr[0].link=='' || arr[0].ten=='' || arr[0].diachi=='' || arr[0].quan=='' || arr[0].quan_huyen=='') {
        check_null = true;
    }

    if(check_null!==true){
        var link_toa_nha = '..' + arr[0].link.substring(27); // https://www.officesaigon.vn -- 27 ky tu
        var link_quan = '..' + arr[0].quan.substring(27); // https://www.officesaigon.vn -- 27 ky tu
        var text_HTML_info='';

        // bao gom info
        // var text_HTML_info = '<p>Thông tin các công ty trong tòa nhà <strong><a href="' +arr[0].link+ '" target="_blank">' +arr[0].ten+ '</a></strong> thuộc chuỗi <a href="'+arr[0].quan+'" target="_blank">văn phòng cho thuê quận '+arr[0].quan_huyen+'</a> sẽ được <a href="https://www.officesaigon.vn" target="_blank">Office Saigon</a> chúng tôi update thường xuyên nhất để có những thông tin mới nhất cho quý khách.</p><strong style="font-style: italic;">Xem thêm:</strong><p>- <a href="'+arr[0].link+'" target="_blank">Giá thuê văn phòng làm việc tại tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>- <a href="'+arr[0].link+'" target="_blank">Địa chỉ tòa nhà văn phòng '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>- <a href="'+arr[0].link+'" target="_blank">Các diện tích cho thuê tại tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>Danh sách này được tổng hợp bởi Công ty TNHH Office Saigon - <a href="https://www.officesaigon.vn" target="_blank">Dịch vụ văn phòng cho thuê chuyên nghiệp tại Tp, HCM</a>. Danh sách công ty trong tòa nhà <a href="'+arr[0].link+'" target="_blank"><strong>'+arr[0].ten+'</strong></a> thuộc <a href="'+arr[0].quan+'" target="_blank">văn phòng quận '+arr[0].quan_huyen+'</a> sẽ được chúng tôi cập nhật thường xuyên để các bạn có thể tham khảo tốt nhất.</p><p>Nếu bạn có nhu cầu thuê văn phòng tại <a href="'+arr[0].link+'" target="_blank"><strong>'+arr[0].ten+'</strong></a> vui lòng liên hệ theo thông tin bên dưới.</p></br><p><a href="https://www.officesaigon.vn/gioi-thieu.html"><strong>CÔNG TY TNHH OFFICE SAIGON</strong></a></p><p>Đ/c: Tầng 24, Pearl Plaza Tower, 561A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP HCM</p><p>Hotline 1: <a href="tel:0987110011" rel="nofollow">0987.11.00.11</a> - Hotline 2: <a href="tel:0938339086" rel="nofollow">0938.339.086</a></p><p>Điện thoại: 028 6271 8379 - MST: 0313305546</p><p>Email: <a href="mailto:info@officesaigon.vn" rel="nofollow">info@officesaigon.vn</a> - Website: <a href="https://www.officesaigon.vn">www.officesaigon.vn</a></p>';

        var text_HTML_DichVu_Free = '</br><p><strong>Những dịch vụ MIỄN PHÍ tại <a href="https://www.officesaigon.vn" target="_blank">Office Saigon</a> chúng tôi:</strong></p><p>- <a href="'+arr[0].link+'" target="_blank">Báo giá văn phòng '+arr[0].ten+'</a> miễn phí sau 5 phút.</p><p>- Tư vấn thuê các <a href="'+arr[0].quan+'" target="_blank">cao ốc văn phòng quận '+arr[0].quan_huyen+'</a> cho Doanh nghiệp.</p><p>- Đưa khách hàng đi xem văn phòng thực tế tại <a href="'+arr[0].link+'" target="_blank">'+arr[0].ten+'</a> và các <a href="https://www.officesaigon.vn/cho-thue-van-phong.html" target="_blank">tòa nhà văn phòng cho thuê</a> khác.</p><p>- Đàm phán, thương lượng với Chủ tòa nhà để có <a href="'+arr[0].link+'" target="_blank">mức giá thuê '+arr[0].ten+' tốt</a>.</p><p>- Tư vấn và thiết kế nội thất văn phòng tại <a href="'+arr[0].link+'" target="_blank">'+arr[0].ten+'</a>.</p>';

        if(!document.getElementById('cboxDichVuFree').checked){
            text_HTML_DichVu_Free='';
        }

        // bao gồm info và dịch vụ free : text_HTML_DichVu_Free
        text_HTML_info = '<p>Thông tin các công ty trong tòa nhà <strong><a href="' +arr[0].link+ '" target="_blank">' +arr[0].ten+ '</a></strong> thuộc chuỗi <a href="'+arr[0].quan+'" target="_blank">văn phòng cho thuê quận '+arr[0].quan_huyen+'</a> sẽ được <a href="https://www.officesaigon.vn" target="_blank">Office Saigon</a> chúng tôi update thường xuyên nhất để có những thông tin mới nhất cho quý khách.</p><strong style="font-style: italic;">Xem thêm:</strong><p>- <a href="'+arr[0].link+'" target="_blank">Giá thuê văn phòng làm việc tại tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>- <a href="'+arr[0].link+'" target="_blank">Địa chỉ tòa nhà văn phòng '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>- <a href="'+arr[0].link+'" target="_blank">Các diện tích cho thuê tại tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p><p>Danh sách này được tổng hợp bởi Công ty TNHH Office Saigon - <a href="https://www.officesaigon.vn" target="_blank">Dịch vụ văn phòng cho thuê chuyên nghiệp tại Tp, HCM</a>. Danh sách công ty trong tòa nhà <a href="'+arr[0].link+'" target="_blank"><strong>'+arr[0].ten+'</strong></a> thuộc <a href="'+arr[0].quan+'" target="_blank">văn phòng quận '+arr[0].quan_huyen+'</a> sẽ được chúng tôi cập nhật thường xuyên để các bạn có thể tham khảo tốt nhất.</p>'+text_HTML_DichVu_Free+'<p>Nếu bạn có nhu cầu thuê văn phòng tại <a href="'+arr[0].link+'" target="_blank"><strong>'+arr[0].ten+'</strong></a> vui lòng liên hệ theo thông tin bên dưới.</p> </br><p><a href="https://www.officesaigon.vn/gioi-thieu.html"><strong>CÔNG TY TNHH OFFICE SAIGON</strong></a></p><p>Đ/c: Tầng 24, Pearl Plaza Tower, 561A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP HCM</p><p>Hotline 1: <a href="tel:0987110011" rel="nofollow">0987.11.00.11</a> - Hotline 2: <a href="tel:0938339086" rel="nofollow">0938.339.086</a></p><p>Điện thoại: 028 6271 8379 - MST: 0313305546</p><p>Email: <a href="mailto:info@officesaigon.vn" rel="nofollow">info@officesaigon.vn</a> - Website: <a href="https://www.officesaigon.vn">www.officesaigon.vn</a></p>';

        var text_HTML = '<p style="width: 100%; height: 2px; background-color: #a52a2a;"></p><p><a href="'+arr[0].link+'" target="_blank">Tòa nhà văn phòng '+arr[0].ten+'</a> <a href="'+arr[0].quan+'" target="_blank">văn phòng cho thuê quận '+arr[0].quan_huyen+'</a></p><p>--------------------</p><p><a href="'+arr[0].link+'" target="_blank">tòa nhà '+arr[0].ten+'</a>, <a href="'+arr[0].link+'" target="_blank">số '+arr[0].diachi+'.</a></p><p>--------------------</p><p id="link-toanha" style="user-select: all;">'+link_toa_nha+'</p><p style="width: 100%; height: 2px; background-color: #a52a2a;"></p><p id="tnvpct-thuoc-chuoi-van-phong-quan" style="user-select: all;"><a href="'+arr[0].link+'" target="_blank">Tòa nhà '+arr[0].ten+'</a> thuộc chuỗi <a href="'+arr[0].quan+'" target="_blank">văn phòng cho thuê quận '+arr[0].quan_huyen+'</a></p><p>--------------------</p><p><a href="'+arr[0].link+'" target="_blank">tòa nhà '+arr[0].ten+'</a>, <a href="'+arr[0].quan+'" target="_blank">văn phòng cho thuê quận '+arr[0].quan_huyen+'</a>, <a href="'+arr[0].link+'" target="_blank">số '+arr[0].diachi+'</a></p><p style="width: 100%; height: 2px; background-color: #a52a2a;"></p><p id="ghi-chu-hinh-anh" style="user-select: all;">Hình ảnh bên ngoài <a href="'+arr[0].link+'">tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</p>';


        if(!document.getElementById('cboxMorong').checked){
            document.getElementById('show').style.display='none';
        }else{
            document.getElementById('show').style.display='block';
        }
        

        
        document.getElementById('show-info').innerHTML = text_HTML_info;
        document.getElementById('show').innerHTML = text_HTML;
        
        
        // gan gia tri de coppy info // btn_Copy_Info
        text_copy_info = text_HTML_info;
        document.getElementById('btn_Copy_Info').style.display = 'block';
        
    }
    else{
        alert("Nhập dữ liệu đầy đủ!");
    }

    // xu ly Counter
    var oldValue = 0;
    if(document.getElementById('output').textContent !=''){
        oldValue = document.getElementById('output').textContent;
    }
    
    clickCounter(Number(oldValue)); // Goi ham dem tong Actions
    // clickCounter(numSession); // Goi ham dem tong Actions
    clickCounter_Session() // Goi ham dem Session Actions cho  User

    // Ham Copy ghi-chu-hinh-anh
    document.getElementById('ghi-chu-hinh-anh').onclick = function(){
        var text = document.getElementById('ghi-chu-hinh-anh').innerHTML;
        func_Copy(text);
    }

    // Ham Copy Link Tòa Nhà
    document.getElementById('link-toanha').onclick = function(){
        var text = document.getElementById('link-toanha').innerHTML;
        func_Copy(text);
    }

    // Ham Copy Tòa nhà ABC thuộc chuỗi văn phòng quận X
    document.getElementById('tnvpct-thuoc-chuoi-van-phong-quan').onclick = function(){
        var text = document.getElementById('tnvpct-thuoc-chuoi-van-phong-quan').innerHTML;
        func_Copy(text);
    }

    
    
    // in ra danh sách tòa nhà
    listArr.push([arr[0].ten, arr[0].diachi, arr[0].quan_huyen]);

    // console.log(listArr);
    var outHTML_table = '<table class="table table-hover"><thead><tr><th scope="col">#</th><th scope="col">Tòa nhà</th><th scope="col">Địa chỉ</th><th scope="col">Quận</th></tr></thead><tbody>';
    listArr.forEach(function(element, index){
        outHTML_table += '<tr><th scope="row">'+ index +'</th><td>' + element[0] + '</td><td>'+ element[1] +'</td><td>'+ element[2] +'</td></tr>';
    });
    outHTML_table += '</table></tbody>';
    document.getElementById('showtb').innerHTML = outHTML_table;
    // console.log(outHTML_table);

    //in ra Dịch vụ miễn phí tại Office Saigon
    
    var dichvuFree_html = '<p><strong>Những dịch vụ MIỄN PHÍ tại <a href="https://www.officesaigon.vn" target="_blank">Office Saigon</a> chúng tôi:</strong></p><p>- <a href="'+arr[0].link+'" target="_blank">Báo giá văn phòng '+arr[0].ten+'</a> miễn phí sau 5 phút.</p><p>- Tư vấn thuê các <a href="'+arr[0].quan+'" target="_blank">cao ốc văn phòng quận '+arr[0].quan_huyen+'</a> cho Doanh nghiệp.</p><p>- Đưa khách hàng đi xem văn phòng thực tế tại <a href="'+arr[0].link+'" target="_blank">'+arr[0].ten+'</a> và các <a href="https://www.officesaigon.vn/cho-thue-van-phong.html" target="_blank">tòa nhà văn phòng cho thuê</a> khác.</p><p>- Đàm phán, thương lượng với Chủ tòa nhà để có <a href="'+arr[0].link+'" target="_blank">mức giá thuê '+arr[0].ten+' tốt</a>.</p><p>- Tư vấn và thiết kế nội thất văn phòng tại <a href="'+arr[0].link+'" target="_blank">'+arr[0].ten+'</a>.</p>';
    
    document.getElementById('showDichVuMienPhi').innerHTML = dichvuFree_html;

    func_Next();
}

// Reload trang Web
function func_Reload(){
    location.reload();
}

// Load Demo du lieu vao textbox
function func_Demo(index){
    var arr_Demo = [
        {
            link: 'https://www.officesaigon.vn/toa-nha-saigon-trade-center-tower.html',
            ten: 'Saigon Trade Center',
            diachi: '59 Lý Chính Thắng, phường 6, quận 1',
            quan: 'https://www.officesaigon.vn/van-phong-cho-thue-quan-1.html',
            quan_huyen: '1',
        },
        {
            link: 'https://www.officesaigon.vn/toa-nha-pearl-plaza-tower.html',
            ten: 'Pearl Plaza Tower',
            diachi: '561A Điện Biên Phủ, phường 25, Quận Bình Thạnh',
            quan: 'https://www.officesaigon.vn/van-phong-cho-thue-quan-binh-thanh.html',
            quan_huyen: 'Bình Thạnh',
        }
    ];
    if(index==0){
        document.getElementById('link-toa-nha').value = arr_Demo[0].link;
        document.getElementById('ten-toa-nha').value = arr_Demo[0].ten;
        document.getElementById('dia-chi-toa-nha').value = arr_Demo[0].diachi;
        document.getElementById('link-quan').value = arr_Demo[0].quan;
        document.getElementById('quan-huyen').value = arr_Demo[0].quan_huyen;
    }else{
        document.getElementById('link-toa-nha').value = arr_Demo[1].link;
        document.getElementById('ten-toa-nha').value = arr_Demo[1].ten;
        document.getElementById('dia-chi-toa-nha').value = arr_Demo[1].diachi;
        document.getElementById('link-quan').value = arr_Demo[1].quan;
        document.getElementById('quan-huyen').value = arr_Demo[1].quan_huyen;
    }
}

// Ham xoa textbox rong
function func_Next(){
    document.getElementById('link-toa-nha').value = '';
    document.getElementById('ten-toa-nha').value = '';
    document.getElementById('dia-chi-toa-nha').value = '';
    document.getElementById('link-toa-nha').focus();
    // document.getElementById('show').innerHTML = '';
    // document.getElementById('show-info').innerHTML = '';
}
// Ham luu Web Counter HIT (localStorage)
function clickCounter(initValue){
    // Kiem tra Web Brower
    if(typeof(Storage)!=='undefined'){
        if(localStorage.clickcount){
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }else{
            localStorage.clickcount = 1;
        }
        var counter =  Number(localStorage.clickcount) + initValue;
        document.getElementById('show-hit').innerHTML = 'Total Actions: ' + counter;
        return localStorage.clickcount;
    }else{
    console.log("Web Browser không hỗ trợ Storage Counter")
    }
}

// Ham luu View Session User Hit(sessionStorage)
function clickCounter_Session(){
    // Kiem tra Web Brower
    if(typeof(Storage)!=='undefined'){
        if(sessionStorage.clickcount){
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        }else{
            sessionStorage.clickcount = 1;
        }
        document.getElementById('show-hit-session').innerHTML = 'Session Actions: ' + sessionStorage.clickcount;
        return sessionStorage.clickcount;
    }else{
    console.log("Web Browser không hỗ trợ Storage Counter")
    }
}

function fun_Clear(){
    document.getElementById('link-danh-sach-toa-nha').value = '';
    document.getElementById('ten-toa-nha').value = '';
    document.getElementById('link-danh-sach-toa-nha').focus();
}

function fun_btnPress_Lay_link_ds_cty_dang_lam_viec(){
    var arr = [
        {
            link:document.getElementById('link-toa-nha').value.toString(),
            ten:document.getElementById('ten-toa-nha').value.toString(),
            diachi:document.getElementById('dia-chi-toa-nha').value.toString() + ', Tp Hồ Chí Minh',
            quan:document.getElementById('link-quan').value.toString(),
            quan_huyen:document.getElementById('quan-huyen').value.toString(),
            link_ds:document.getElementById('link-danh-sach-toa-nha').value.toString(),
        }
    ];
    var check_null = false;
    if(arr[0].link_ds == "" || arr[0].ten == "" || arr[0].quan_huyen == ""){
        check_null = true;
        document.getElementById('lbl-ten-toa-nha').style.color = 'red';
        document.getElementById('lbl-quan-huyen').style.color = 'red';
        document.getElementById('lbl-link-danh-sach-toa-nha').style.color = 'red';
    }
    if(check_null!=true){
        var text_HTML = '<p style="user-select: all;"><strong>Xem thêm <a href="'+arr[0].link_ds+'">danh sách các công ty đang làm việc tại tòa nhà '+arr[0].ten+' quận '+arr[0].quan_huyen+'</a>.</strong></p>';
        document.getElementById('show').innerHTML = text_HTML;

        clickCounter(); // Goi ham dem tong Actions
        clickCounter_Session() // Goi ham dem Session Actions cho  User

        document.getElementById('lbl-ten-toa-nha').style.color = 'black';
        document.getElementById('lbl-quan-huyen').style.color = 'black';
        document.getElementById('lbl-link-danh-sach-toa-nha').style.color = 'black';
    }else{
        alert("Nhập đầy đủ dữ liệu");
        document.getElementById('ten-toa-nha').focus();
        
    }
    
    
    
}

// ham copy info
function func_Copy_info(text){
    text = text_copy_info;
    document.body.insertAdjacentHTML("beforeend","<div id=\"copy\" contenteditable>"+text+"</div>")
    document.getElementById("copy").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.getElementById("copy").remove();
}

///////////////// Ham Test

// ham COPY
function func_Copy(text){
    document.body.insertAdjacentHTML("beforeend","<div id=\"copy\" contenteditable>"+text+"</div>")
    document.getElementById("copy").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.getElementById("copy").remove();
}

// Đoạn Scrip 2

// Hảm xử lý copy noi dung link quan vào label Link quận
document.getElementById('link-quan').oninput = function(){
    document.getElementById('lbl-link-quan-2').textContent = document.getElementById('link-quan').value;
}

// Ham Copy Link Quận
document.getElementById('lbl-link-quan-2').onclick = function(){
        var text = document.getElementById('lbl-link-quan-2').textContent;
        func_Copy(text);
}

// Ham Copy Phone
document.getElementById('phone').onclick = function(){
        var text = document.getElementById('phone').textContent;
        func_Copy(text);
}
// Ham Copy link cho thuê văn phòng
document.getElementById('link-chothuevanphong').onclick = function(){
        var text = document.getElementById('link-chothuevanphong').textContent;
        func_Copy(text);
}

// Đoạn Scrip 3

var arr_Quan = [
    {
        quan:'null', // khac [0]
        link:'',
    },
    {
        quan:1, // [1]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-1.html',
    },
    {
        quan:3, // [2]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-3.html',
    },
    {
        quan:4, // [3]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-4.html',
    },
    {
        quan:7, // [4]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-7.html',
    },
    {
        quan:'Bình Thạnh', // [5]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-binh-thanh.html',
    },
    {
        quan:'Phú Nhuận', // [6]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-phu-nhuan.html',
    },
    {
        quan:'Tân Bình', // [7]
        link:'https://www.officesaigon.vn/van-phong-cho-thue-quan-tan-binh.html',
    },
];
// Click Menu Nhap Lieu
if(document.getElementById('menu-0')!=null && document.getElementById('nhap-lieu-0')!=null){
    document.getElementById('menu-0').onclick = function(){
    document.getElementById('nhap-lieu-0').style.display = 'block';
    document.getElementById('nhap-lieu-1').style.display = 'block';
    document.getElementById('nhap-lieu-2').style.display = 'none';
    document.getElementById('phan-dem').style.display = 'none';
    
    document.getElementById('show').style.display = 'block';
    document.getElementById('show-info').style.display = 'block';
    document.getElementById('btn_Copy_Info').style.display = 'none';
    document.getElementById('showDichVuMienPhi').style.display = 'none';

    document.getElementById('menu-0').classList.add('active');
    document.getElementById('menu-1').classList.remove('active');
    document.getElementById('menu-2').classList.remove('active');
}
    // Gan gia tri mac dinh la null cho Textbox Quan.
    if(document.getElementById('radio-button-khac').checked==true){
        document.getElementById('quan-huyen').value = arr_Quan[0].quan;
        document.getElementById('link-quan').value = arr_Quan[0].link;
        
    }
    
    // Click Radio Button Quan (gan su kien onlick)
    document.getElementById('radio-button-bt').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[5].quan;
        document.getElementById('link-quan').value = arr_Quan[5].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[5].link;
    }
    document.getElementById('radio-button-pn').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[6].quan;
        document.getElementById('link-quan').value = arr_Quan[6].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[6].link;
    }
    document.getElementById('radio-button-tb').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[7].quan;
        document.getElementById('link-quan').value = arr_Quan[7].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[7].link;
    }
    document.getElementById('radio-button-khac').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[0].quan;
        document.getElementById('link-quan').value = arr_Quan[0].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[0].link;
        document.getElementById('quan-huyen').focus();
    }
    document.getElementById('radio-button-q1').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[1].quan;
        document.getElementById('link-quan').value = arr_Quan[1].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[1].link;
    }
    document.getElementById('radio-button-q3').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[2].quan;
        document.getElementById('link-quan').value = arr_Quan[2].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[2].link;
    }
    document.getElementById('radio-button-q4').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[3].quan;
        document.getElementById('link-quan').value = arr_Quan[3].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[3].link;
    }
    document.getElementById('radio-button-q7').onclick = function(){
        document.getElementById('quan-huyen').value = arr_Quan[4].quan;
        document.getElementById('link-quan').value = arr_Quan[4].link;
        document.getElementById('lbl-link-quan-2').textContent = arr_Quan[4].link;
    }

}

// Menu Danh sách tòa nhà
document.getElementById('menu-1').onclick = function(){
    document.getElementById('nhap-lieu-2').style.display = 'block';
    document.getElementById('nhap-lieu-1').style.display = 'none';
    document.getElementById('nhap-lieu-0').style.display = 'none';
    document.getElementById('phan-dem').style.display = 'block';
    document.getElementById('show').style.display = 'none';
    document.getElementById('show-info').style.display = 'none';
    document.getElementById('btn_Copy_Info').style.display = 'none';
    document.getElementById('showDichVuMienPhi').style.display = 'none';
    document.getElementById('phan-dem').innerHTML = '<h2>Danh sách tòa nhà</h2>';

    document.getElementById('menu-0').classList.remove('active');
    document.getElementById('menu-1').classList.add('active');
    document.getElementById('menu-2').classList.remove('active');
}

// Menu Dịch vụ miễn phí
document.getElementById('menu-2').onclick = function(){
    document.getElementById('nhap-lieu-2').style.display = 'block';
    document.getElementById('nhap-lieu-1').style.display = 'none';
    document.getElementById('nhap-lieu-0').style.display = 'none';
    document.getElementById('phan-dem').style.display = 'block';
    document.getElementById('show').style.display = 'none';
    document.getElementById('show-info').style.display = 'none';
    document.getElementById('btn_Copy_Info').style.display = 'none';
    document.getElementById('nhap-lieu-2').style.display = 'none';
    document.getElementById('showDichVuMienPhi').style.display = 'block';
    document.getElementById('phan-dem').innerHTML = '<h2>Dịch vụ miễn phí</h2>';

    document.getElementById('menu-0').classList.remove('active');
    document.getElementById('menu-1').classList.remove('active');
    document.getElementById('menu-2').classList.add('active');
}

// Ham xu ly darkmode
document.getElementById('darkmode').onclick = function(){
    if(document.getElementById('show').className == '' && document.getElementById('show-info').className == ''){
        document.getElementById('show').setAttribute('class','darkmode');
        document.getElementById('show-info').setAttribute('class','darkmode');
        document.body.className = 'body-darkmode';
        document.getElementById('nav-top').className = 'navbar navbar-expand-lg navbar-dark bg-dark nav-bg';
        document.getElementById('nav-bottom').className = 'bottom nav-bg';
        document.getElementById('nhap-lieu-2').setAttribute('class','darkmode');
        document.getElementById('showDichVuMienPhi').setAttribute('class','darkmode');
        console.log('darkmode');
        
        

    }
    else{
        document.getElementById('show').setAttribute('class','');
        document.getElementById('show-info').setAttribute('class','');
        document.body.className = '';
        document.getElementById('nav-top').className = 'navbar navbar-expand-lg navbar-dark bg-dark';
        document.getElementById('nav-bottom').className = 'bottom';
        document.getElementById('nhap-lieu-2').setAttribute('class','');
        document.getElementById('showDichVuMienPhi').setAttribute('class','');
        console.log('lightmode');
    }
        
       
}

// Xu ly button Search Google
document.getElementById('btnSearch').onclick = function(){
    document.location.href = 'https://www.google.com/search?q=' + document.getElementById('inputSearch').value;
};


// lay noi dung tu file text
document.getElementById('inputfile').addEventListener('change', function() {
    var fr=new FileReader();
    fr.onload=function(){
        document.getElementById('output').textContent=fr.result;
    }
    
    fr.readAsText(this.files[0]);
})

// JS lấy ngàng tháng năm hiện tại
var today = new Date();
var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById('ngay-hien-tai').innerHTML = " -- Today: " + date;