const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
),
  "<50%";
tl.fromTo(".cookie-text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

// Cookie jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -15, rotation: "-20deg", yoyo: true, repeat: -1 }
);
// Cookie's crumbs moving
tl.fromTo(
  "#crumbs",
  { y: 0, rotation: 0 },
  { y: -15, rotation: "-20deg", yoyo: true, repeat: -1 },
  "<"
);

// Fading cookie container on btn click
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const tlClose = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" }
  });
  tl.pause();
  tlClose.to(btn, {
    y: 200,
    ease: "power1.out"
  });
  tlClose.to("#crumbs", { y: 100, ease: "power4.out" }, "<");
  tlClose.to(
    ".cookie-text",
    {
      opacity: 0,
      ease: "power1.out"
    },
    "<"
  );
  tlClose.fromTo(
    ".cookie-container",
    { background: "linear-gradient(260deg, #9b6c50 0%, #4f2626 100%)" },
    {
      background: "#4f2626"
    }
  );
  tlClose.fromTo(
    "body",
    { background: "wheat" },
    {
      background: "#4f2626"
    },
    "<"
  );
  tlClose.to(".cookie", {
    rotate: "360deg",
    x: 400,
    scale: 0.6,
    opacity: 0,
    ease: "power4.out",
    duration: 3
  });
  tlClose.to(".cookie-container", { display: "none" });
});
