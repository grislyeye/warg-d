const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);

function linkPreviewPlugin(md) {
  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    const defaultListItemOpenRenderer = md.renderer.rules.list_item_open || proxy;
    return `<link-preview>${defaultListItemOpenRenderer(tokens, idx, options, env, self)}`;
  };
}

module.exports = linkPreviewPlugin;
