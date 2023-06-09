import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><nav><ul><li><a href="/">Главная</a></li>
      <li><a href="/posts">Посты</a></li></ul></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer>footer</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Layout as default
};
