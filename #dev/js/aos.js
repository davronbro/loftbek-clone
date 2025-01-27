AOS.init({
  once: true,
  disable: function () {
    const maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
