$(() => {
  loadSockInfo();
  newReview();
});

function loadSockInfo() {
  let currentSockId = $('#sock-container').data('sock-id');
  $.get('/api/products/' + currentSockId, sockInfo => {
    $('#image').html('<img src="' + `/assets/${sockInfo.data[0].attributes.image_url}` + '">');
    $('#sock-name').text(sockInfo.data[0].attributes.name);
    $('#price').text('$' + sockInfo.data[0].attributes.price);
    $('#description').text(sockInfo.data[0].attributes.description);
    $('#shipping-info').text(sockInfo.data[0].attributes.shipping_info);
    loadReviews(sockInfo);
  });
}

function loadReviews(sockInfo) {
  $(sockInfo.included).each(function() {
    let review = this.attributes.content;
    $('#reviews').append('<li><p>' + review + '</p></li><hr>');
  });
}

function newReview() {
  $('#review-form').on('submit', function() {
    event.preventDefault();
    let contentField = $(this).find('textarea')
    let review = contentField.val();
    contentField.val('');
    let authToken = $(this).find("input[name='authenticity_token']").val();
    let productId = $('#sock-container').data('sock-id');
    $.post('/api/products/' + productId + '/reviews', { content: review, authenticity_token: authToken }, function(data) {
      $('#reviews').append('<li><p>' + data.content + '</p></li><hr>');
    });
  });
}
