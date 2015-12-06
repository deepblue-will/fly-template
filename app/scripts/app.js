'use strict';

$(() => {
  let a = $("<span>").text("aaa");
  $("body").append(a);
  a.velocity("slideDown", { duration: 1500 });
  a.velocity("slideUp", { duration: 1500 });
});