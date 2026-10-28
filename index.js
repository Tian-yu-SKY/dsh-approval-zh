/**
 * Host half of the approval-zh bundle.
 *
 * The whole feature lives in the browser half (`./client`, declared through
 * `dsh.client` in package.json): it takes over the `conversation.composer`
 * chain while a Host approval request is pending and renders a plain-Chinese
 * explanation instead of the built-in English-reason card. The Host half
 * intentionally registers nothing model-facing.
 */
export function apply() {}
