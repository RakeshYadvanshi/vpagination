  vlarnPagination = {
            default: {
                activePage: 1,
                totalItems: 0,
                itemPerPage: 10,
                totalPages: 0,
                autoCount: true,
                showPagination: "auto",
                paginationLocation: "belowtfoot",
                activeClassName: "active",
                ref: $("table")
            },
            pageClick: function (i) {
                this.default.activePage = i;
                $(this.default.ref).find("tbody tr").hide();
                for (var i = 0; i < this.default.totalItems; i++) {
                    if (i > (((this.default.activePage - 1) * this.default.itemPerPage)) - 1 && i < this.default.activePage * this.default.itemPerPage) {
                        $(this.default.ref).find("tbody tr:eq(" + i + ")").show("slow");
                    }
                }
                $(this.default.ref).find("tfoot span.active").removeClass("active");
                $(this.default.ref).find("tfoot span:eq(" + i + ")").addClass("active");

            },
            init: function (nodeHandle, obj) {

                //intializing defaults
                if (obj) {
                    this.default = obj;
                }

                if (nodeHandle) { this.default.ref = nodeHandle };

                // counting the count of rows
                if (this.default.autoCount) {
                    this.default.totalItems = $(this.default.ref).find("tbody").find("tr").length;
                }

                //handling pagination visibility
                this.default.showPagination = true;
                if (this.default.totalItems <= this.default.itemPerPage && this.default.showPagination == "auto") {
                    this.default.showPagination = false;
                }
                else if (this.default.showPagination == "false") {
                    this.default.showPagination = false;
                }
                this.pageClick(this.default.activePage);

                // adding tfoot if does not exists
                if ($(this.default.ref).find("tfoot"))
                    $(this.default.ref).append("<tfoot></tfoot>")

                //creating pagination navbar

                alert();
                this.default.pageCount = this.default.totalItems % this.default.itemPerPage > 0 ?
                  this.default.totalItems / this.default.itemPerPage + 1 :
                  this.default.totalItems / this.default.itemPerPage;

                console.log(this.default.pageCount);
                for (var i = 1; i <= this.default.pageCount; i++) {
                    if (i != this.default.activePage) {
                        $(this.default.ref).find("tfoot").append("<span onclick='vlarnPagination.pageClick(" + i + ")'>" + i + "<span>");
                    }
                    else {
                        $(this.default.ref).find("tfoot").append("<span class='active' onclick='vlarnPagination.pageClick(" + i + ")'>" + i + "<span>");
                    }

                }
                console.log(this.default);
            }
        };