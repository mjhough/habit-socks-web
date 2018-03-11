$(() => {
  loadSocks();
});

function loadSocks() {
  $.get('/api/products', allProducts => {
    $(allProducts.data).each(function() {
      let template = Handlebars.compile($('#product-template').html());
      let html = template({
        imageUrl: `/assets/${this.attributes.image_url}`,
        id: this.id,
        name: this.attributes.name,
        supplierName: this.attributes.supplier_name,
        price: this.attributes.price
      });
      $(document).ready($('#products').append(html));
    });
  });
}
