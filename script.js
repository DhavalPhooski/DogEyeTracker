const r = new rive.Rive({
  src: "DOG.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
