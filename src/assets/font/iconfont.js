!(function(d) {
  var e,
    l =
      '<svg><symbol id="iconmima" viewBox="0 0 1024 1024"><path d="M821.378449 385.237462v-98.597381C821.378449 128.373817 686.056798 0 519.050957 0S216.736354 128.373817 216.736354 286.640081v96.960322C143.00423 388.640483 84.856395 446.955891 84.856395 518.187311v370.929305C84.856395 963.583484 148.547029 1024 227.125881 1024h569.748238c78.630413 0 142.269486-60.403625 142.269486-134.883384V518.187311c0-66.590937-50.851964-121.915811-117.752266-132.924068zM582.12286 730.876133v124.919235H475.430413v-122.869688c-35.731722-17.633837-60.12004-53.056193-60.12004-93.879557 0-58.405639 49.910977-105.699899 111.539174-105.699899s111.539174 47.345821 111.539174 105.699899c0 39.328097-22.635247 73.654783-56.240081 91.868681zM725.500906 383.226586H311.544008V304.209466c0-108.368177 92.642095-196.292447 207.01712-196.292447S725.500906 195.841289 725.500906 304.209466z m0 0" fill="" ></path></symbol><symbol id="iconzhanghu" viewBox="0 0 1024 1024"><path d="M381.78816 481.66912c-47.88224-39.44448-79.31904-98.6112-79.31904-166.89152C302.4896 197.98016 396.75904 102.4 512 102.4s209.5104 95.58016 209.5104 212.3776c0 66.7648-31.41632 127.44704-79.29856 166.89152C791.8592 525.66016 901.12 665.1904 901.12 830.58688 901.12 880.64 860.71296 921.6 811.3152 921.6h-598.6304C163.28704 921.6 122.88 880.64 122.88 830.58688c0-165.376 109.2608-304.9472 258.90816-348.91776z m112.25088 130.4576l-40.40704 144.11776c-2.99008 10.60864 0 21.23776 7.4752 28.81536l40.40704 40.96a14.336 14.336 0 0 0 20.97152 0l40.40704-40.96c7.4752-7.5776 10.46528-18.20672 7.4752-28.81536l-40.40704-144.11776c7.4752-6.06208 11.9808-13.66016 11.9808-24.2688 0-16.6912-13.47584-30.35136-29.94176-30.35136-16.46592 0-29.94176 13.66016-29.94176 30.35136 0 10.60864 4.5056 18.20672 11.9808 24.2688z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = d.document),
        (c = !1),
        (l = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(l, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      c || ((c = !0), o());
    }
    var o, i, c, l;
  })(function() {
    var e, t, n, o, i, c;
    ((e = document.createElement("div")).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (c = o.firstChild).parentNode.insertBefore(i, c))
          : o.appendChild(n));
  });
})(window);
