var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var reviewListElement = document.querySelector("#reviewList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchReview(searchElement.value);
    };

    var renderResult = function (results) {
        reviewListElement.innerHTML = "";
        results.forEach(function (review) {
            var name = review.name;
            var judul = review.judul;
            var image = review.fanArt;
            var description = review.description;

            var reviewElement = document.createElement("div");
            reviewElement.setAttribute("class", "review");

            reviewElement.innerHTML =
                '<img class="image-review" src="' + image + '">\n' +
                '<div class="review-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<h1>' + judul + '</h1>\n' +
                '<p>' + description + '</p>' +
                '</div>';
            reviewListElement.appendChild(reviewElement);
        })
    };

    var fallbackResult = function (message) {
        reviewListElement.innerHTML = "";
        reviewListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};