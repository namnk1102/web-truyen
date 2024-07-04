<script setup>

</script>

<template>
    <div class="primary-menu">
        <nav class="navbar navbar-expand-lg align-items-center">
            <div class="container">
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header border-bottom">
                        <div class="d-flex align-items-center">
                            <div class="">
                                <a href="https://monkeyd.vn">
                                    <img src="https://monkeyd.vn/images/logo/Logo-MonkeyD.png" class="logo-icon"
                                         alt="MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024">
                                </a>
                            </div>
                        </div>

                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close">
                        </button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav align-items-center flex-grow-1">
                            <li class="nav-item">
                                <a class="nav-link" href="https://monkeyd.vn">
                                    <div class="menu-title d-flex align-items-center">Trang chủ</div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/truyen-moi">
                                    <div class="menu-title d-flex align-items-center">Truyện mới</div>
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                                   data-bs-toggle="dropdown">
                                    <div class="parent-icon"><i class="bx bx-list-ol"></i>
                                    </div>
                                    <div class="menu-title d-flex align-items-center">Thể loại</div>
                                    <div class="ms-auto dropy-icon"><i class="bx bx-chevron-down"></i></div>
                                </a>

                                <ul class="dropdown-menu scroll-menu ps ps--active-x ps--active-y ps--scrolling-y">
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/bach-hop.html">
                                            <i class="bx bx-chevron-right"></i>Bách Hợp
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/be.html">
                                            <i class="bx bx-chevron-right"></i>BE
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/chua-lanh.html">
                                            <i class="bx bx-chevron-right"></i>Chữa Lành
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/co-dai.html">
                                            <i class="bx bx-chevron-right"></i>Cổ Đại
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/cung-dau.html">
                                            <i class="bx bx-chevron-right"></i>Cung Đấu
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/cuoi-truoc-yeu-sau.html">
                                            <i class="bx bx-chevron-right"></i>Cưới Trước Yêu Sau
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/cuong-thu-hao-doat.html">
                                            <i class="bx bx-chevron-right"></i>Cường Thủ Hào Đoạt
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/di-nang.html">
                                            <i class="bx bx-chevron-right"></i>Dị Năng
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/dam-my.html">
                                            <i class="bx bx-chevron-right"></i>Đam Mỹ
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/dien-van.html">
                                            <i class="bx bx-chevron-right"></i>Điền Văn
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/do-thi.html">
                                            <i class="bx bx-chevron-right"></i>Đô Thị
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/doan-van.html">
                                            <i class="bx bx-chevron-right"></i>Đoản Văn
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/doc-tam.html">
                                            <i class="bx bx-chevron-right"></i>Đọc Tâm
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/ga-thay.html">
                                            <i class="bx bx-chevron-right"></i>Gả Thay
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/gia-dau.html">
                                            <i class="bx bx-chevron-right"></i>Gia Đấu
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/gia-dinh.html">
                                            <i class="bx bx-chevron-right"></i>Gia Đình
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hai-huoc.html">
                                            <i class="bx bx-chevron-right"></i>Hài Hước
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hanh-dong.html">
                                            <i class="bx bx-chevron-right"></i>Hành Động
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hao-mon-the-gia.html">
                                            <i class="bx bx-chevron-right"></i>Hào Môn Thế Gia
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/he.html">
                                            <i class="bx bx-chevron-right"></i>HE
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/he-thong.html">
                                            <i class="bx bx-chevron-right"></i>Hệ Thống
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hien-dai.html">
                                            <i class="bx bx-chevron-right"></i>Hiện Đại
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hoan-doi-than-xac.html">
                                            <i class="bx bx-chevron-right"></i>Hoán Đổi Thân Xác
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/hoc-ba.html">
                                            <i class="bx bx-chevron-right"></i>Học Bá
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hoc-duong.html">
                                            <i class="bx bx-chevron-right"></i>Học Đường
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/hu-cau-ky-ao.html">
                                            <i class="bx bx-chevron-right"></i>Hư Cấu Kỳ Ảo
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/huyen-huyen.html">
                                            <i class="bx bx-chevron-right"></i>Huyền Huyễn
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/khong-cp.html">
                                            <i class="bx bx-chevron-right"></i>Không CP
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/kinh-di.html">
                                            <i class="bx bx-chevron-right"></i>Kinh Dị
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/linh-di.html">
                                            <i class="bx bx-chevron-right"></i>Linh Dị
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/mat-the.html">
                                            <i class="bx bx-chevron-right"></i>Mạt Thế
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/ngon-tinh.html">
                                            <i class="bx bx-chevron-right"></i>Ngôn Tình
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/ngot.html">
                                            <i class="bx bx-chevron-right"></i>Ngọt
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/nguoc.html">
                                            <i class="bx bx-chevron-right"></i>Ngược
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/nguoc-luyen-tan-tam.html">
                                            <i class="bx bx-chevron-right"></i>Ngược Luyến Tàn Tâm
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/nguoc-nam.html">
                                            <i class="bx bx-chevron-right"></i>Ngược Nam
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/nguoc-nu.html">
                                            <i class="bx bx-chevron-right"></i>Ngược Nữ
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/nhan-thu.html">
                                            <i class="bx bx-chevron-right"></i>Nhân Thú
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/nu-cuong.html">
                                            <i class="bx bx-chevron-right"></i>Nữ Cường
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/oe.html">
                                            <i class="bx bx-chevron-right"></i>OE
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/phep-thuat.html">
                                            <i class="bx bx-chevron-right"></i>Phép Thuật
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/phieu-luu.html">
                                            <i class="bx bx-chevron-right"></i>Phiêu Lưu
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/phuong-dong.html">
                                            <i class="bx bx-chevron-right"></i>Phương Đông
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/phuong-tay.html">
                                            <i class="bx bx-chevron-right"></i>Phương Tây
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/quy-tac.html">
                                            <i class="bx bx-chevron-right"></i>Quy tắc
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/se.html">
                                            <i class="bx bx-chevron-right"></i>SE
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/showbiz.html">
                                            <i class="bx bx-chevron-right"></i>Showbiz
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/sung.html">
                                            <i class="bx bx-chevron-right"></i>Sủng
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/thanh-xuan-vuon-truong.html">
                                            <i class="bx bx-chevron-right"></i>Thanh Xuân Vườn Trường
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/tien-hiep.html">
                                            <i class="bx bx-chevron-right"></i>Tiên Hiệp
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/tieu-thuyet.html">
                                            <i class="bx bx-chevron-right"></i>Tiểu Thuyết
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/tong-tai.html">
                                            <i class="bx bx-chevron-right"></i>Tổng Tài
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/tra-thu.html">
                                            <i class="bx bx-chevron-right"></i>Trả Thù
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/trong-sinh.html">
                                            <i class="bx bx-chevron-right"></i>Trọng Sinh
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/va-mat.html">
                                            <i class="bx bx-chevron-right"></i>Vả Mặt
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="https://monkeyd.vn/the-loai/vo-tri.html">
                                            <i class="bx bx-chevron-right"></i>Vô Tri
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/xuyen-khong.html">
                                            <i class="bx bx-chevron-right"></i>Xuyên Không
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                           href="https://monkeyd.vn/the-loai/xuyen-sach.html">
                                            <i class="bx bx-chevron-right"></i>Xuyên Sách
                                        </a>
                                    </li>
                                    <div class="ps__rail-x" style="left: 0px; bottom: -485px; width: 224px;">
                                        <div class="ps__thumb-x" tabindex="0"
                                             style="left: 0px; width: 201px;"></div>
                                    </div>
                                    <div class="ps__rail-y" style="top: 485px; right: 0px; height: 450px;">
                                        <div class="ps__thumb-y" tabindex="0"
                                             style="top: 98px; height: 91px;"></div>
                                    </div>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://monkeyd.vn/truyen-hoan-thanh.html">
                                    <div class="menu-title d-flex align-items-center">Truyện Full</div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://monkeyd.vn/truyen-sang-tac.html">
                                    <div class="menu-title d-flex align-items-center">
                                        <div class="parent-icon">
                                            <i class="bx bx-star"></i>
                                        </div>
                                        Truyện Sáng Tác
                                    </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://monkeyd.vn/danh-sach-nhom-dich">
                                    <div class="parent-icon">
                                        <i class="bx bx-group"></i>
                                    </div>
                                    <div class="menu-title d-flex align-items-center">Team</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>
