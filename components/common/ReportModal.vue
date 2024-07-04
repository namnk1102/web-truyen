<script setup>

</script>

<template>
    <div class="modal fade" id="reportLicenseModal" tabindex="-1" role="dialog"
         aria-labelledby="reportLicenseModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="reportLicenseModalLabel">Báo cáo tác phẩm vi phạm bản quyền</h5>
                </div>
                <div class="modal-body">
                    <form action="https://monkeyd.vn/report-license" method="POST" id="reportLicenseForm">
                        <input type="hidden" name="_token" value="4WaX9TUY3ErlMkX7fQc53tI3LQTKV6cA8FGI88GW">
                        <div class="mb-3">
                            <label for="violate_link" class="d-block"><b>Link tác phẩm vi phạm</b></label>
                            <input type="text" class="form-control" name="violate_link" id="violate_link"
                                   placeholder="Ex: https://monkeyd.vn/tac-pham-vi-pham.1/" required>
                        </div>
                        <div class="mb-3">
                            <label for="original_link" class="d-block"><b>Link tác phẩm gốc</b></label>
                            <input type="text" class="form-control" name="original_link" id="original_link"
                                   placeholder="Ex: https://example.net/tac-pham-goc.1/" required>
                        </div>
                        <div class="mb-3">
                            <label for="report_email" class="d-block"><b>Email liên hệ</b></label>
                            <input type="email" class="form-control" name="report_email" id="report_email"
                                   required>
                        </div>
                        <div class="mb-3">
                            <label for="confirm_report">
                                <input type="checkbox" name="confirm_report" id="confirm_report" required
                                       value="1"> 
                                Tôi cam kết báo cáo này là đúng sự thật
                            </label>
                        </div>
                        <div class="mb-3 d-flex justify-content-center">
                            <button type="submit" class="btn btn-danger btn-sm m-2">Gửi báo cáo</button>
                            <button type="button" class="btn btn-secondary btn-sm m-2 close" data-dismiss="modal"
                                    aria-label="Close" onclick="jQuery('#reportLicenseModal').modal('hide')">
                                Huỷ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
