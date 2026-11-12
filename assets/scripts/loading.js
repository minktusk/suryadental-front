const loadingObj = {
    loadingPopHTML: document.getElementsByClassName("loading-window")[0],
    loadingPopJQ: $(document.getElementsByClassName("loading-window")[0]),

    showLoading() {
        this.loadingPopJQ.css("display", "flex");
    },

    hideLoading() {
        this.loadingPopJQ.css("display", "none");
    },
}