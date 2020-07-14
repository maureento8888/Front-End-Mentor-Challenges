// Child: Card
Vue.component("card", {
  template: `
	<div class="card">
	  <img src="images/photosnap.svg" alt="Photosnap brand logo"/>
	</div>
	`,
  data() {
    return {};
  },
});

// Parent: Vue Instance
var app = new Vue({
  el: "#app",
});
