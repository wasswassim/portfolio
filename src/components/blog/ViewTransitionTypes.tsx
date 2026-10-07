// Tags each page-to-page navigation with a view-transition type so the stylesheet can pick
// the animation: "open" (blog list -> post) and "close" (post -> list) slide; anything else,
// including language switches, keeps the plain fade. Runs inline in <head> because the
// `pagereveal` event fires before React hydrates. Classic (non-module) script on purpose.
const SCRIPT = `
(function () {
  var LANG = "(en|fr|ar)";
  var list = new RegExp("^/" + LANG + "/blog/$");
  var post = new RegExp("^/" + LANG + "/blog/[^/]+/$");
  function path(url) { try { return new URL(url).pathname; } catch (e) { return ""; } }
  function kind(fromUrl, toUrl) {
    if (!fromUrl || !toUrl) return null;
    var from = path(fromUrl), to = path(toUrl);
    if (from.split("/")[1] !== to.split("/")[1]) return null; // language switch: fade only
    if (list.test(from) && post.test(to)) return "open";
    if (post.test(from) && list.test(to)) return "close";
    return null;
  }
  function tag(event, activation) {
    if (!event.viewTransition || !activation) return;
    var type = kind(activation.from && activation.from.url, activation.entry && activation.entry.url);
    if (type) event.viewTransition.types.add(type);
  }
  addEventListener("pageswap", function (e) { tag(e, e.activation); });
  addEventListener("pagereveal", function (e) { tag(e, window.navigation && window.navigation.activation); });
})();
`;

export default function ViewTransitionTypes() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
