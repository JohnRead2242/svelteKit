import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<ul>${each(data.posts, ({ id, title }) => {
    return `<li><a href="${"/posts/" + escape(id, true)}">${escape(title)}</a></li>`;
  })}</ul>`;
});
export {
  Page as default
};
