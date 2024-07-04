<script setup>
import {userDarkMode} from "@/composables/state.js";

const {isDarkMode, toggleDarkMode} = userDarkMode();
</script>

<template>
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand gap-3 container">
                <div class="mobile-toggle-menu d-block d-lg-none" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasNavbar">
                    <i class="bx bx-menu"></i>
                </div>

                <div class="topbar-logo-header d-flex">
                    <div class="">
                        <a href="https://monkeyd.vn">
                            <img src="https://monkeyd.vn/images/logo/Logo-MonkeyD.png" class="logo-icon"
                                 alt="MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024"
                                 width="120" height="30">
                        </a>
                    </div>
                </div>

                <div class="search-bar d-lg-block d-none">
                    <div class="position-relative popup-search w-100">
                        <form action="https://monkeyd.vn/tim-kiem" method="GET">
                            <input class="form-control search-input form-control-lg ps-5" type="search"
                                   placeholder="Tìm truyện" name="search" value="" id="searchInputPC"
                                   style="max-height: 40px !important; min-height: inherit !important;">
                            <span
                                class="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4">
                                        <i class="bx bx-search"></i>
                                    </span>
                        </form>

                        <ul id="search-autocomplete">
                            <li class="d-flex justify-content-start align-items-center mb-2 border-bottom">
                                <a href="/trang-lan" class="m-2">
                                    <img src=""
                                         alt="TRĂNG LẶN"
                                         class="img-search">
                                </a>

                                <a href="/trang-lan" class="m-2 search-item-title">
                                    TRĂNG LẶN
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="top-menu ms-auto">
                    <ul class="navbar-nav align-items-center gap-1">
                        <li class="nav-item mobile-search-icon d-flex d-lg-none" data-bs-toggle="modal"
                            data-bs-target="#SearchModal">
                            <a class="nav-link" href="javascript:;">
                                <i class="bx bx-search"></i>
                            </a>
                        </li>

                        <li class="nav-item dark-mode d-flex">
                            <a class="nav-link dark-mode-icon" href="javascript:;" @click="toggleDarkMode">
                                <i v-if="isDarkMode" class="bx bx-sun"></i>
                                <i v-else class="bx bx-moon"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="d-flex justify-content-between">
                    <a href="https://monkeyd.vn/login" class="btn btn-sm btn-primary" style="margin-right: 5px">
                        Đăng nhập</a>
                    <a href="https://monkeyd.vn/tao-tai-khoan" class="btn btn-sm btn-primary">
                        Đăng ký
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>
